import { Button } from "@radix-ui/themes";
import { ArrowUpRightIcon } from "lucide-react";

interface FeaturesBannerProps {
    title: string;
    text: string;
    buttonText?: string;
}

function FeaturesBanner({ title, text, buttonText }: FeaturesBannerProps) {
    return (
        <div className="px-30 py-23 flex bg-[#1A1A1A] items-center justify-between text-white gap-4">

            <div className="flex flex-col items-start gap-5">
                <span className="py-1 px-3 text-[13px] bg-gray-600/20 rounded">{text}</span>
                <h2 className=" text-5xl font-medium">{title}</h2>
            </div>

            <div>
                {buttonText ? <button className="flex items-center gap-2 justify-between bg-[#141414] text-gray-400/80 border-2 border-gray-600/50 px-4 py-2 rounded-md hover:cursor-pointer transition">
                    {buttonText}
                    <ArrowUpRightIcon className="w-6 h-7 pt-1 text-yellow-300" />
                </button> : null}
            </div>

        </div>
    )
}
export default FeaturesBanner