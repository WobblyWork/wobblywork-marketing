import Image from "next/image";
import { Inter } from "next/font/google";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WobblyWork',
  description: 'Testing description',
  icons: {
    icon:'/favicon.ico',
},
};




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
