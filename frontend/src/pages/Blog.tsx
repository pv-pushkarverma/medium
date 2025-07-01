import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog(id || "");
    
    if(loading || !blog) {
        return <div>
            Loading...
        </div>
    }

    return <div>
        <Appbar authorName="Pushkar Verma"/>

        <FullBlog blog={blog}/>
    </div>
}