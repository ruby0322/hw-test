// import { model } from "mongoose";
// const mongoose = require('mongoose');

// import express, { Request, Response } from 'express';
const express = require('express');
// import { connect } from 'mongoose';
const User = require('../models/userSchema');
// import User from '../models/userSchema';
// import 'dotenv/config';
const router = express.Router();

router.get('/info', async (req, res) => {
  const users = await User.find({});
  // console.log(users);
  res.send(users);
});

module.exports = router;

// export default router;
