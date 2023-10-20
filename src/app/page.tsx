import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  const Loading = () => {
    return <div>Loading...</div>;
  };
  return (
    <Suspense fallback={<Loading />}>
      <main className="mt-2 h-full">
        <div className="w-full justify-between grid grid-rows-2 pb-4 md:grid-rows-none grid-cols-1 md:grid-cols-4 gap-0 md:gap-4 rounded-xl">
          <div className="col-span-2">
            <div className="relative transition ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-101 duration-300  text-white p-4 min-h-[280px] border-white border rounded-xl">
              <div>
                <div className="text-[36px] font-bold">Welcome to Vespa</div>
                <div className="mt-4 text-[20px]">
                  Your Ultimate Destination for Adventurous Travel
                </div>
                <div className=" font-[200] my-4">
                  🌍 Are you ready to embark on unforgettable journeys and
                  experience the thrill of the open road? At Vespa, we're
                  passionate about exploration, adventure, and the freedom of
                  two-wheeled travel. Whether you're a seasoned rider or a
                  curious beginner, our platform is your gateway to discovering
                  the world in a whole new way.
                </div>
              </div>
              <Image
                src={"/point.svg"}
                className="cursor-pointer absolute bottom-5 right-5"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="cursor-pointer bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] col-span-2 from-cyan-100 via-indigo-100 to-sky-700  text-center text-[50px] md:text-[80px] font-bold w-full  my-2 rounded-xl">
              Let's Vespa
            </div>
            <div className="w-full flex ">
              <div className="bg-gradient-to-r text-[36px] font-bold flex items-center transition-all duration-700 justify-center from-gray-700 text-center via-gray-900 to-black bg-size-200 bg-pos-0 hover:bg-pos-100 text-white p-4 h-[270px] border rounded-xl  flex-1">
                Latest News
              </div>
              <div className="bg-gradient-to-br cursor-pointer whitespace-pre-line transition-all duration-700  text-[28px] font-bold text-center flex items-center justify-center from-sky-800 via-purple-300 to-fuchsia-900 bg-size-200 bg-pos-0 hover:bg-pos-100  text-white p-4 h-[270px] md:h-[250px] ml-4  rounded-xl flex-1">
                {"Vespa Racing\nSixties"}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/bg1.jpg"
              width={350}
              className=" rounded-[10px]"
              height={250}
              alt="vespa one"
            />
            <div className="w-full flex justify-center items-center  bg-white rounded-xl my-4 h-[170px]">
              <Image
                src="/point-black.svg"
                width={100}
                className="border border-black rounded-full p-4"
                height={100}
                alt="point-black"
              />
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/vespa-bg-2.jpg"
              width={450}
              className="rounded-[10px]"
              height={250}
              alt="vespa one"
            />{" "}
            <Image
              src="/vespa-red.jpg"
              width={350}
              className="rounded-[10px] mt-4"
              height={100}
              alt="vespa one"
            />
          </div>
        </div>
      </main>
    </Suspense>
  );
}
