import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Southgrown — Fresh food. Local people.",
  description: "Find fresh food from growers and small producers across South Australia. A free local marketplace.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
