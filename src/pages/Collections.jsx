import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import CollectionCard from '../components/CollectionCard'
import { products } from '../data/products'
import { collections } from '../data/collections'

function Collections() {
  return (
    <main className="pt-28 sm:pt-32">
      <section className="lux-container pb-16">
        <SectionHeader
          eyebrow="Collections"
          title="Diamond, gold, bridal, and evening jewellery."
          copy="Browse the product showcase, then enquire to view, customize, reserve, or visit the showroom."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>
      <section className="lux-container pb-16 sm:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Collections
