// import Snowfall from "react-snowfall";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reece Morgan | Advent of Code",
  description: "Advent of Code Portfolio piece created with Next and Typescript",
};

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
        {/* <Snowfall /> */}
        {children}
      </body>
    </html>
  );
}
