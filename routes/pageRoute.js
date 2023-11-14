import express from "express";
import * as pageController from "../controllers/pageController.js";
const router = express.Router();

//! get istekleri geldiği zaman pageControllerdaki fonksiyonu yapsın
router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/logout").get(pageController.getLogout);
router.route("/contact").get(pageController.getContactPage);
router.route("/contact").post(pageController.sendMails);


export default router;
