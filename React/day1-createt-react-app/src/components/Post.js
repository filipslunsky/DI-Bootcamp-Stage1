const Post = (props) => {
    const {title, sub, content} = props
    return (
        <>
        <h2>{title}</h2>
        <h4>{sub}</h4>
        <p>{content}</p>
        </>
    )
}

export default Post;