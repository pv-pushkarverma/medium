import { useEffect, useState } from "react"
import axios from "axios"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string
    }
}

export const useBlog = (id: string) => {
    const [ loading, setLoading ] = useState(true)
    const [ blog, setBlog ] = useState<Blog>()
    
    useEffect( () => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then( response => {
                setBlog(response.data.blog);
                setLoading(false)
            })
    },[id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [ loading, setLoading ] = useState(true)
    const [ blogs, setBlogs ] = useState<Blog[]>([])

    useEffect( () => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then( response => {
                setBlogs(response.data.blogs);
                setLoading(false)
            })
    },[])

    return {
        loading,
        blogs
    }
}