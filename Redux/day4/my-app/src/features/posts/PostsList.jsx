import { useEffect } from 'react';
import ReactionButton from './ReactionButton';
import { usePostsSelector, usePostsStatus, useFetchPosts } from './state/hooks';

const PostsList = (props) => {
    const posts = usePostsSelector();
    const status = usePostsStatus();
  
    const callFetchPosts = useFetchPosts();

    useEffect(() => {
        callFetchPosts();
      }, []);
    
    if (status === "loading") return <h2>Loading...</h2>;

    if (status === "failed")
        return <h2>Try again in few minutes, we are working on it...</h2>;

    
    return (
        <>
            <h2>Posts</h2>
            <section>
            {
                posts.map(post => {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <ReactionButton post={post}/>
                        </article>
                    )
                })
            }
            </section>
        </>
    );
}
 
export default PostsList;