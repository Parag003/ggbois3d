import logo from "./logo.svg";
import "./App.css";

import { Suspense, useState } from "react";
import { Scene } from "./scene";
import { transition } from "./settings";
import Team from "./team";
import Project from "./project";

import { motion, useAnimate, useScroll, useTransform, MotionConfig} from "framer-motion";
import CatScene from "./present";
function App() {
  const [isFullscreen, setFullscreen] = useState(false);
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0.25], [0.3, 0.5]);
  const postrans = useTransform(scrollYProgress, [0.3, 0.4], ["0vh", "-50vh"]);
  const postrans2 = useTransform(scrollYProgress, [0.5, 0.6], ["0vh", "50vh"]);
  return (
    <div class="scroll-smooth">
      <div className="flex flex-row flex-wrap-reverse min-h-screen bg-black text-white justify-around py-40 px-16">
        <div className="flex flex-col basis-1/2">
          <div className="flex flex-col space-y-10">
            {/* GGBois Tagline */}
            <h1
              className={
                " text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              }
            >
              Generic Project Title
            </h1>
            <div className="flex flex-row space-x-8  text-3xl">
              <button className="rounded-lg px-4 py-2 bg-white shadow-xl transition ease-in-out delay-150  hover:-translate-y-0.5 hover:bg-indigo-500 duration-300 ">
                Button_About
              </button>
              <button className="rounded-lg px-4 py-2 bg-white  shadow-xl transition ease-in-out delay-150  hover:-translate-y-0.5 hover:bg-indigo-500 duration-300 ">
                Button_Team
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col  ">
          <div className=" w-[30rem] h-[30rem] justify-self-center p-4 mx-auto my-auto aspect-auto">
            <CatScene/>
            {/* <MotionConfig transition={transition}>
              <div
                data-is-fullscreen={isFullscreen}
                onClick={() => setFullscreen(!isFullscreen)}
              >
                <motion.div className="container" layout>
                  <Suspense fallback={null}>
                    <Scene isFullscreen={isFullscreen} />
                  </Suspense>
                </motion.div>
              </div>
            </MotionConfig> */}
          </div>
        </div>
      </div>

     
          <Project/>
          <Team/>
        </div>
      
      
      
  
  );
}

export default App;
