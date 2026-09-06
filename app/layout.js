import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://nvtwhisperinghuesvilla.co.in'),
  title: 'NVT Whispering Hues | Luxury 4/5 BHK Homes in Gunjur, Bangalore',
  description: "NVT Whispering Hues — A thoughtfully planned 70-acre landmark development in Gunjur, Bangalore by NVT. Luxury 4 BHK and 5 BHK villas.",
  alternates: {
    canonical: 'https://nvtwhisperinghuesvilla.co.in/',
  },
  openGraph: {
    title: 'NVT Whispering Hues | Luxury Integrated Development in Gunjur',
    description: "Discover luxury 4/5 BHK villas at NVT Whispering Hues, an integrated 70-acre landmark development in Gunjur, Bangalore.",
    url: 'https://nvtwhisperinghuesvilla.co.in/',
    siteName: 'NVT Whispering Hues',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'NVT Whispering Hues Gunjur Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVT Whispering Hues | Luxury 4/5 BHK Homes in Gunjur',
    description: "A thoughtfully planned 70-acre landmark development in Gunjur, Bangalore by NVT.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "NVT Whispering Hues Gunjur",
              "url": "https://nvtwhisperinghuesvilla.co.in/",
              "logo": "https://nvtwhisperinghuesvilla.co.in/images/logo/Logo.webp",
              "image": "https://nvtwhisperinghuesvilla.co.in/images/hero/banner.webp",
              "description": "NVT Whispering Hues, Bangalore's premier luxury integrated development in Gunjur offering 4/5 BHK luxury villas.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gunjur",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560109",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 3 Crore Onwards",
              "sameAs": [
                "https://nvtwhisperinghuesvilla.co.in/"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
