function LeftHome() {
    return (
        <div className="h-full   ">

            <div className="flex h-[70%] flex-col gap-7 justify-center m-auto w-[80%]   border-gray-600">
                <p className="text-[15px] text-gray-500">Your journey to Tomorrow Begins Here</p>

                <h1 className="text-white text-6xl">Explore the Frontiers of Artificial Intelligence</h1>

                <p className="text-[12px] w-120 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet repudiandae iste iure, saepe praesentium numquam libero! Dignissimos adipisci illum sint!</p>

            </div>

            <hr className="bg-gray-600 h-[0.4px] border-none " />

            <div className="flex h-[30%] gap-4 text-center justify-center w-[80%] m-auto items-center ">
                <div className="flex-[1.5] flex flex-col h-full border-r border-gray-600  items-start justify-center gap-2">
                    <h2 className="text-3xl text-white font-bold">300<span className="text-yellow-300">+</span></h2>
                    <span className="text-gray-700 text-sm">Resource available</span>
                </div>

                <div className=" w-65 flex flex-col h-full border-r border-gray-600 items-start justify-center pl-8   gap-2">
                    <h2 className="text-3xl text-white font-bold">12K<span className="text-yellow-300">+</span></h2>
                    <span className="text-gray-700 text-sm">Total Downloads</span>
                </div>

                <div className="flex-1 flex flex-col h-full pl-8 text-left justify-center gap-2">
                    <h2 className="text-3xl text-white font-bold">10K<span className="text-yellow-300">+</span></h2>
                    <span className="text-gray-700 text-sm">Active Users</span>
                </div>
            </div>



        </div>
    )
}
export default LeftHome;