
import SideNav from "../components/SideNav"
import TopBar from "../components/TopBar"
export default function Home(){

    return(
        <main className="pl-16 pt-14 pb-4 pr-4 h-screen">
            <TopBar/>
            <SideNav/>
            <section className="text-gray-700 dark:text-gray-50 h-full p-6 flex flex-col">
                <h1 className="text-4xl
                 font-bold md:ml-20 lg:ml-24 xl:ml-40 ease-in duration-200">Your Families</h1>
                 <div className="shadow-md dark:shadow-gray-800 text-gray-50 
                 md:ml-20 lg:ml-24 xl:ml-40 mt-8 w-60 h-72 bg-indigo-400 rounded-md 
                 p-4 hover:scale-105 hover:bg-indigo-500 ease-in duration-200 cursor-pointer">
                    <h2 className="text-2xl font-semibold">Wolf</h2>
                 </div>
            </section>
        </main>
    )
}