import { motion } from "framer-motion";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();

    let colorArr = ['red', 'purple', 'green', 'blue', 'orange'];

    let [dropdownOpen, setDropdownOpen] = useState(false);
    let [colorSelected, setColorSelected] = useState('Red');

    const errorBox = (msg:string) => {
        let errorBox = document.querySelector("#errorBox")!;
        errorBox.innerHTML = msg;
        errorBox.classList.remove("hidden");
        errorBox.classList.remove("opacity-0");
        errorBox.classList.add("opacity-1");

        setTimeout(() => {
            errorBox.classList.add("hidden");
            errorBox.classList.add("opacity-0");
            errorBox.classList.remove("opacity-1");
        }, 2000);
    }


    const generateUrl = () => {
        let colorSelect = colorSelected.toLowerCase();

        let nameValue = document.querySelector<HTMLInputElement>("#nameInput")!.value;
        if(!nameValue) return errorBox("Please provide a name!");

        nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);

        let fromValue = document.querySelector<HTMLInputElement>("#fromInput")!.value;
        if(!fromValue) return errorBox("Please provide a signature!");

        fromValue = fromValue.charAt(0).toUpperCase() + fromValue.slice(1);


        history.push(`/bday?name=${nameValue}&from=${fromValue}&color=${colorSelect}`);
    }

    return (
        <div className="bg-gradient-to-br from-blue-800 via-purple-500 to-pink-500 w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-20">
            <motion.div className="flex flex-col items-center justify-center">
                <motion.h1 className="text-4xl md:text-5xl text-center font-bold text-white mb-6">🎉 hbd.today 🎉</motion.h1>
                <motion.h2 className="px-4 md:px-0 text-2xl text-center text-white">send a simple, fun, virtual birthday card!</motion.h2>
            </motion.div>
            
            <motion.div className="bg-gray-800 bg-opacity-20 p-8 border-2 border-solid border-white flex flex-col items-center justify-center">

                <div onClick={() => {setDropdownOpen(!dropdownOpen)}} className="hover:bg-gray-800 transition-all duration-100 hover:bg-opacity-25 select-none cursor-pointer outline-none border-solid border-white border-2 text-white text-xl w-40 py-3 text-center items-center justify-center">{colorSelected}</div>
                
                {dropdownOpen ? 
                <div id="dropdownOptions" className="absolute -mt-6 outline-none border-solid border-white border-2 bg-gray-800 bg-opacity-75 text-white text-xl w-40 items-center text-center justify-center">
                    <div className="select-none py-2 cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-100" onClick={() => {setColorSelected('Red'); setDropdownOpen(false)}}>Red</div>
                    <div className="select-none py-2 cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-100" onClick={() => {setColorSelected('Purple'); setDropdownOpen(false)}}>Purple</div>
                    <div className="select-none py-2 cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-100" onClick={() => {setColorSelected('Green'); setDropdownOpen(false)}}>Green</div>
                    <div className="select-none py-2 cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-100" onClick={() => {setColorSelected('Blue'); setDropdownOpen(false)}}>Blue</div>
                    <div className="select-none py-2 cursor-pointer hover:bg-white hover:bg-opacity-25 transition-all duration-100" onClick={() => {setColorSelected('Orange'); setDropdownOpen(false)}}>Orange</div>
                </div>
                : <></>}

                {/* <motion.select className="outline-none border-solid border-white border-2 bg-gray-800 bg-opacity-0 text-white text-xl px-6 py-3 mb-10 items-center justify-center" name="color" id="colorSelect">
                    <option value="red" selected>Red</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                </motion.select> */}

                <motion.input className="outline-none text-xl placeholder-gray-200 placeholder-opacity-50 text-white text-center mt-10 mb-10 p-2 bg-gray-800 bg-opacity-0 border-b-2 border-solid border-gray-300 items-center justify-center focus:border-white focus:border-b-4 transition-all" id="nameInput" type="text" placeholder="Recipient's name"></motion.input>
                <motion.input className="outline-none text-xl placeholder-gray-200 placeholder-opacity-50 text-white text-center mb-16 p-2 bg-gray-800 bg-opacity-0 border-b-2 border-solid  border-gray-300 items-center justify-center focus:border-white focus:border-b-4 transition-all" id="fromInput" type="text" placeholder="Your name"></motion.input>

                <motion.button className="outline-none text-white text-xl font-bold items-center justify-center border-2 border-solid border-gray-300 px-10 py-4 hover:bg-white hover:text-purple-400 hover:border-0 transition-all" onClick={generateUrl}>Generate Card</motion.button>

                <motion.div className="hidden outline-none font-bold p-4 rounded-lg absolute bottom-10 text-white bg-red-600 opacity-0 transition-opacity duration-500" id="errorBox"></motion.div>

            </motion.div>
        </div>
    );
}

export default Home;
