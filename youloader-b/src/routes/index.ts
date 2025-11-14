import express from "express"

import userRouter from "./userRoutes.ts";
import fileRouter from "./fileRoutes.ts"

const router = express.Router();


router.use("/user", userRouter)
router.use("/file", fileRouter)


export default router;