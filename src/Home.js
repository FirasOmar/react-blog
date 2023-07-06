import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const {data,isPending,error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <p style={{color:"red",fontSize:"large",fontWeight:"bold"}}>{error}</p>}
      {data && <BlogList blogs={data} title='All Blogs'></BlogList>}
        </div>
    );
}

export default Home;