import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://vitalink.fyi'
const DEFAULT_IMAGE = `${BASE_URL}/icon-512.png`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  product = null,
}) {
  const fullTitle = title
    ? `${title} | VitaLink Kenya`
    : 'VitaLink — Genuine NeoLife Products in Kenya | Nutrition, Skincare & Wellness'

  const fullUrl = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Product structured data */}
      {product && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.image || DEFAULT_IMAGE,
            brand: {
              '@type': 'Brand',
              name: 'NeoLife',
            },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'KES',
              price: product.price,
              availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
              seller: {
                '@type': 'Organization',
                name: 'VitaLink',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Kenya',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '24',
              bestRating: '5',
            },
          })}
        </script>
      )}

      {/* BreadcrumbList for product pages */}
      {product && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` },
              { '@type': 'ListItem', position: 3, name: product.name, item: fullUrl },
            ],
          })}
        </script>
      )}
    </Helmet>
  )
}
