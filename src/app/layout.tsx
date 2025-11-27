import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Nikhil Singh | Full-Stack Developer & AI Engineer",
  description: "Expert Full-Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning. Delivering scalable web applications, AI solutions, and SEO-optimized digital experiences. Based in India, serving clients globally.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Expert",
    "Python Developer",
    "Machine Learning Engineer",
    "Web Development Services",
    "SEO Optimization",
    "Cloud Solutions AWS",
    "REST API Development",
    "GraphQL Developer",
    "NLP Solutions",
    "Computer Engineer",
    "Freelance Developer",
    "Software Consultant",
  ],
  metadataBase: new URL("https://nikhilsingh.dev"),
  
  alternates: {
    canonical: "https://nikhilsingh.dev",
  },
  
  authors: [{ name: "Nikhil Singh", url: "https://nikhilsingh.dev" }],
  
  creator: "Nikhil Singh",
  publisher: "Nikhil Singh",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilsingh.dev",
    title: "Nikhil Singh | Full-Stack Developer & AI Engineer",
    description: "Expert Full-Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning. Delivering scalable web applications and AI solutions.",
    siteName: "Nikhil Singh Portfolio",
    images: [
      {
        url: "https://nikhilsingh.dev/images/nikhil.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Singh - Full-Stack Developer and AI Engineer Portfolio",
        type: "image/png",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@nikhilsing45602",
    creator: "@nikhilsing45602",
    title: "Nikhil Singh | Full-Stack Developer & AI Engineer",
    description: "Expert in React, Next.js, Python, and Machine Learning. Building scalable web applications and AI-driven solutions.",
    images: ["https://nikhilsingh.dev/images/nikhil.png"],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  verification: {
    // Add your verification codes here when you get them
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  category: "Technology",
  
  // Structured data for better SEO
  other: {
    "og:email": "singhnikhil03@outlook.com",
    "og:phone_number": "+977 7481030330",
    "og:country-name": "India",
  },
};

// Optional: Add this JSON-LD structured data to your page for even better SEO
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikhil Singh",
  url: "https://nikhilsingh.dev",
  image: "https://nikhilsingh.dev/images/nikhil.png",
  jobTitle: "Full-Stack Developer & AI Engineer",
  description: "Expert Full-Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning.",
  email: "singhnikhil03@outlook.com",
  telephone: "+977-7481030330",
  sameAs: [
    "https://twitter.com/nikhilsing45602",
    "https://www.linkedin.com/in/nikhilkumarsingh", // Add your actual LinkedIn
    "https://github.com/singhnikhil01", // Add your actual GitHub
  ],
  knowsAbout: [
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "software Engineer",
    "React",
    "Next.js",
    "Python",
    "SEO Optimization",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Amrita Vishwa Vidyapeetham", // Add your university
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