export default function ProductCard({ product }) {
  return (
    <article className="card">
      <img
        src={product.image}
        alt={product.title}
        className="card-img"
        loading="lazy"
      />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-desc">
          {product.description?.slice(0, 80)}...
        </p>
        <div className="card-meta">
          <span className="rating">⭐ {product.rating?.rate ?? 4.2}</span>
        </div>
        <div className="card-price">${product.price}</div>
      </div>
    </article>
  )
}
