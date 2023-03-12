import Link from "next/link"

type NavItemProps = {
    path: string,
    title: string
}

export default function NavItem({ path, title}: NavItemProps){
    return (
        <Link href={`${path}`}>
            <h2 className="p-2 font-normal dark:text-gray-50 text-gray-700
            hover:bg-indigo-500 hover:text-gray-50 rounded-md cursor-pointer ease-in duration-100"
            >{`${title}`}</h2> 
        </Link>
    )
}