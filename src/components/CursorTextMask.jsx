import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

// Faixa colorida que segue o eixo X do mouse sobre um trecho de texto,
// revelando uma cópia branca do mesmo conteúdo por dentro da janela — efeito
// "spotlight" de cor. Reutilizável: qualquer texto pode ser passado via
// children. Duas camadas do MESMO conteúdo ficam sobrepostas — a de baixo
// (cor normal, sempre visível, acessível/selecionável) e uma janela com
// overflow:hidden + fundo colorido contendo a cópia branca, que só existe
// pra decoração visual (aria-hidden).
//
// `ref` é encaminhado pro elemento wrapper, pra permitir que quem usa o
// componente continue animando a entrada dele (ex.: GSAP timeline do Hero)
// como se fosse o próprio texto.
const CursorTextMask = forwardRef(function CursorTextMask(
  { children, maskWidth = 110, maskColor = "#E0176A", activate = true, className = "" },
  ref,
) {
  const wrapperRef = useRef(null);
  const maskRef = useRef(null);
  const innerRef = useRef(null);
  const setMaskX = useRef(null);
  const setInnerX = useRef(null);
  const [supported, setSupported] = useState(false);

  useImperativeHandle(ref, () => wrapperRef.current);

  // Só liga o efeito quando existe mouse de verdade e o usuário não pediu
  // menos movimento — em touch/reduced-motion a janela nem chega a montar.
  useLayoutEffect(() => {
    const hoverFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSupported(hoverFine && !reduced);
  }, []);

  useLayoutEffect(() => {
    if (!supported || !activate) return;

    const wrapper = wrapperRef.current;
    const mask = maskRef.current;
    const inner = innerRef.current;
    if (!wrapper || !mask || !inner) return;

    // Janela começa escondida à esquerda do bloco de texto até o mouse
    // efetivamente entrar na área — evita um retângulo colorido "grudado"
    // na borda antes de qualquer interação.
    gsap.set(mask, { x: -maskWidth });
    gsap.set(inner, { x: maskWidth });

    setMaskX.current = gsap.quickTo(mask, "x", { duration: 0.4, ease: "power3" });
    setInnerX.current = gsap.quickTo(inner, "x", { duration: 0.4, ease: "power3" });

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const max = Math.max(rect.width - maskWidth, 0);
      const x = gsap.utils.clamp(0, max, e.clientX - rect.left - maskWidth / 2);
      // A cópia branca anda na direção oposta pra permanecer registrada
      // sobre o texto real enquanto a janela desliza por cima dele.
      setMaskX.current(x);
      setInnerX.current(-x);
    };

    const handleLeave = () => {
      setMaskX.current(-maskWidth);
      setInnerX.current(maskWidth);
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, [supported, activate, maskWidth]);

  return (
    <span ref={wrapperRef} className={["relative", className].filter(Boolean).join(" ")}>
      {children}

      {supported && (
        <span
          ref={maskRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 block overflow-hidden"
          style={{ width: maskWidth, backgroundColor: maskColor }}
        >
          <span
            ref={innerRef}
            className="absolute inset-y-0 left-0 block whitespace-nowrap text-white"
          >
            {children}
          </span>
        </span>
      )}
    </span>
  );
});

export default CursorTextMask;
