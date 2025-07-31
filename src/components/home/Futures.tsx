import Image from "next/image";
import FutureCards from "../FutureCards";
import React from "react";

interface cardItem {
    heading: string;
    text: string;
}

interface FutureProps {
    icon: string;
    heading: string;
    text: string;
    cards: cardItem[];
}

function Futures({ icon, heading, text, cards }: FutureProps) {
    return (
        <div className="flex pl-20 h-100 border-[1">

            <div className="w-[40%] flex-col flex  justify-center border-r-1 h-full border-gray-600">
                <div>
                    <Image src={icon} alt={"icon"} width={40} height={50} />
                </div>

                <h2 className="pt-8 pb-4 text-4xl text-white"> {heading}</h2>
                <p className=" text-[14px] text-gray-500/80">{text}</p>
            </div>

            <div className="w-[60%] py-10 flex flex-wrap items-center justify-center gap-5">

                {cards.map((card, index) => (
                    <FutureCards key={index} heading={card.heading} text={card.text} />
                ))}
            </div>

        </div>
    )
}
export default Futures