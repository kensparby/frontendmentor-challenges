import { Alata, Josefin_Sans } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: ["400"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300"],
});

export { alata, josefin }
