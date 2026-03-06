import "./globals.css";

export const metadata = {
  title: "Kayla Kantola",
  description: "Coming soon...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
