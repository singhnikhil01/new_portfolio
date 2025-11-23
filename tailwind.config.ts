import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
    },
  },
  safelist: [
    // Social icon background colors
    'hover:bg-blue-50', 'hover:bg-blue-900/20',
    'hover:bg-gray-100', 'hover:bg-gray-700',
    'hover:bg-indigo-50', 'hover:bg-indigo-900/20',
    'hover:bg-red-50', 'hover:bg-red-900/20',
    'text-[#0A66C2]', 
    'text-gray-800', 'text-gray-200',
    'text-[#1DA1F2]', 
    'text-[#5865F2]', 
    'text-[#EA4335]', 
    'text-[#4285F4]', 
    'hover:bg-blue-50', 'hover:bg-gray-100', 'hover:bg-indigo-50', 'hover:bg-red-50',
  ],
  plugins: [],
} satisfies Config;
