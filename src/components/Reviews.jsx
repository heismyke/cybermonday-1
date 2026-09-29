import Stars from './Stars.jsx'
import { product, reviews } from '../data/product.js'

export default function Reviews() {
  return (
    <section className="section container" id="avis" aria-labelledby="reviews-title">
      <div className="section__head">
        <h2 id="reviews-title">
          <span className="mono accent">{product.rating}/5</span> sur {new Intl.NumberFormat('fr-FR').format(product.reviewCount)} avis
        </h2>
        <p className="muted">Ils ont testé le silence.</p>
      </div>
      <ul className="reviews">
        {reviews.map((r) => (
          <li key={r.name} className="review">
            <Stars value={r.rating} />
            <blockquote>« {r.text} »</blockquote>
            <p className="review__author">
              {r.name} <span className="muted">· {r.city} · Achat vérifié</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
