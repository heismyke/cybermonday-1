import Countdown from './Countdown.jsx'
import { offer, product } from '../data/product.js'
import { formatPrice } from '../utils/format.js'

export default function FinalCTA({ onOrder }) {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="container final__inner">
        <p className="eyebrow">L’offre Cyber Monday se termine dans</p>
        <Countdown endsAt={offer.endsAt} size="lg" />
        <h2 id="final-title">{product.name} à {formatPrice(product.price)}.</h2>
        <p className="final__price">
          <s>{formatPrice(product.oldPrice)}</s>
          <span className="badge">{offer.discount}</span>
        </p>
        <button type="button" className="btn btn--large" onClick={onOrder}>
          {product.cta}
        </button>
        <p className="final__note">Plus que {product.stockLeft} casques · Livraison 48 h offerte · Garantie 2 ans</p>
      </div>
    </section>
  )
}
