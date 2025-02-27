const { response } = require('express');
const User = require('../models/user');
const getUsers = async (req, res = response) => {
    const users = await User.find();
    res.json({ users });
};
module.exports = { getUsers };