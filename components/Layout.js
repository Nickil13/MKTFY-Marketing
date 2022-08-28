import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-nav min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
