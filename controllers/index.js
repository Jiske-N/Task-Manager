const router = require("express").Router();
const welcomeRoutes = require("./welcomeRoutes");
const loginRoutes = require("./loginRoutes");
const signupRoutes = require("./signupRoutes");
const apiRoutes = require("./api");
const boardRoutes = require("./boardRoutes");
const accountRoutes = require("./accountRoutes");
const taskRoutes = require('./taskRoutes')

router.use("/", welcomeRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/api", apiRoutes);
router.use('/board', boardRoutes);
// router.use("/signup", userController);
router.use("/account", accountRoutes);
router.use('/task', taskRoutes);
module.exports = router;
