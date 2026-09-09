const layers = [
  {
    number: '01',
    title: 'De godsnaam zichtbaar in de tekst',
    body: 'Op elke plek waar het Hebreeuws Elohim of YHWH gebruikt, staat dat in de Studiebijbel apart aangegeven — in plaats van de gangbare vertaling met “God” of “HEERE”, die dat onderscheid juist wegneemt.',
  },
  {
    number: '02',
    title: 'Aantekeningen bij de context',
    body: 'Korte, feitelijke noten geven aan waarom een naam op die plek gebruikt wordt en wat er in het Hebreeuws precies staat, zonder de leeservaring van de tekst zelf te onderbreken.',
  },
  {
    number: '03',
    title: 'De volledige NBG 1951 als basis',
    body: 'Anders dan de ingekorte leesversie, laat de Studiebijbel de tekst grotendeels intact — bedoeld om naast je eigen Bijbel te leggen, niet om die te vervangen.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <a className="badge" href="https://christeneninnederland.nl" target="_blank" rel="noopener noreferrer"><span className="badge__dot" />Netwerk Christenen in Nederland</a>
          <p className="eyebrow">Vertaling · Studie · Herschikking</p>
          <h1 id="hero-title">Zo heb je de Bijbel<br />nog nooit gelezen</h1>
          <div className="names"><span className="names__elohim">Elohim</span><span className="names__and">&amp;</span><span className="names__yhwh">YHWH</span></div>
          <p className="lead">Ervaar zelf hoe in de oorspronkelijke Hebreeuwse tekst de godsnamen Elohim en YHWH gebruikt werden — verwerkt in een chronologisch herschikte, sterk ingekorte leesversie op basis van de NBG 1951.</p>
          <div className="actions">
            <a className="button button--ghost" href="#studiebijbel">Lees over de Studiebijbel</a>
            <a className="button button--primary" href="https://1drv.ms/f/c/e7fb91e43989f306/EgbziTnkkfsggOczCQAAAAABkLA_hUoRG5wlKm8zmOmIOQ?e=sPrztW" target="_blank" rel="noopener noreferrer">Ga naar de gratis downloadmap</a>
          </div>
          <div className="cable" />
          <p className="cable__label">AANGESLOTEN OP DE BRON — HEBREEUWSE GRONDTEKST</p>
        </div>
      </section>

      <section className="study" id="studiebijbel" aria-labelledby="study-title">
        <div className="study__inner">
          <div className="study__spacer" aria-hidden="true" />
          <div>
            <p className="study__eyebrow">De Studiebijbel</p>
            <h2 id="study-title">Eén tekst, drie lagen dichterbij de grondtekst</h2>
            <p className="study__lead">Waar de leesversie de tekst inkort en herschikt tot een doorlopend verhaal, blijft de Studiebijbel dicht bij de volledige NBG 1951-tekst — met de Hebreeuwse godsnamen zichtbaar gemaakt en toegelicht, zodat je zelf kunt zien waar Elohim staat en waar YHWH.</p>
            <div className="layers">
              {layers.map((layer) => <article className="layer" key={layer.number}><span className="layer__number">{layer.number}</span><div><h3>{layer.title}</h3><p>{layer.body}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 12-12-2024 Elohim-YHWH-Bijbel — Jan Smit, Ede (Gld), Nederland</p>
        <div className="footer__links"><a href="https://Elohim-YHWH-Bijbel.nl" target="_blank" rel="noreferrer">Elohim-YHWH-Bijbel.nl</a><a href="https://www.linkedin.com/in/jan-smit-ede/" target="_blank" rel="noreferrer">LinkedIn — Jan Smit</a></div>
      </footer>
    </main>
  )
}
