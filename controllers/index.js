const router = require("express").Router();
const welcomeRoutes = require("./welcomeRoutes");
const loginRoutes = require("./loginRoutes");
const signupRoutes = require("./signupRoutes");
const apiRoutes = require("./api");
const boardRoutes = require("./boardRoutes");
const accountRoutes = require("./accountRoutes");

router.use("/", welcomeRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/api", apiRoutes);
router.use('/board', boardRoutes);
// router.use("/signup", userController);
router.use("/account", accountRoutes);
module.exports = router;
