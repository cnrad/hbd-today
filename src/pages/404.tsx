import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  let history = useHistory();

  const backHome = () => {
    history.push(`/`);
  }

  return (
    <div className="text-white bg-black w-auto h-screen">
        <div className="flex flex-col items-left justify-center h-screen">
            <div className="max-w-sm tracking-wider text-9xl md:text-bigfont font-bold ml-12 mb-6 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500">
                404
            </div>
            <div className="max-w-sm text-2xl ml-14 mb-8">
                Page Not Found :(
            </div>

            <button onClick={backHome} className="max-w-sm z-2 text-lg w-40 ml-10 cursor-pointer hover:text-white transition-all text-gray-500">Return to Home</button>
        
        </div>
    </div>
  );
}

export default PageNotFound;
