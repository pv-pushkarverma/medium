import axios from "axios";
import { useState } from "react"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { Appbar } from "../components/Appbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Publish = () => {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ publishing, setPublishing ] = useState(false);
    const navigate = useNavigate();

    return <div>
        <Appbar authorName="Pushkar Verma"/>
        <div className="flex flex-col justify-center items-center p-5 gap-5">
            <div className="w-full max-w-sm">
                <label className="block font-medium text-gray-600 mb-1 text-xl">
                Title
                </label>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </div>

            <div className="w-full mt-4 max-w-sm">
                <label className="block text-xl font-medium text-gray-600 mb-1">
                    Content
                </label>
                <textarea
                    placeholder="Write your content here..."
                    className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md text-md text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                />
            </div>

            <button className="bg-blue-500 p-2 rounded-md text-white px-5 cursor-pointer" onClick={ async() => {
                try {
                    if(publishing){
                        return toast.loading('Publishing')
                    }
                    setPublishing(true)
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content:description
                    }, {
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })

                    if(response){
                        toast.success('Blog Published Successfully')
                        setPublishing(false)
                        navigate(`/blog/${response.data.id}`)
                    } else {
                        toast.error('Error while publishing')
                    }
                } catch (error) {
                    toast.error(error instanceof Error ? error.message : String(error))
                }
            }}>Publish</button>
        </div>
    </div>
}