import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//custom font tailwind - ubuntu

const Home = () => {
    let history = useHistory();

    let colorArr = ['Red', 'Purple', 'Green', 'Blue', 'Orange', 'Pink-Blue'];

    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [colorSelected, setColorSelected] = useState('Pink-Blue');
    let [menuColor, setMenuColor] = useState('Pink-Blue');
    let [backgroundGradient, setBackgroundGradient] = useState("bg-gradient-to-br from-blue-800 via-purple-600 to-pink-500");

    const errorBox = (msg:string) => {
        let errorBox = document.querySelector("#errorBox")!;
        errorBox.innerHTML = msg;
        errorBox.classList.remove("opacity-0");
        errorBox.classList.add("opacity-1");

        setTimeout(() => {
            errorBox.classList.add("opacity-0");
            errorBox.classList.remove("opacity-1");
        }, 2000);
    }


    const generateUrl = () => {
        let colorSelect = colorSelected.toLowerCase();
    
        let nameValue = document.querySelector<HTMLInputElement>("#nameInput")!.value;
        if(!nameValue) return errorBox("Please provide the recipient's name!");

        nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);

        let fromValue = document.querySelector<HTMLInputElement>("#fromInput")!.value;
        if(!fromValue) return errorBox("Please provide your name!");

        fromValue = fromValue.charAt(0).toUpperCase() + fromValue.slice(1);


        history.push(`/bday?name=${nameValue}&from=${fromValue}&color=${colorSelect}`);
    }

    useEffect(() => {
        let color = colorSelected.toLowerCase();

        switch(color) {
            case "green":
                setBackgroundGradient("bg-gradient-to-br from-green-600 via-green-500 to-green-400");
                break;

            case "red":
                setBackgroundGradient("bg-gradient-to-br from-red-600 via-red-500 to-red-400");
                break;

            case "blue":
                setBackgroundGradient("bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400");
                break;

            case "purple":
                setBackgroundGradient("bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400");
                break;

            case "orange":
                setBackgroundGradient("bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-400");
                break;

            case "pink-blue":
                setBackgroundGradient("bg-gradient-to-br from-blue-800 via-purple-600 to-pink-500");
                break;
        }

        switch(color) {
            case "green":
                setMenuColor("bg-green-600");
                break;

            case "red":
                setMenuColor("bg-red-500");
                break;

            case "blue":
                setMenuColor("bg-blue-600");
                break;

            case "purple":
                setMenuColor("bg-purple-700");
                break;

            case "orange":
                setMenuColor("bg-yellow-600");
                break;

            case "pink-blue":
                setMenuColor("bg-purple-700");
                break;
        }
    }, [colorSelected])

    const parentAnim = {
        init: {
            opacity: 0,
        },
        load: {
            opacity: 1,
            transition: {
                duration: 0,
                ease: "easeInOut",
                staggerChildren: 0.5
            }
        }
    }

    const childAnim = {
        init: {
            opacity: 0,
            x: -25
        },
        load: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            }
        }
    }

    const dropMenuChange = (toggled:boolean) => {
        let element = document.querySelector("#dropdownOptions");

        if(toggled){
            element?.classList.remove("hidden");
            setTimeout(() => {
                element?.classList.remove("opacity-0");
            }, 10);
        } else {
            element?.classList.add("opacity-0");
            setTimeout(() => {
                element?.classList.add("hidden");
            }, 200);
        }
        
    }

    return (
        <motion.div id="backgroundCont" className={`${backgroundGradient} font-segoeui pt-24 pb-24 flex-shrink w-full h-full md:w-screen md:h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20`}>
            <motion.div initial="init" animate="load" variants={parentAnim} className="flex flex-col items-center justify-center">
                <motion.h1 variants={childAnim} className="text-4xl md:text-5xl text-center font-bold text-white mb-6">🎉 hbd.today 🎉</motion.h1>
                <motion.h2 variants={childAnim} className="px-4 md:px-0 text-2xl text-center text-white">send a simple, fun, virtual birthday card!</motion.h2>
            </motion.div>

            <motion.div initial={{x: 25, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.75, ease: "easeInOut"}} className="rounded-lg shadow-2xl transition-shadow shadow-outline bg-gray-800 bg-opacity-20 p-10 border-2 border-solid border-white flex flex-col items-center justify-center">

                <div onClick={() => {setDropdownOpen(!dropdownOpen)}} className="hover:bg-gray-800 rounded-md transition-all duration-100 hover:bg-opacity-25 select-none cursor-pointer outline-none border-solid border-white border text-white text-xl w-40 py-3 text-center flex flex-row items-center justify-center">
                    <div className="mr-4">{colorSelected}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFF" strokeWidth="0" stroke="#FFF" className="transform rotate-90">
                        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                    </svg>
                </div>
                
                <div id="dropdownOptions" className={`${dropdownOpen ? dropMenuChange(true) : dropMenuChange(false)} opacity-0 rounded-b-md transition-all duration-200 absolute mt-2 outline-none border-solid border-white border ${menuColor} text-white text-xl w-40 items-center text-center justify-center`}>
                    {
                    colorArr.map((color) => <div className="select-none py-2 cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-100" onClick={() => {setColorSelected(color); setDropdownOpen(false)}}>{color}</div>)
                    }
                </div>

                <motion.input className="w-52 md:w-auto outline-none text-xl placeholder-gray-200 placeholder-opacity-50 text-white text-center mt-12 mb-10 p-2 bg-gray-800 bg-opacity-0 border-b-2 border-solid border-gray-300 items-center justify-center focus:border-white focus:border-b-4 transition-all" id="nameInput" type="text" placeholder="Recipient's name"></motion.input>
                <motion.input className="w-52 md:w-auto outline-none text-xl placeholder-gray-200 placeholder-opacity-50 text-white text-center mb-16 p-2 bg-gray-800 bg-opacity-0 border-b-2 border-solid  border-gray-300 items-center justify-center focus:border-white focus:border-b-4 transition-all" id="fromInput" type="text" placeholder="Your name"></motion.input>

                <motion.button className="outline-none text-white text-xl rounded-lg items-center justify-center border-2 border-solid border-white px-10 py-4 hover:bg-white hover:text-purple-400 hover:border-0 transition-all" onClick={generateUrl}>Generate Card</motion.button>

                <motion.div className="outline-none font-bold p-4 absolute left-1/2 transform -translate-x-1/2 bottom-10 text-white rounded-md bg-red-600 opacity-0 transition-opacity duration-500" id="errorBox"></motion.div>

            </motion.div>
        </motion.div>
    );
}

export default Home;
