import Card from "./home/Card"

function AllCards() {
    return (<div className="flex items-center justify-center w-full  ">
        <div className="flex-[1.2] h-65  border-r-1 border-b-1 border-gray-600">
            <Card
                icon={"/assets/icons/icon_3.png"}
                heading={"Latest News Updates"}
                span={"Stay Current"}
                text={"Over 1,00 articles published monthly"}
            />
        </div>

        <div className="flex-[1.2]  h-65 border-r-1 border-b-1 border-gray-600">
            <Card
                icon={"/assets/icons/icon_2.png"}
                heading={"Expert Contributors"}
                span={"Trusted Insights"}
                text={"50+ renowned AI experts on our team"}
            />
        </div>

        <div className="flex-[1.2]  h-65 border-r-1 border-b-1 border-gray-600">
            <Card
                icon={"/assets/icons/icon_1.png"}
                heading={"Global Readership"}
                span={"Worldwide Impact"}
                text={"2 million monthly readers"}
            />
        </div>


    </div>

    )
}
export default AllCards