import { Avatar } from "@radix-ui/themes";
import { ArrowUpRightIcon } from "lucide-react";

interface ExploreBlogProps {
    avatar: string;
    name: string;
    category: string;
    date: string;
    title: string;
    text: string;
    // likes: string;
    // comment: string;
}

function ExploreBlogSection({ avatar, name, category, date, title, text }: ExploreBlogProps) {
    return (
        <div className="px-20 py-25 flex items-center ">

            <div className="flex-1 flex gap-4  items-center">
                <Avatar src={avatar} fallback="A" className="w-full h-full   object-cover" radius="full" size="3" />

                <div>
                    <h4 className="text-lg text-gray-300">{name}</h4>
                    <span className="text-gray-500 text-sm">{category}</span>
                </div>

            </div>

            <div className="flex-3 ">
                <h5 className="pb-4 text-gray-500 text-[14px]">{date}</h5>

                <h4 className="pb-2 text-gray-300 text-lg">{title}</h4>
                <p className="text-gray-400 text-sm w-180">{text} </p>
            </div>

            <div className="flex-1">
                <button className="flex  items-center gap-2 justify-between bg-[#141414] text-gray-400/80 border-2 border-gray-600/50 px-4 py-2 rounded-md hover:cursor-pointer transition">
                    View Blog
                    <ArrowUpRightIcon className="w-6 h-7 pt-1 text-yellow-300" />
                </button>
            </div>

        </div>
    )
}

export default ExploreBlogSection;