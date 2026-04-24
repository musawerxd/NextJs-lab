import { Roboto, Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function Home() {
  return (
    <div className={`${inter.variable} ${roboto.variable} min-h-screen`}>
      <h1 className="font-roboto font-bold text-center pt-40 text-4xl">
        Hi I am Musawer
      </h1>
      <h2 className="font-work-sans font-bold text-center pt-10 text-4xl">
        I am doing BSCS from UAF Subcampus Burewala.
      </h2>
    </div>
  );
}