import { specs } from '../data/product.js'

export default function Specs() {
  return (
    <section className="container specs" id="specs" aria-label="Caractéristiques clés">
      <ul>
        {specs.map((s) => (
          <li key={s.label}>
            <p className="specs__value">
              {s.value}
              <span>{s.unit}</span>
            </p>
            <p className="specs__label">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
