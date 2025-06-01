import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jnanayogi International school",
  description: "Empowering tomorrow's leaders through innovation and tradition.",
  themeColor: "#101010",
  generator: 'v0.dev',
  icons: {
    icon: "/assets/logo/logo.jpeg",
    shortcut: "/assets/logo/logo.jpeg",
    apple: "/assets/logo/logo.jpeg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
