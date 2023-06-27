import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [Blogs, setBlogs] = useState(null);
    const [isPending,setIsPending]=useState(true);
   
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
        return res.json();
       })
       .then(data =>{
        setBlogs(data);
        setIsPending(false);
       })
    },[]);
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
      {Blogs && <BlogList blogs={Blogs} title='All Blogs'></BlogList>}
        </div>
    );
}

export default Home;