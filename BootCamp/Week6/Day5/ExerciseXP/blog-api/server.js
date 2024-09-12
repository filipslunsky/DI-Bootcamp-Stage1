const express = require('express');

const data = [
    {
        id: 1,
        title: 'Blog Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },{
        id: 2,
        title: 'Another Blog Title',
        content: 'Nihil, ea, voluptas nemo aut reiciendis ipsa quam esse excepturi libero dolore, numquam iusto illo quaerat vel? Nihil, ea, voluptas nemo aut reiciendis ipsa quam esse excepturi libero dolore, numquam iusto illo quaerat vel?'
    },{
        id: 3,
        title: 'Yet Another Blog Title',
        content: 'Dolore doloribus voluptate cupiditate commodi? Dolore doloribus voluptate cupiditate commodi? Dolore doloribus voluptate cupiditate commodi?'
    }
];

// starting server to listen to port 3200
const app = express();

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
});

// getting all blogs
app.get('/posts', (req, res) => {
    res.json(data);
});

// getting specific blog post
app.get('/posts/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const myBlog = data.find(item => item.id == id);
    // finish handling wrong request
    
    res.send(myBlog);
});
