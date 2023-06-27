import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [Blogs, setBlogs] = useState(null);

   
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
        return res.json();
       })
       .then(data =>{
        setBlogs(data);
       })
    },[]);
    return (
        <div className="home">
      {Blogs && <BlogList blogs={Blogs} title='All Blogs'></BlogList>}
        </div>
    );
}

export default Home;