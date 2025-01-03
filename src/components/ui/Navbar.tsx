"use client";
// components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const router = useRouter();
  const [isOpen] = useState(false);


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="\">
          <div className="text-white text-lg font-bold">Pizza</div>
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="bg-slate-800">
              <SheetHeader>
                <SheetTitle className="font-bold text-white">Pizza</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 text-white">
                    <Link
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"                    
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/blog"
                    >
                      Blog
                    </Link>
                    <button
                      onClick={()=>router.push("/login")}
                      className="text-white hover:bg-orange-400 px-1 py-1 border border-white rounded text-xs"
                    >
                      Login
                    </button>
                    <button
                      onClick={()=>router.push("/login")}
                      className="hover:bg-orange-400 text-white px-1 py-1 border border-white rounded text-xs"
                    >
                      Signup
                    </button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="text-white px-4 py-2 hover:text-orange-400">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white px-4 py-2 hover:text-orange-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white px-4 py-2 hover:text-orange-400"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-white px-4 py-2 hover:text-orange-400"
          >
            Blog
          </Link>
          <button
            onClick={()=>router.push("/login")}
            className="text-white hover:bg-orange-400 px-4 py-2 border border-white rounded"
          >
            Login
          </button>
          <button
            onClick={()=>router.push("/login")}
            className=" mx-2 hover:bg-orange-400 text-white px-4 py-2 border border-white rounded"
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
