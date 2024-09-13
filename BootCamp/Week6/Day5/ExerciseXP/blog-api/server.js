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

app.use(express.json());

// getting all blogs
app.get('/posts', (req, res) => {
    res.json(data);
});

// getting specific blog post
app.get('/posts/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const myBlog = data.find(item => item.id == id);
    if (!myBlog) return res.sendStatus(404);
    res.send(myBlog);
});


// adding a new blog
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const id = data.length + 1;
    if (!title || !content) return res.sendStatus(400);
    const newBlog = {id, title, content};
    data.push(newBlog);
    res.send('post completed');
});

// updating existing blog post
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const indx = data.findIndex(item => item.id == id);
    data[indx] = {...data[indx], title, content};
    if (indx === -1) {
        return res.status(404).json({message: 'blog to update not found'})
    };
    res.json(data);
});


// deleting existing post
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const indx = data.findIndex(item => item.id == id);
    data[indx] = {...data[indx], title, content};
    if (indx === -1) {
        return res.status(404).json({message: 'blog to delete not found'})
    };
    data.splice(indx, 1);
    res.json(data);
});