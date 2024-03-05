
export default function Jumbotron(){
    return (
        <div className=" pb-4 flex flex-col justify-center sm:justify-end  md:justify-center  items-center gap-5 w-full h-screen bg-bench-dog bg-cover portrait:bg-[73%_40%] landscape:bg-[center_90%] ">
           <p className=" md:pt-20 md:w-3/4 lg:w-1/2   text-6xl text-center font-bold mt-52 sm:mt-0 ">Gear for the Modern Pampered Dog</p>
           <button className=" bg-green-400 rounded-full p-3 text-2xl ">Shop All</button>
        </div>
    )
}   