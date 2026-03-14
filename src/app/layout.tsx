import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Guru — Marketing Orchestration",
  description: "AI-guided marketing strategy through the Vibe Marketing Playbook. Build your brand voice, positioning, conversion, traffic, and nurture systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
