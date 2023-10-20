import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  const Loading = () => {
    return <div>Loading...</div>;
  };
  return (
    <Suspense fallback={<Loading />}>
      <main className="mt-2">
        <div className="w-full  flex justify-between  rounded-xl">
          <div className="flex-1">
            <div className="relative  text-white p-4 h-[280px] border-white border rounded-xl">
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
                className="cursor-pointer transition ease-out duration-500 absolute bottom-5 right-5"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-100 via-indigo-100 to-sky-700  text-center text-[130px] font-bold w-full  my-2 rounded-xl">
              Let's Vespa
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 ">
            <Image
              src="/bg1.jpg"
              width={350}
              className="p-4 col-span-2 rounded-[25px]"
              height={250}
              alt="vespa one"
            />
            <div className="col-span-2">
              <Image
                src="/vespa-bg-2.jpg"
                width={450}
                className=" rounded-[10px]"
                height={250}
                alt="vespa one"
              />{" "}
              <Image
                src="/vespa-red.jpg"
                width={250}
                className="rounded-[10px] mt-4"
                height={150}
                alt="vespa one"
              />
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
