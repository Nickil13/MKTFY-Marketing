import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-nav-mobile md:pt-nav flex-initial">
                {children}
            </main>
            <Footer />
        </>
    );
}
