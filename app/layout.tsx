import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naiva Heights | Serviced Apartments in Naivasha",
  description: "Comfortable, thoughtfully furnished apartments in Naivasha. Explore our spaces and enquire about your stay at Naiva Heights.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}