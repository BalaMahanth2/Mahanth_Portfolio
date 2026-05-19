import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mahanth — Aspiring DevOps Engineer | Python Automation",
  description:
    "Portfolio of Mahanth — Junior Pipeline Developer transitioning into DevOps Engineering. Skilled in Python, Linux, Docker, Kubernetes, CI/CD, and Cloud Infrastructure.",
  keywords: [
    "DevOps Engineer",
    "Python Automation",
    "Pipeline Developer",
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS",
    "Mahanth",
  ],
  authors: [{ name: "Mahanth" }],
  metadataBase: new URL("https://mahanth-portfolio.vercel.app"),
  openGraph: {
    title: "Mahanth — DevOps Engineer Portfolio",
    description:
      "Aspiring DevOps Engineer | Python Automation Developer | Pipeline Developer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahanth — DevOps Engineer Portfolio",
    description:
      "Aspiring DevOps Engineer | Python Automation Developer | Pipeline Developer",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white antialiased overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
