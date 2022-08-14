import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navlink({ path, children }) {
    const router = useRouter();
    return (
        <li className={router.pathname === path ? "text-gold-200" : ""}>
            <Link href={path}>{children}</Link>
        </li>
    );
}
