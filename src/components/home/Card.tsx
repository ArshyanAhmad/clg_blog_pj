import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image";

interface CardProps {
    icon: string;
    heading: string;
    span: string;
    text: string
}

export default function Card({ icon, heading, span, text }: CardProps) {
    return (
        <div className="py-10 px-20 flex flex-col gap-7 ">
            <div>
                <Image src={icon} alt="icon" width={30} height={40} />
            </div >
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-white pb-2">{heading}</h4>
                    <span className="text-gray-600">{span}</span>
                </div>
                <ArrowUpRightIcon className="w-9 h-9  cursor-pointer bg-yellow-300 text-md rounded-full" />
            </div>
            <p className="pt-5 text-gray-600/70 text-sm">{text}</p>
        </div >
    )
}

