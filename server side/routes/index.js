'use strict'

const express = require('express');

const { AuthController } = require('./../controllers/AuthController');

const userRoutes = require('./user');

const router = express.Router();

router.post('/login-user', AuthController.loginUser);
router.use('/user', userRoutes);

module.exports = router
