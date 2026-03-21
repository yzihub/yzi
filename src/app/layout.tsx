import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YZIHUB",
  description: "Hub central de automações, agentes e integrações YZI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-hub-bg text-hub-text antialiased">
        {children}
      </body>
    </html>
  );
}
