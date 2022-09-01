import React from "react";

export default function Hero() {
    return (
        <div className=" bg-hero bg-cover bg-no-repeat py-20 2xl:py-36">
            <div className="container h-full flex flex-col justify-center">
                <h1 className="font-bold text-[60px] 2xl:text-[80px] text-white leading-[70px] 2xl:leading-[82px] mb-5 max-w-[765px]">
                    Buy and sell stuff on Market For You
                </h1>
                <p className="text-white font-semibold text-base max-w-md leading-text">
                    Find the stuff you love in one place. Buy, sell and do it
                    all over again on MKTFY. Signup and get started.
                </p>
                <button className="btn-gold mt-11 max-w-btn">Sign up</button>
            </div>
        </div>
    );
}
