import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Nikhil Singh | Full-Stack Developer & AI Engineer | Nepal Tech Specialist",
  description: "Kathmandu-based Computer Engineer specializing in Web Development, AI Solutions, and SEO Optimization. Offering end-to-end software development services with expertise in React, Next.js, Python, and Cloud Technologies.",
  keywords: [
    "Full-Stack Developer Nepal",
    "AI Engineer Kathmandu",
    "Computer Engineer Portfolio",
    "Web Development Services Nepal",
    "React Next.js Expert",
    "Python Developer Nepal",
    "Machine Learning Solutions",
    "SEO Specialist Nepal",
    "Cloud Computing Expert",
    "Nepal Tech Industry",
    "Software Development Kathmandu",
    "REST API Development",
    "Database Design Expert",
    "DevOps Engineering Nepal",
    "Natural Language Processing",
    "Predictive Analytics Solutions",
    "Cybersecurity Specialist Nepal",
    "GraphQL Implementation",
    "Digital Marketing Nepal",
    "Tech Consultant Nepal"
  ],
  metadataBase: new URL("https://nikhilsingh.com.np"),
  openGraph: {
    type: "website",
    url: "https://nikhilsingh.com.np",
    title: "Nikhil Singh | Nepal's Premier Tech Solutions Provider",
    description: "Professional portfolio showcasing cutting-edge web development, AI innovations, and digital marketing strategies from Kathmandu",
    siteName: "Nikhil Singh Tech Portfolio",
    images: [{
      url: "https://nikhilsingh.com.np/images/nikhil.png",
      width: 1200,
      height: 630,
      alt: "Nikhil Singh - Tech Portfolio Overview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Singh | Full-Stack & AI Development Expert",
    description: "Building Nepal's tech future with innovative software solutions and AI-driven applications",
    creator: "@nikhilsing45602",
    images: ["https://nikhilsingh.com.np/images/nikhil.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    }
  },
  other: {
    "geo.region": "NP",
    "geo.placename": "Kathmandu",
    "geo.position": "27.7172;85.3240",
    "ICBM": "27.7172, 85.3240",
    "og:email": "singhnikhil03@outlook.com",
    "og:phone_number": "+9779865281881",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nikhil Singh",
            "jobTitle": "Full-Stack Developer & AI Engineer",
            "url": "https://nikhilsingh.com.np",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bhaktapur Road",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "alumniOf": [
              {
                "@type": "CollegeOrUniversity",
                "name": "Amrita Vishwa Vidyapeetham",
                "sameAs": "https://www.amrita.edu/",
                "startDate": "2021",
                "endDate": "2025"
              },
              {
                "@type": "CollegeOrUniversity",
                "name": "Pentagon International College",
                "sameAs": "https://pentagon.edu.np/"
              }
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Developer",
              "skills": [
                "React", "Next.js", "Python", "AI/ML", 
                "Cloud Computing", "SEO Optimization", 
                "Database Design", "REST APIs", "DevOps"
              ],
              "qualifications": "B.Tech in Computer Science & AI"
            },
            "sameAs": [
              "https://linkedin.com/in/nikhilkumarsingh",
              "https://github.com/singhnikhil01",
              "https://x.com/NikhilSing45602"
            ]
          })}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}