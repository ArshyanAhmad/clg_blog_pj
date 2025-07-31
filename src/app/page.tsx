import LeftHome from "@/components/home/LeftHome";
import RightHome from "@/components/home/RightHome";
import AllCards from "@/components/AllCards";
import FeaturesBanner from "@/components/FeaturesBanner";
import Futures from "@/components/home/Futures";
import ExploreBlogSection from "@/components/ExploreBlogSection";
import ExploreFutureTech from "@/components/home/ExploreFutureTech";

export default function Home() {
  return (
    <div className="bg-[#141414] w-full">
      <div className=" h-[70vh]  grid  grid-cols-[55%_45%]">
        <div className="border-r-1 border-gray-600">
          <LeftHome />
        </div>
        <div>
          <RightHome />
        </div>
      </div>

      <hr className="bg-gray-600 h-[0.4px] border-none " />

      {/* Three Cards */}
      <AllCards />


      <FeaturesBanner text="Unlock the Power of" title="FutureTech Features" />

      <hr className="bg-gray-600 h-[0.4px] border-none " />


      <Futures
        cards={[
          { heading: "Quantity", text: "Over 1,000 articles on emerging tech trends and breakthroughs." },
          { heading: "Variety", text: "Articles cover fields like AI, robotics, biotechnology, and more." },
          { heading: "Frequency", text: "Fresh content added daily to keep you up to date." },
          {
            heading: "Authoritative",
            text: "Written by our team of tech experts and industry professionals.",
          },
        ]}
        heading="Future Technology Blog"
        icon="/assets/icons/icon_5.png"
        text="Stay informed with our blog section dedicated to future technology."
      />

      <hr className="bg-gray-600 h-[0.4px] border-none " />

      <Futures
        cards={[
          { heading: "Depth", text: "500+ research articles for in-depth understanding." },
          { heading: "Graphics", text: "Visual aids and infographics to enhance comprehension." },
          { heading: "Trends", text: "Explore emerging trends in future technology research." },
          {
            heading: "Contributors",
            text: "Contributions from tech researchers and academics.",
          },
        ]}
        heading="Research Insights Blogs"
        icon="/assets/icons/icon_4.png"
        text="Dive deep into future technology concepts with our research section."
      />

      <hr className="bg-gray-600 h-[0.4px] border-none " />

      <FeaturesBanner title="Explore FutureTech's In-Depth Blog Posts" text="A Knowledge Treasure Trove" buttonText={"View Blogs"} />

      <hr className="bg-gray-600 h-[0.4px] border-none " />


      <ExploreFutureTech buttonText={[
        { text: "React js" },
        { text: "TypeScript" },
        { text: "Node js" },
        { text: "Docker" },
      ]} />

      <hr className="bg-gray-600 h-[0.4px] border-none " />


    </div>
  );
}
