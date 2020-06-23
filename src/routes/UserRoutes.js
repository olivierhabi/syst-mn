import { Router } from "express";
import UserController from "../controllers/UserController";
import validateUser from "../helpers/validator/SigninValidator";
import auth from "../middleware/Auth";

const { validate } = validateUser;
const router = Router();

router.post("/signup", auth, validate, UserController.AddUser);
router.post("/signin", validate, UserController.Login);
router.post("/admin", validate, UserController.LoginAdmin);
router.get("/all", auth, UserController.getAll);
router.delete("/delete/:id", auth, UserController.Delete);

export default router;
