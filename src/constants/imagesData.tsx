export const images = [
  {
    id: 1,
    src: "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPWTbabsEqWzNimubUwCFRt9kg23QrYSey6Goc?format=webp",
    width: 1920,  // Add actual dimensions if possible
    height: 1280,
    category: "Nature",
    caption: "Golden Hour at Nepalese Riverside",
    location: "Rautahat, Nepal",
    description: "Sunrise over river stones in rural Nepal - perfect example of Gandak River landscape photography during golden hour.",
    date: "2021-03-31", // ISO format
    alt: "Golden hour riverside landscape in Rautahat Nepal with glowing stones",
    keywords: ["Nepal nature", "Riverside photography", "Golden hour Nepal"]
  },
  {
    id: 2,
    src: "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPUYPwlo29tEj8GdBrzuSV1InsKa4qgYUpN0Lx?format=webp",
    width: 1920,
    height: 1280,
    location: "Pipra, Rautahat, Nepal",
    category: "Nature",
    caption: "Midday Clouds Over Nepalese Countryside",
    description: "Dramatic cloud formations above agricultural fields in Province 2, showcasing Nepal's diverse weather patterns.",
    date: "2021-12-20",
    alt: "Midday cloud patterns over Pipra Rautahat Nepal landscape photography",
    keywords: ["Nepal agriculture", "Cloud formations", "Rural Nepal"]
  },
  {
    id: 3,
    src: "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPf8M9YUg1LCGtv47JHrT0YagyMQRk9BV3Sfxl?format=webp",
    width: 1920,
    height: 1280,
    location: "Amritapuri, Kerala, India",
    category: "Scenery",
    caption: "Kerala Backwaters Houseboats",
    description: "Traditional Indian houseboats on serene backwaters surrounded by palm trees - iconic South Indian landscape photography.",
    date: "2022-04-22",
    alt: "Kerala backwaters scenery with houseboats and palm trees in India",
    keywords: ["Kerala tourism", "Indian houseboats", "South India travel"]
  },
];



export const schemaData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Nikhil Singh Photography Portfolio",
  description:
    "Landscape and cultural photography from Nepal and India captured by Nikhil Singh",
  copyrightHolder: {
    "@type": "Person",
    name: "Nikhil Singh",
  },
  image: images.map((img) => ({
    "@type": "ImageObject",
    contentUrl: img.src,
    creator: "Nikhil Singh",
    copyrightNotice: `© ${new Date().getFullYear()} Nikhil Singh`,
    dateCreated: img.date,
    width: img.width,
    height: img.height,
    caption: img.caption,
    keywords: img.keywords?.join(", "),
    locationCreated: img.location,
  })),
};