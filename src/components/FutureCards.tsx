interface FutureCardsProps {
    heading: string;
    text: string;
}

function FutureCards({ heading, text }: FutureCardsProps) {
    return (
        <div className="flex p-10 flex-col rounded-md w-90 h-35 bg-[#1a1a1a] ">
            <h4 className="text-lg text-white pb-3">{heading}</h4>
            <p className="text-[12px] text-gray-400">{text}</p>
        </div>

    )
}
export default FutureCards;