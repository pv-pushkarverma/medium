import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog(id || "");
    
    if(loading || !blog) {
        return <div>
            <Appbar authorName="Pushkar Verma"/>
            <div className="p-10 grid grid-cols-5">
                <div className="col-span-4">
                    <FullBlogSkeleton/>
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar authorName="Pushkar Verma"/>

        <FullBlog blog={blog}/>
    </div>
}