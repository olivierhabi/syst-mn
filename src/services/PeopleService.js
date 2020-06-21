import database from "../models";

class PeopleService {
  static async addPeople(people, next) {
    try {
      return await database.People.create(people);
    } catch (error) {
      throw error;
    }
    next();
  }
  static async getPeople(id, next) {
    try {
      return await database.People.findAll();
    } catch (error) {}
  }
  // static async updateProduct(data, next) {
  //   const { name, description, id } = data;
  //   try {
  //     return await database.Product.update(
  //       {
  //         name: name,
  //         description: description,
  //       },
  //       { where: { id: id }, returning: true }
  //     );
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async deleteProduct(id, next) {
  //   try {
  //     return await database.Product.destroy({
  //       where: {
  //         id: id,
  //       },
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export default PeopleService;
