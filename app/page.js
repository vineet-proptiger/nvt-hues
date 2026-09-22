import HomePageClient from '../components/main-domain/HomePageClient'

export const metadata = {
  title: 'NVT Whispering Hues | Luxury 4/5 BHK Homes in Gunjur, Bangalore',
  description: 'NVT Whispering Hues — A thoughtfully planned 70-acre landmark development in Gunjur, Bangalore by NVT. Luxury 4 BHK and 5 BHK villas.',
  alternates: {
    canonical: 'https://nvtwhisperinghuesvilla.co.in/',
  },
  openGraph: {
    title: 'NVT Whispering Hues | Luxury Integrated Development in Gunjur, Bangalore',
    description: 'Discover luxury 4/5 BHK villas at NVT Whispering Hues, an integrated 70-acre landmark development in Gunjur, Bangalore.',
    url: 'https://nvtwhisperinghuesvilla.co.in/',
    siteName: 'NVT Whispering Hues',
  },
}

export default function Home() {
  return <HomePageClient />
}
