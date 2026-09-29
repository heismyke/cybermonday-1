import SmartImage from './SmartImage.jsx'
import { features, product } from '../data/product.js'

export default function Features() {
  return (
    <section className="section container" id="produit" aria-label="Fonctionnalités">
      {features.map((f, i) => {
        const img = product.images.features[i]
        return (
          <article key={f.title} className={`feature ${i % 2 ? 'feature--flip' : ''}`}>
            <SmartImage src={img.src} alt={img.alt} ratio="1 / 1" />
            <div className="feature__text">
              <p className="eyebrow mono">0{i + 1}</p>
              <h2>{f.title}</h2>
              <p className="muted">{f.text}</p>
              <ul className="checks">
                {f.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </article>
        )
      })}
    </section>
  )
}
