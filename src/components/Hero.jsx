import SmartImage from './SmartImage.jsx'
import Stars from './Stars.jsx'
import { offer, product } from '../data/product.js'
import { formatPrice } from '../utils/format.js'

export default function Hero({ onOrder }) {
  const soldPct = Math.round(((product.stockTotal - product.stockLeft) / product.stockTotal) * 100)

  return (
    <section className="hero" id="top">
      <div className="container hero__text">
        <p className="pill">
          <span className="pill__dot" aria-hidden="true" /> {offer.label} · {offer.discount}
        </p>
        <h1>{product.headline}</h1>
        <p className="hero__lead">{product.tagline}</p>

        <div className="price">
          <span className="price__now">{formatPrice(product.price)}</span>
          <s className="price__was">{formatPrice(product.oldPrice)}</s>
        </div>

        <div className="hero__cta">
          <button type="button" className="btn btn--large" onClick={onOrder}>
            {product.cta}
          </button>
          <a href="#avis" className="rating">
            <Stars value={product.rating} />
            <span>{product.rating}/5 · {new Intl.NumberFormat('fr-FR').format(product.reviewCount)} avis</span>
          </a>
        </div>

        <div className="stock">
          <div className="stock__bar"><span style={{ width: `${soldPct}%` }} /></div>
          <p>
            <span className="mono">{soldPct} %</span> vendus · <strong>plus que {product.stockLeft}</strong> au prix Cyber Monday
          </p>
        </div>
      </div>

      <div className="container">
        <SmartImage src={product.images.hero.src} alt={product.images.hero.alt} ratio="16 / 9" className="hero__image" eager />
      </div>
    </section>
  )
}
