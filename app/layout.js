
import "./globals.css";


export const metadata = {
  title: "Ecovista | Learn With Sumit",
  description: "Created by mr.rafiqulthedev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
