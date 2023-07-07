import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    const {id} = useParams();
    const {data,isPending,error} = useFetch('http://localhost:8000/blogs/'+id);
    return ( 
    <div className="Blog-Details">
        {isPending&& <p>loading... </p>}
        {error && <p>{error} </p>}
        {data && 
        (<article>
        <h2>{data.title}</h2>
        <p>written By: <b>{data.author}</b></p>
        <p>{data.body}</p>
        </article>
        )}
    </div> 
    );
}
 
export default BlogDetails;