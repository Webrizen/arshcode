import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="p-0 flex flex-row gap-0 items-center">
      <Link href="/" className="px-3 py-2 text-slate-800 hover:bg-slate-100 hover:text-slate-700 rounded-lg">Home</Link> 
      <Link href="/work" className="px-3 py-2 text-slate-800 hover:bg-slate-100 hover:text-slate-700 rounded-lg">Work</Link> 
      <Link href="/blogs" className="px-3 py-2 text-slate-800 hover:bg-slate-100 hover:text-slate-700 rounded-lg">Blogs</Link> 
      <Link href="/contact" className="px-3 py-2 text-slate-800 hover:bg-slate-100 hover:text-slate-700 rounded-lg">Contact</Link> 
    </header>
  )
}
