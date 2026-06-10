function CollectionCard({ collection }) {
  return (
    <article
      className="bridal-frame group relative min-h-[340px] overflow-hidden rounded-[26px] border border-champagne/20 sm:min-h-[430px] sm:rounded-[28px] lg:min-h-[460px] lg:rounded-[32px]"
    >
      <img
        src={collection.image}
        alt={collection.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 motion-reduce:transition-none md:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-maroon/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-champagne">Collection</p>
        <h3 className="font-display text-3xl font-semibold text-ivory sm:text-4xl">{collection.title}</h3>
        <p className="mt-3 text-sm leading-6 text-mist">{collection.copy}</p>
      </div>
    </article>
  )
}

export default CollectionCard
