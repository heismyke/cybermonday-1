import { brand, whatsapp } from '../data/product.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="logo">{brand}</p>
          <p className="muted">Audio sans fil, pensé à Cotonou.</p>
        </div>
        <ul className="footer__pay" aria-label="Moyens de paiement acceptés">
          <li>MTN MoMo</li>
          <li>Moov Money</li>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>À la livraison</li>
        </ul>
        <div className="footer__contact">
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <p className="muted">© 2026 {brand}. Cotonou, Bénin.</p>
        </div>
      </div>
    </footer>
  )
}
