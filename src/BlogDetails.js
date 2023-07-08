import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+data.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/');
        });
    }
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
        <button onClick={handleDelete}>Delete</button>
    </div> 
    );
}
 
export default BlogDetails;