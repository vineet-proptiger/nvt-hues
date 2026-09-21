export default function sitemap() {
  const baseUrl = 'https://nvtwhisperinghuesvilla.co.in'
  return [
    {
      url: `${baseUrl}/a-life-in-bloom-by-nvt-sarjapur`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/a-life-in-bloom-by-nvt-sarjapur/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
