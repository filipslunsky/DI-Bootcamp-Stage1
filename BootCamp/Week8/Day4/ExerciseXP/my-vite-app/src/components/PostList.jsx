import { useState, useEffect } from 'react';

const PostList = (props) => {
    const [posts, setPosts] = useState([]);

    const getData = async (path) => {
        const res = await fetch(path);
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => {
        getData('/data.json');
    }, []);

    return (
        <>
            <h1>Hi This is a Title</h1>
            {posts.map(item => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </>
    );
}
 
export default PostList;