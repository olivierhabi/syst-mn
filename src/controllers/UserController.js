import bcrypt from "bcryptjs";
import "@babel/polyfill";
import token from "../helpers/genToken";
import UserService from "../services/UserService";
import hashPassword from "../helpers/hashPassword";

class UserController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  static async AddUser(req, res) {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const isAdmin = false;
    const { admin } = req.user;

    try {
      if (!admin) {
        return res.status(400).send({
          status: 400,
          message: "Only admin can create User",
        });
      }
      const createUser = await UserService.addUser({
        username,
        password: hashedPassword,
        admin: isAdmin,
      });

      return res.status(201).send({
        status: 201,
        message: "Signup successfull",
        data: createUser,
      });
    } catch (e) {
      if (e.name === "SequelizeUniqueConstraintError") {
        const { message } = e.errors[0];
        let errorMessage = message;
        if (message === "username must be unique") {
          errorMessage = "The username is already taken";
        }
        return res.status(400).send({ status: 400, message: errorMessage });
      }
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  static async Login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserService.findUser(username);
      if (!user) {
        return res
          .status(400)
          .send({ status: 400, message: "Invalid username or password" });
      }
      const validPassword = await bcrypt.compare(
        password,
        user.dataValues.password
      );
      if (!validPassword) {
        return res
          .status(400)
          .send({ status: 400, message: "Invalid username or password" });
      }
      const data = await token({
        id: user.dataValues.id,
        username: user.dataValues.username,
        admin: user.dataValues.admin,
      });

      return res.status(200).send({
        status: 200,
        message: "User is successfully logged in",
        token: data,
      });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  static async getAll(req, res) {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).send({
        status: 200,
        message: "List of Users successfull",
        data: users,
      });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  }
}

export default UserController;
