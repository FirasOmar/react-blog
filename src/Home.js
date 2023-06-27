import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [Blogs, setBlogs] = useState(null);
    const [isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
        if(!res.ok){
            throw Error("Couldn't fetch data from server!");
        }
        return res.json();
       })
       .then(data =>{
        setBlogs(data);
        setIsPending(false);
        setError(null);
       }).catch((err)=>{
        setIsPending(false);
        console.log(err.message)
        setError(err.message);
    })
    },[]);
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <p style={{color:"red",fontSize:"large",fontWeight:"bold"}}>{error}</p>}
      {Blogs && <BlogList blogs={Blogs} title='All Blogs'></BlogList>}
        </div>
    );
}

export default Home;