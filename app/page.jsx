import Navbar from "./navbar/Navbar";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main className="">
      <header className=" h-screen bg-slate-900 text-white">
        <Navbar />
        <div className=" px-8 md:px-16 lg:px-32 xl:px-64 ">
          <div className=" mt-64 text-center lg:w-1/3 ">
            <h1 className=" text-4xl text-sky-500 font-bold">
              Frontend-Assets
            </h1>
            <h2 className=" text-lg">
              Empowering Frontend Developers with Essential Resources for a
              Journey of Coding Excellence
            </h2>
            <div className="flex gap-4 mt-8 justify-center">
              <button className=" border p-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white">
                <a href="/resources">Resources</a>
              </button>
              <button className=" border p-2 border-white hover:bg-white hover:text-sky-500">
                Recommend
              </button>
            </div>
          </div>
        </div>
      </header>
      <Cards />
    </main>
  );
}
