import { WaitlistModal } from "@/modules/home/waitlistModal";

export default function Home() {
  return (
    <div>
      {/* HEADER: BEGIN */}
      <header className="absolute top-0 left-0 right-0 h-20 z-10 flex">
        <div className="container mx-auto text-white flex-1 flex justify-between items-center">
          <div className="flex-1 flex items-center gap-4">
            <div>
              <img src="/logo.png" className="md:w-full w-24 " />
            </div>
            <p className="hover:underline hover:cursor-pointer">Home</p>
            <p className="hover:underline hover:cursor-pointer">About us</p>
            <p className="hover:underline hover:cursor-pointer">Contact us</p>
          </div>
          <div className="flex-1  md:items-center md:flex-row-reverse hidden md:flex">
            <WaitlistModal />
          </div>
        </div>
      </header>
      {/* HEADER: END */}
      {/* HERO: BEGIN */}
      <div
        className="min-h-screen md:min-h-[75vh] bg-black flex "
        style={{
          backgroundImage: "url('/windowsbgdarken.jpg')",
          backgroundPosition: "center",
          objectFit: "cover",
          filter: "brightness(100%)",
        }}
      >
        <div className="container mx-auto px-5 flex-1 flex justify-between items-center text-white flex-col-reverse md:flex-row">
          <div className="flex-1 flex flex-col items-stretch justify-center">
            <span className="font-thin mb-3">Welcome to Astrahub</span>
            <h1 className="md:text-4xl text-2xl">
              Revolutionize your music with AI: Experience the future of music
              generation with <span className="font-bold">ASTRAHUB</span>
            </h1>
            <div className="p-4 border-l-4 mt-6 border-gray-600 flex flex-col items-stretch justify-center">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
                voluptas.
              </p>
              <div className="mt-2">
                <WaitlistModal />
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:flex md:items-center md:justify-center mt-10 ">
            <img src="/brain-wave-blue.png" />
          </div>
        </div>
      </div>
      {/* HERO: END */}
    </div>
  );
}
