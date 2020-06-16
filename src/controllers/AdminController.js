import UserService from "../services/UserService";
import hashPassword from "../helpers/hashPassword";
import dotenv from "dotenv";

import database from "../models";

dotenv.config();

const createAdministrator = async (req, res) => {
  const username = process.env.USER_NAME;
  const password = process.env.USER_PASSWORD;
  const admin = true;

  const hashedPassword = await hashPassword(password);
  try {
    const exists = await database.User.findOne({
      where: {
        username: username,
      },
    });
    if (!exists) {
      await UserService.addUser({
        username,
        password: hashedPassword,
        admin,
      }).then(async (user) => {
        console.log("User created");
      });
    }
  } catch (error) {
    throw error;
  }
};

export default createAdministrator;
