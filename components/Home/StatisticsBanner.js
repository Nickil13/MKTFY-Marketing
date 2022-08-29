import React from "react";
import HeartImage from "../../images/icon_image_heart_hands.svg";
import TransactionImage from "../../images/icon_image_transactions.svg";
import { StatisticCard } from "../Cards";

export default function StatisticsBanner() {
    return (
        <section className="bg-handshake-banner bg-no-repeat bg-cover">
            <div className="container flex flex-wrap justify-center py-20 gap-y-10">
                <StatisticCard
                    image={TransactionImage}
                    value="10,000+"
                    title="Transactions To Date"
                />
                <StatisticCard
                    image={TransactionImage}
                    value="200K+"
                    title="MKTFY Active Users"
                />
                <StatisticCard
                    image={HeartImage}
                    value="50+"
                    title="Partnered Charities"
                />
            </div>
        </section>
    );
}
