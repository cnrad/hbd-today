import { motion } from "framer-motion";
import ConfettiExplode from "../components/Confetti";
import { useHistory } from "react-router-dom";
import Confetti from 'react-confetti';

//add share with others button/container at bottom after 5-10 seconds?



const Bday = () => {
  let history = useHistory();

  const backHome = () => {
    history.push(`/`);
  }

  const query = require('query-string').parse(window.location.search)

  let name = query.name;
  let from = query.from;
  let qColor = query.color;

  if(!name || !from || !qColor || !["red", "green", "blue", "purple", "orange", "pink-blue"].includes(qColor)) return(
    <motion.div className="z-1 text-white bg-black w-screen h-screen flex flex-col items-center justify-center">
      <div className="z-2 text-5xl font-bold mb-8">
        Error: Invalid/Missing query parameters
      </div>
      <button onClick={backHome} className="z-2 text-2xl hover:cursor-pointer hover:text-3xl transition-all">Return to Home</button>
      
    </motion.div>
  )

  let color:string = qColor;

  switch(color) {
    case "green":
      color = "bg-gradient-to-br from-green-600 via-green-500 to-green-400";
      break;

    case "red":
      color = "bg-gradient-to-br from-red-600 via-red-500 to-red-400";
      break;

    case "blue":
      color = "bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400";
      break;

    case "purple":
      color = "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400";
      break;

    case "orange":
      color = "bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-400";
      break;
    case "pink-blue":
      color = "bg-gradient-to-br from-blue-800 via-purple-600 to-pink-500";
      break;
  }

  const ParentContainer = {
    init: {
      x: 0
    },
    load: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.25
      }
    }
  }

  const ChildrenElems = {
    init: {
      y: -250,
      opacity: 0
    },
    load: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0, 1.5, 0.75, 0.75],
      }
    }
  }

  let stagger = 0;
  setTimeout(() => {
    document.querySelectorAll(".wordLine").forEach(elem => {
    setTimeout(() => {elem.classList.add("animate-bounce")}, stagger)
      stagger += 250;
    })
  }, 850)

  return (
    <>
      <div className={"w-screen h-screen flex "+color+" items-center justify-center flex-col overflow-hidden"}>
        <motion.div initial="init" animate="load" variants={ParentContainer} className={"z-1 text-white mb-12 w-full h-auto flex items-center justify-center md:flex-row flex-col"}>
          <motion.div variants={ChildrenElems} className="wordLine md:mb-0 mb-4 text-3xl z-2 md:text-5xl font-bold">Happy&nbsp;</motion.div>
          <motion.div variants={ChildrenElems} className="wordLine md:mb-0 mb-4 text-3xl z-2 md:text-5xl font-bold">Birthday,&nbsp;</motion.div>
          <motion.div variants={ChildrenElems} className="wordLine md:mb-0 mb-4 text-3xl z-2 md:text-5xl font-bold">{name}!</motion.div>
        </motion.div>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1.5, ease: "easeInOut"}}} className=" text-gray-100 z-2 text-xl md:text-2xl italic">From {from}</motion.div>
      </div>
      <ConfettiExplode angle="45" >
        <div className="absolute top-3/4 left-0" />
      </ConfettiExplode>

      <ConfettiExplode angle="135">
        <div className="absolute top-3/4 right-0" />
      </ConfettiExplode>

      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={50}
        gravity={0.1}
        initialVelocityY={50}
      />

    </>
  );
}

export default Bday;
