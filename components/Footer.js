import React from "react";

export default function Footer() {
    return (
        <div className="bg-footer h-footer">
            <div className="container flex flex-1 text-white py-28">
                <div>
                    <h1>MKTFY</h1>
                    <p>
                        Here at MKTFY we are human centric. We believe the stuff
                        we buy, share and give are the backbone of our society —
                        and we hope to ensure that we do this in a conscious
                        way.
                    </p>
                </div>
                <div>
                    <h2>Jump To:</h2>
                    <ul>
                        <li>About us</li>
                        <li>MKTFY Business</li>
                        <li>Donate with MKTFY</li>
                        <li>News</li>
                    </ul>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>Contact Us</li>
                        <li>+1 888 345 6789</li>
                        <li>
                            Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
