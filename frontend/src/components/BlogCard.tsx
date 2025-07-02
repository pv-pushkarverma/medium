import { Link } from "react-router-dom"

interface BlogCardProps {
    id:string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-300 p-2 cursor-pointer">
            <div className="flex items-center">
                <div className="rounded-full bg-slate-400 h-6 w-6 flex justify-center items-center text-white">
                    { authorName[0].toUpperCase() }
                </div>
                <div className="pl-2 font-normal text-sm">
                    { authorName }
                </div>
                <div className="pl-2 text-slate-600 text-sm">
                    . { publishedDate }
                </div>
            </div>

            <div className="font-semibold text-2xl py-2">
                { title }
            </div>

            <div className="pb-4 font-light">
                { content.length>100 ?  content.slice(0,140) + '...' : content}
            </div>

        </div>
    </Link>
}