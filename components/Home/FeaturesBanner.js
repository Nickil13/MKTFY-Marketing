import React from "react";
import AccessibleImage from "../../images/Icon_image_accessible.svg";
import HonestImage from "../../images/icon_image_honest.svg";
import EasyPayImage from "../../images/icon_image_easypay.svg";
import { FeatureCard } from "../Cards";

export default function FeaturesBanner() {
    return (
        <section>
            <div className="container flex flex-wrap items-center justify-center gap-y-16 py-15">
                <FeatureCard image={AccessibleImage} title="Accessible">
                    Access MKTFY from anywhere in the world with our easy to use
                    app. Need a power cable in Italy? We can help!
                </FeatureCard>
                <FeatureCard image={HonestImage} title="Honest">
                    Safety and trust are core values of MKTFY. All your
                    transactions are monitored for fairness and safety.
                </FeatureCard>
                <FeatureCard image={EasyPayImage} title="Easy Payments">
                    Arrange payments with between you and our trusted users. Our
                    application makes it easy to communicate.
                </FeatureCard>
            </div>
        </section>
    );
}
