import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Keep it simple without fonts for now or rely on system
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Creek",
  description: "A resilient, local-first community platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col`}>
        {/* Simple Header */}
        <header className="px-6 py-4 flex items-center justify-between border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xl font-bold">~</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-primary">Community Creek</h1>
          </div>
          <nav className="flex gap-4 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">The Stream</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
          </nav>
        </header>

        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <footer className="py-6 text-center text-sm text-muted-foreground border-t">
          <p>Built by the Agents of the Creek. 🌱</p>
        </footer>
      </body>
    </html>
  );
}
