import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] }); // Inter is the primary font here (system)
export const Lusitana_font = Lusitana({ weight: ["400", "700"] }); // Lusitana_font here will be used as the secondary font

// we can have our local font like this:
// const myFont = localFont({
//   src: './my-font.woff2',
//   display: 'swap',
// })
