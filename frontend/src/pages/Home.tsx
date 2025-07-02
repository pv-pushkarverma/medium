import { Link } from "react-router-dom"
import homeImage from "../../public/assets/Home-Image.webp";

export const Home = () => {
    return <div className="bg-wild-sand-50 h-screen flex flex-col">
        <div className="flex justify-between py-5 px-15 border-b border-slate-600">
            <div className="font-semibold text-3xl cursor-pointer">
                Medium
            </div>

            <div className="flex gap-2.5">
                <Link to={'/signin'}>
                    <button className="p-2 bg-slate-700 text-white rounded-2xl cursor-pointer">Signin</button>
                </Link>
                <Link to={'/signup'}>
                    <button className="p-2 bg-slate-700 text-white rounded-2xl cursor-pointer">Signup</button>
                </Link>
            </div>
        </div>

        <div className="flex justify-between items-center pt-5">
            <div className="px-20">
                <div className="text-8xl font-bold">
                    Human <br/>stories & ideas
                </div>
                <div className="pt-5 font-light text-2xl">
                    A place to read, write, and deepen your understanding
                </div>
            </div>
            <div>
                <img src={homeImage} alt="" 
                className="w-md h-md"/>
            </div>
        </div>
    </div>
}