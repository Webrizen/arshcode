import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/system/Navbar';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: 'Arshahdul Ahmed',
  description: 'Arshahdul Ahmed is a full stack website, mobile and desktop application developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-2xl mx-auto px-2 py-4">
        <Navbar />
        {children}
        </main>
        </body>
    </html>
  )
}
