import PeopleService from "../services/PeopleService";

class PeopleController {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} people object
   */
  static async Create(req, res) {
    const {
      firstName,
      lastName,
      motherName,
      fatherName,
      gender,
      province,
      district,
      sector,
      cell,
      residence,
      placeOfWork,
      idNo,
      placeOfIssue,
      phoneNumber,
      illness,
      email,
      zipCode,
    } = req.body;

    try {
      const createPeople = await PeopleService.addPeople({
        firstName,
        lastName,
        motherName,
        fatherName,
        gender,
        province,
        district,
        sector,
        cell,
        residence,
        placeOfWork,
        idNo,
        placeOfIssue,
        phoneNumber,
        illness,
        email,
        zipCode,
      });
      return res.status(201).send({
        status: 201,
        message: "People created successfull",
        data: createPeople,
      });
    } catch (error) {}

    try {
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} people object
   */
  static async getPeople(req, res) {
    try {
      const people = await PeopleService.getPeople();
      if (people.length == 0) {
        return res.status(200).send({
          status: 200,
          message: "List of People is empty",
        });
      }
      return res.status(200).send({
        status: 200,
        message: "List of People successfull",
        data: people,
      });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  }

  // /**
  //  *
  //  * @param {object} req
  //  * @param {object} res
  //  * @return {object} uproduct object
  //  */
  // static async Delete(req, res) {
  //   const id = req.params.id;
  //   console.log(id);

  //   try {
  //     const product = await PeopleService.getProduct(id);
  //     if (!product) {
  //       return res.status(404).send({
  //         status: 404,
  //         message: "Product not found",
  //       });
  //     }
  //     await PeopleService.deleteProduct(id);

  //     return res.status(200).send({
  //       status: 200,
  //       message: "Product Deleted successfull",
  //     });
  //   } catch (error) {}

  //   try {
  //   } catch (error) {
  //     return res.status(500).send({ message: "SERVER_ERROR" });
  //   }
  // }
}
export default PeopleController;
