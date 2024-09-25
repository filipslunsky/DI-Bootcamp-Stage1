const getData = (req, res) => {
    try {
        res.json({message: 'Hello From Express'});
    } catch (error) {
        console.log(error);
        res.json({message: 'server error'});
    }
};

const postData = (req, res) => {
    try {
        const data = req.body.message;
        console.log(data);
        res.json({message: data})
    } catch (error) {
    console.log(error);
    res.json({message: 'server error'});
    }
};

module.exports = {
    getData,
    postData
};