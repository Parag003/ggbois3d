import "./App.css";

import {
  motion,
  useAnimate,
} from "framer-motion";
function Team() {
  const [scope, animate] = useAnimate();
  return (
    <div className="min-h-screen bg-black min-w-full">
      <div
        ref={scope}
        className="flex flex-col space-y-36 text-6xl text-white text-center"
      >
        <span>Team_Placeholder</span>
        <div className="flex flex-row justify-around">
          <motion.img
            onHoverStart={() =>
              animate(scope.current, {
                filter: "blur(0.5rem)",
                duration: 0.2,
              })
            }
            onHoverEnd={() =>
              animate(scope.current, { filter: "blur(0)", duration: 0.2 })
            }
            whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, translateX: "30vh" }}
            whileInView={{ opacity: 1, translateX: "0vh" }}
            src="/2.jpg"
            className="w-32 h-32 bg-white rounded-full"
          ></motion.img>
          <motion.img
            whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, translateX: "-30vh" }}
            whileInView={{ opacity: 1, translateX: "0vh" }}
            src="/3.jpg"
            className="w-32 h-32 bg-white rounded-full"
          ></motion.img>
        </div>
        <div className="flex flex-row justify-evenly">
          <motion.img
            whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, translateX: "30vh" }}
            whileInView={{ opacity: 1, translateX: "0vh" }}
            src="/4.jpg"
            className="w-32 h-32 bg-white rounded-full"
          ></motion.img>
          <motion.img
            whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, translateX: "-30vh" }}
            whileInView={{ opacity: 1, translateX: "0vh" }}
            src="/5.jpg"
            className="w-32 h-32 bg-white rounded-full"
          ></motion.img>
          
        </div>
      </div>
    </div>
  );
}
export default Team;
