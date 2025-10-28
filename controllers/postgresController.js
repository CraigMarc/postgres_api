const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// get all posts

exports.all_usernames_get = asyncHandler(async (req, res, next) => {


   res.send('respond with a resource');

});
