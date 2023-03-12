import express from "express"
import nftController from '../controller/nftController.js'
const router=express.Router();

router.get('/',nftController)

export default router;