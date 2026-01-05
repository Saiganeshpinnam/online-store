import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FiltersPanel from './components/FiltersPanel.jsx'
import ProductCard from './components/ProductCard.jsx'

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(1000)
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error('Failed to load products', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // ✅ Categories should be derived from ALL products
  const categories = useMemo(() => {
    return ['all', ...new Set(products.map(p => p.category))]
  }, [products])

  const filteredProducts = useMemo(() => {
    let list = [...products]

    // 🔍 Search filter
    if (searchQuery.trim()) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // 📂 Category filter
    if (selectedCategory !== 'all') {
      list = list.filter(p => p.category === selectedCategory)
    }

    // 💰 Price filter
    list = list.filter(p => p.price <= priceRange)

    // ↕ Sorting
    if (sort === 'low-high') {
      list.sort((a, b) => a.price - b.price)
    } else if (sort === 'high-low') {
      list.sort((a, b) => b.price - a.price)
    }

    return list
  }, [products, searchQuery, selectedCategory, priceRange, sort])

  return (
    <>
      <Header onSearch={setSearchQuery} />

      <main className="container">
        <h1 className="page-title">Discover Our Products</h1>
        <h2 className="page-subtitle">
          Browse our latest collection of premium goods designed for the modern lifestyle.
        </h2>

        <div className="layout">
          <FiltersPanel
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sort={sort}
            setSort={setSort}
          />

          <section className="grid">
            {loading && <p>Loading products...</p>}
            {!loading && filteredProducts.length === 0 && (
              <p>No products match the filter.</p>
            )}

            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
