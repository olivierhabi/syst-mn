import Joi from "joi";
import "@babel/polyfill";

const validatePeople = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      motherName: Joi.string().min(3).required(),
      fatherName: Joi.string().min(3).required(),
      gender: Joi.string().min(3).required(),
      province: Joi.string().min(3).required(),
      district: Joi.string().min(3).required(),
      sector: Joi.string().min(3).required(),
      cell: Joi.string().min(3).required(),
      residence: Joi.string().min(3).required(),
      placeOfWork: Joi.string().min(3).required(),
      idNo: Joi.string().min(3).required(),
      placeOfIssue: Joi.string().min(3).required(),
      phoneNumber: Joi.string().min(3).required(),
      illness: Joi.string().min(3).required(),
      email: Joi.string().min(3).required(),
      zipCode: Joi.string().min(3).required(),
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res
        .status(400)
        .send({ status: 400, message: error.details[0].message });
    }
    next();
  },
};

export default validatePeople;
