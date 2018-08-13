const mongoos = require('mongoose')


exports.homepage = (req, res) => {
    res.send({ message: 'Hi from Express' });
};