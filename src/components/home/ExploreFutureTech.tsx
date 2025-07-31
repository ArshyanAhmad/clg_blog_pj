"use client";

import { useState } from "react";
import ExploreBlogSection from "../ExploreBlogSection";

interface ButtonTextProps {
    text: string;
}

interface ButtonProps {
    buttonText: ButtonTextProps[];
}

function ExploreFutureTech({ buttonText }: ButtonProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div>
            <div className="flex gap-8 items-center p-10 justify-center">
                {buttonText.map((btn, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center gap-2 cursor-pointer justify-between px-13 py-4 rounded-md border-2 transition
                ${isActive
                                    ? "bg-gray-700/30 text-white border-gray-600/30"
                                    : "bg-[#141414] text-gray-400/80 border-gray-600/50"
                                }
              `}
                        >
                            {btn.text}
                        </button>
                    );
                })}
            </div>

            <hr className="bg-gray-600 h-[0.4px] border-none" />

            <ExploreBlogSection
                avatar={
                    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                }
                name={"John Doe"}
                category={"React"}
                date={"20 October 2022"}
                title={"The Quantum leap in Computing"}
                text={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores natus praesentium perferendis iure rerum voluptas placeat exercitationem? Sit, hic repellendus!"
                }
            />

            <ExploreBlogSection
                avatar={
                    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                }
                name={"John Doe"}
                category={"React"}
                date={"20 October 2022"}
                title={"The Quantum leap in Computing"}
                text={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores natus praesentium perferendis iure rerum voluptas placeat exercitationem? Sit, hic repellendus!"
                }
            />

            <ExploreBlogSection
                avatar={
                    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                }
                name={"John Doe"}
                category={"React"}
                date={"20 October 2022"}
                title={"The Quantum leap in Computing"}
                text={
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores natus praesentium perferendis iure rerum voluptas placeat exercitationem? Sit, hic repellendus!"
                }
            />
        </div>
    );
}

export default ExploreFutureTech;
