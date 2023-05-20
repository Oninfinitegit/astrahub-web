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

      {/* HITS: BEGIN */}
      <div className="relative min-h-[70vh]">
        <img
          src="/brain-wave-white.png"
          className="absolute left-0 bottom-0 w-[700px] "
        />
        <div className="z-10 relative">
          <div className="container mx-auto my-24">
            <h3 className="text-2xl md:text-4xl font-bold">
              Discover our latest hit
            </h3>
            <div className="mt-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, dicta!
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem qui sit consectetur!
              </p>
            </div>

            <div className="flex items-center  flex-col gap-6 mt-16 lg:flex-row">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="w-[400px] h-[450px] bg-black flex flex-col items-stretch"
                    >
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] bg-gray-500"></div>
                      </div>
                      <div className="text-white w-[80%] mx-auto">
                        <p className="text-sm">Lorem, ipsum.</p>
                      </div>
                      <div className="my-4 text-white text-center">
                        <p className="font-bold">Lorem, ipsum dolor.</p>
                      </div>
                      <div className="my-4 flex items-center justify-center">
                        <button className="btn bg-blue-500 btn-sm">
                          coming soon
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* HIST: END */}

      {/* BLACK HISTS: BEGIN */}
      <div className=" min-h-[70vh] bg-black">
        <div className="py-24">
          <div className="container mx-auto text-white">
            <h3 className="text-2xl md:text-4xl font-bold">
              Discover our latest hit
            </h3>
            <div className="mt-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, dicta!
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem qui sit consectetur!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-24">
            <div className="flex-1 border border-gray-700 aspect-square flex flex-col items-center justify-center gap-4">
              <img src="/wave-orange.png" />
              <div className="text-white w-[50%]">
                <p className="text-2xl text-white">Discover our hits</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores quis neque ut?
                </p>
              </div>
            </div>
            <div className="flex-1 border border-gray-700 aspect-square flex flex-col items-center justify-center">
              <img src="/wave-green.png" />
              <div className="text-white w-[50%]">
                <p className="text-2xl text-white">Discover our hits</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores quis neque ut?
                </p>
              </div>
            </div>
            <div className="flex-1 border border-gray-700 aspect-square flex flex-col items-center justify-center">
              <img src="/wave-blue.png" />
              <div className="text-white w-[50%]">
                <p className="text-2xl text-white">Discover our hits</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores quis neque ut?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BLACK HISTS: END */}

      {/* OUR TEAM: BEGIN */}
      <div className=" bg-black">
        <div className="py-24">
          <div className="container mx-auto text-white">
            <h3 className="text-2xl md:text-4xl font-bold">Our Team</h3>
            <div className="mt-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, dicta!
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem qui sit consectetur!
              </p>
            </div>
            <p className="text-white font-black mt-12">
              TBD...{" "}
              <span className="font-extralight">BTW it would be riya</span>
            </p>
          </div>
        </div>
      </div>

      {/* OUR TEAM: END */}

      {/* ABOUT ASTRA: BEGIN */}
      <div className="bg-black text-white">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="flex-1 border border-gray-700 lg:h-[50vh] h-[70vh] flex items-center justify-center">
            <div className="lg:w-[50%] w-full py-12 px-3">
              <h3 className="text-3xl">About Astra</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium laboriosam nemo repellendus saepe culpa ex ad ipsa
                inventore harum eius maiores officiis natus iure temporibus,
                earum architecto quis ducimus nihil vel similique dolores
                repudiandae! Illum, libero! Consequuntur alias ipsa, incidunt
                dicta veniam ut sint architecto iste aperiam officia, eveniet
                enim.
              </p>
              <div>
                <img src="/logo.png" />
              </div>
            </div>
          </div>
          <div className="flex-1 border border-gray-700 lg:h-[50vh] h-[70vh] flex items-center justify-center ">
            <div className="lg:w-[50%] w-full py-12 px-3">
              <h3 className="text-3xl">Join Our Wait List</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                dignissimos rerum necessitatibus?
              </p>
              <div className="my-4 flex md:flex-row flex-col gap-4 justify-between items-center">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-white">Your email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text text-white">
                      How did you find us?
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="How?"
                    className="input input-bordered w-full "
                  />
                </div>
              </div>
              <div className="flex items-center">
                <button className="btn bnt-sm bg-blue-500">
                  Join wait list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT ASTRA: ENAD */}

      {/* FOOTER: BEGIN */}
      <footer className=" bg-black md:h-24 h-28 text-white">
        <div className=" container mx-auto flex flex-col md:flex-row items-center justify-around md:justify-between h-full">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <p>Terms of use</p>
            </div>
            <div>
              <p>Privacy and Policy</p>
            </div>
            <div>
              <p>Cookies</p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <div>2023</div>
            <img src="/logo.png" />
          </div>
        </div>
      </footer>
      {/* FOOTER: END */}
    </div>
  );
}
