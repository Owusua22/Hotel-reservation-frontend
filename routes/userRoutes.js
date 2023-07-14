import express from "express"
const router = express.Router()
import {authUser, registerUser,logoutOser,updateUser,getUserProfile} from "../controllers/userController.js"

import { protect } from "../middleware/authMiddleware.js"
router.post ("/", authUser)
router.post ("/auth", registerUser)
router.post ("/logout", logoutOser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUser)


export default router