import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { Avatar, Flex } from "@radix-ui/themes";

function RightHome() {
    return (
        <div className="relative h-full bg-no-repeat bg-contain bg-right-bottom pl-5">
            <div
                className="absolute inset-0 bg-no-repeat bg-contain  opacity-30"
                style={{
                    backgroundImage: `url('/assets/images/l1.png')`,
                }}
            ></div>

            {/* content */}
            <div className="relative z-10 flex items-end h-full pb-30">
                <div className="text-white p-6 w-full">
                    <Flex gap="[-10px]" className="pb-4">
                        {[
                            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
                            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
                            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
                            "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
                        ].map((src, i) => (
                            <div
                                key={i}
                                className={`w-10 h-10 rounded-full overflow-hidden border-[2px] border-gray-700 shadow-md bg-gray-800 ${i > 0 ? "-ml-3" : ""
                                    }`}
                            >
                                <Avatar src={src} fallback="A" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </Flex>
                    <h4 className="text-lg  text-gray-300 mb-3">Explore 1000+ resources</h4>
                    <p className="text-[14px] text-gray-400/90 mb-8">
                        Over 1,000 articles on emerging tech trends and breakthroughs
                    </p>
                    <button className="flex items-center gap-2 justify-between bg-[#141414] text-gray-400/80 border-2 border-gray-600/50 px-4 py-2 rounded-md hover:cursor-pointer transition">
                        Explore Resources
                        <ArrowUpRightIcon className="w-6 h-7 pt-1 text-yellow-300" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RightHome;
