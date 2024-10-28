const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRouter = require('./routes/usersRouter.js');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"]
}));

const {PORT} = process.env;

app.listen(PORT || 3000, () => {
    console.log(`run on ${PORT || 3000}`);
    
})

app.use('/user', userRouter)