import type { Blog } from "../hooks"
import DOMPurify from "dompurify"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div className="flex justify-center">
        <div className="grid grid-cols-5 px-10 pt-10 mt-5 gap-5">

            <div className="col-span-4">
                <div className="text-5xl font-bold">{ blog.title }</div>
                <div className="mt-2 text-slate-500">Posted on 1 July 2025</div>
                <div className="mt-5 text-gray-600 prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}></div>
            </div>

            <div className="col-span-1">
                Author
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-slate-400 h-10 w-10 flex justify-center items-center text-white p-2">
                        { blog.author.name[0].toUpperCase() }
                    </div>
                    <div className="p-4 font-semibold">{ blog.author.name }</div>
                </div>
            </div>

        </div>
    </div>
}