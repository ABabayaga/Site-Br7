// `id` aceita null para a cópia decorativa que o SectionTransition pinta
// dentro da cortina — duas instâncias com o mesmo id quebrariam a âncora.
export default function Manifesto({ id = 'manifesto' }: { id?: string | null }) {
  return (
    // min-h-screen + centro vertical: o primeiro scroll da seção é também o que
    // a cortina do SectionTransition revela, e o wipe abre a partir do centro da
    // viewport — com o conteúdo ancorado no topo, essa origem caía no vazio de
    // layout e a cortina parecia abrir vazia.
    // O fundo é `lane-deep`, não `lane`: mesmo rosa um tom mais fechado, o
    // único que sustenta o corpo de texto em `chalk` acima de 4.5:1.
    <section
      id={id ?? undefined}
      className="relative flex min-h-screen items-center overflow-hidden bg-lane-deep py-24 text-chalk lg:py-40"
    >
      <div className="relative mx-auto w-full max-w-[1800px] px-[4vw]">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <h2 className="max-w-[16ch] font-display text-[11vw] font-bold leading-[0.98] tracking-[-0.03em] text-chalk sm:text-[9vw] lg:col-span-7 lg:text-[6vw]">
            Marca bonita não paga boleto.
          </h2>

          <div className="max-w-md space-y-6 text-lg leading-relaxed text-chalk lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p>
              Entregamos estratégia, criação e execução sem terceirizar o que
              importa.
            </p>
            <p>
              Nascemos falando a língua de quem roda: carga, frota, risco,
              motorista. E aplicamos o mesmo rigor em varejo, serviço e arte.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
