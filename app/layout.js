import "./globals.css";

export const metadata = {
  title: "Kalamitra | Handmade Marketplace",
  description:
    "Kalamitra is an e-commerce platform where local artisans sell handmade products and buyers discover authentic crafts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
