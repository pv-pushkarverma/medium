import { Link } from "react-router-dom"

export const Appbar = ( { authorName }:{ authorName:string}) => {
    return <div className="flex justify-between items-center px-5 pb-5 mt-5 border-b border-slate-200">
        <Link to={'/blogs'}>
            <div className="font-semibold text-2xl cursor-pointer">
                Medium
            </div>
        </Link>
        <div className="flex">
            <Link to={'/publish'}><button className="bg-green-600 p-2 rounded-lg mr-2 cursor-pointer">Add New</button></Link>
            <div className="rounded-full bg-slate-400 h-9 w-9 flex justify-center items-center text-white">
                { authorName[0].toUpperCase() }
            </div>
        </div>
    </div>
}