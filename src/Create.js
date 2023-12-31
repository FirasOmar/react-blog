import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [author,setAuthor] = useState('Firas');
const [isPending,setIsPending]=useState(false);
const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    setIsPending(true);
    fetch('http://localhost:8000/blogs',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log("addded successfully");
        setIsPending(false);
        history.push('/');
    })
}
 
    return (
        <div className="create">
            <h2>Add new blog:</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                >
                </input>
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Firas">Firas</option>
                    <option value="Mario">Mario</option>
                    <option value="Alex">Alex</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog ...</button>}

            </form>
        </div>
    );
}
export default Create;