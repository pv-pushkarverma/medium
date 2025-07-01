import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if(loading) {
        return <div>
            Loading...
        </div>
    }

    return <div>
        
        <Appbar authorName="Pushkar Verma"/>

        <div className="p-2 flex justify-center">
            <div className="max-w-xl">
                { blogs.map( blog => {
                    return <BlogCard
                    id={ blog.id }
                    title={ blog.title}
                    authorName={ blog.author.name}
                    publishedDate="1 July 2025"
                    content={ blog.content} />
                }) }
            </div>
        </div>
    </div>
}