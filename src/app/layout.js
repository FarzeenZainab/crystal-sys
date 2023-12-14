import { Inter } from "next/font/google";
import "/src/app/globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meals Mania",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {/* main */}
        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}
