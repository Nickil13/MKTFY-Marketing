import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-nav min-h-screen flex-initial">{children}</main>
            <Footer />
        </>
    );
}
