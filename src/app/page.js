import "./globals.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Header from "@/pages/Header";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full bg-blue-950 text-white items-center">
        <div className="flex container pt-9 pb-9 items-center justify-between p-4 mx-auto">
          <div className=" ">
            <h5 className="italic mb-4 text-2xl">—— Welcome to Pages</h5>
            <h3 className="text-6xl font-Cardo mb-9">
              Books are uniquely <br /> portable magic{" "}
            </h3>
            <p className="text-l opacity-50 mb-9">
              There are many variations of passages of Lorem Ipsum available,{" "}
              <br />
              but the majority have suffered alteration in some form.
            </p>
            <div className="">
              <button className="btn btn-warning">Order Today</button>
              <Link className="link ml-9" href="/">
                Read Free Demo
              </Link>
            </div>
            <div className="mt-12 flex w-100 justify-between">
              <div>
                <h4>🟡 Pages:</h4>
                <p className="opacity-50">586pages</p>
              </div>
              <div>
                <h4>🟡 Length:</h4>
                <p className="opacity-50">10 Hours</p>
              </div>
              <div>
                <h4>🟡 Ratings:</h4>
                <p className="opacity-50">4.5/5 (305 ratings)</p>
              </div>
            </div>
          </div>
          <div>
            <Image src="/book.png" width={592} height={800} alt="Book" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
