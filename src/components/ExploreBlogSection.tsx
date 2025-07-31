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
        <div>

            <div>
                <Avatar src={avatar} fallback="A" className="w-full h-full object-cover" />

                <div>
                    <h4>{name}</h4>
                    <span>{category}</span>
                </div>
            </div>

            <div>
                <h5>{date}</h5>

                <h4>{title}</h4>

                <p>{text} </p>
            </div>

            <button className="flex items-center gap-2 justify-between bg-[#141414] text-gray-400/80 border-2 border-gray-600/50 px-4 py-2 rounded-md hover:cursor-pointer transition">
                View Blog
                <ArrowUpRightIcon className="w-6 h-7 pt-1 text-yellow-300" />
            </button>

        </div>
    )
}

export default ExploreBlogSection;