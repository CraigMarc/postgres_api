const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

// get all users

exports.all_usernames_get = asyncHandler(async (req, res, next) => {
const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));

});

//add new user

exports.add_username = asyncHandler(async (req, res, next) => {

  await db.insertUsername(req.body.username);

  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));

});