import database from "../models";

class UserService {
  static async addUser(newUser, next) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
    next();
  }
  static async findUser(username, next) {
    try {
      return await database.User.findOne({
        where: { username: username },
      });
    } catch (error) {
      throw error;
    }
    next();
  }
  static async getAllUsers(id, next) {
    try {
      return await database.User.findAll();
    } catch (error) {}
  }
}

export default UserService;
