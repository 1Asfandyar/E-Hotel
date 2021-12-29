'use strict'

const express = require('express');
const { UserController } = require('../controllers/UserController');
const { AuthController } = require('../controllers/AuthController');

const router = express.Router();

// router.get("/", UserController.list);
// router.get("/:id", UserController.retrieve);
router.post("/", UserController.addUser);
// router.put("/:id", UserController.update);
// router.delete("/:id", UserController.destroy);

router.post("/login", AuthController.loginUser);
// Router.get("/auth/me", studentAuth, UserController.getStudentFromAuth);

module.exports = router
