// export default function Test(){
//     return(
//         <div>
//             <div className="bg-green-900 w-full h-[100px] relative flex justify-center items-center">
//             <img 
//                     src="/logo.png" 
//                     className="cursor-pointer h-[100px] rounded-full absolute left-[10px] ml-2" 
//                 />
//             <h2 className="text-white text-4xl mr-3">Cab and tour. (Sri Lanka)</h2>
//             </div>
//         </div>
//     )
// }


export default function Test() {
    return (
        <div className="w-full">
            <div className="bg-green-900 w-full h-auto py-4 px-4 md:h-[100px] flex flex-col md:flex-row justify-center items-center relative">
                <img 
                    src="/logo.png" 
                    alt="Logo"
                    className="cursor-pointer h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full mb-2 md:mb-0 md:absolute md:left-4" 
                />
                <h2 className="text-white text-2xl md:text-4xl text-center md:text-left">
                    Cab and Tour <span className="hidden sm:inline"> (Sri Lanka)</span>
                </h2>
            </div>
        </div>
    );
}
