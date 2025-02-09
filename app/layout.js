'use-client';
import "./globals.css";
import localfont from "next/font/local"
import Header from "@/components/header";
import Navbar from "@/components/navbar/navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
const cool = localfont(
  {
    src: [{
      path: "../public/fonts/baleta.ttf",
      weight: "700",
    },],
    variable: "--font-cool"
  }
);

const magelo = localfont(
  {
    src: [{
      path: "../public/fonts/magelo.otf",
      weight: "100",
    },],
    variable: "--font-magelo"
  }
);



export const metadata = {
  title: "portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.style.zoom = "80%"; // Forces 80% zoom
  }, []);
  return (
    <html lang="en">

      <body
        className={`${cool.variable} antialiased`}
      ><div className="main-container">

          <Header >
          </Header>
          {children}

        </div>
        <BentoGrid>

        </BentoGrid>
        <Navbar />
      </body>
    

    </html>
  );
}
