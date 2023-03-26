
import { getServerSession } from "next-auth"
import { authOptions } from "app/api/hello/auth/[...nextAuth]"
import { redirect } from "next/navigation"
import SideNav from "../components/SideNav"
import TopBar from "../components/TopBar"
import Family from "../components/cards/Family"
import Add from "../components/cards/Add"

export default async function Home(){
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("/")
    }

    return(
        <main className="pl-16 pt-14 pb-4 pr-4 h-screen">
            <TopBar/>
            <SideNav/>
            <section className="m-auto sm:ml-2 text-gray-700 dark:text-gray-50 h-full p-6 flex flex-col gap-8 w-fit">
                <h1 className="text-4xl
                font-bold ease-in duration-200">Your Families</h1>
                <div className="flex flex-col sm:flex-row gap-8">
                    <Family/>
                    <Add/>
                </div>
            </section>
        </main>
    )
}