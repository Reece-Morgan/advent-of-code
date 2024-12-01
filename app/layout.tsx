"use client";

import Snowfall from "react-snowfall";
import "./globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Snowfall />
        {children}
      </body>
    </html>
  );
}
