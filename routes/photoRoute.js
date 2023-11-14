import express from "express";
import * as photoController from "../controllers/photoController.js";
const router = express.Router();

//! get istekleri geldiği zaman pageControllerdaki fonksiyonu yapsın
router.route("/").post(photoController.createPhoto);
router.route("/").get(photoController.getAllPhotos); 
router.route("/:id").get(photoController.getAPhoto)
router.route("/:id").delete(photoController.deletePhoto)
router.route("/:id").put(photoController.updatePhoto)

export default router;
