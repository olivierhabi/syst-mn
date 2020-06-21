import { Router } from "express";
import PeopleController from "../controllers/PeopleController";
import PeopleValidator from "../helpers/validator/PeopleValidator";
import auth from "../middleware/Auth";

const { validate } = PeopleValidator;

const router = Router();

router.post("/create", auth, validate, PeopleController.Create);
router.get("/all", auth, PeopleController.getPeople);
// router.delete("/delete/:id", auth, PeopleController.Delete);

export default router;
