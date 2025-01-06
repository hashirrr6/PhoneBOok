import { Router } from "express";
import * as rh from "./request.js";

const router = Router();

router.route("/adduser").post(rh.adduser);
router.route("/getuser").get(rh.getuser);

export default router;
