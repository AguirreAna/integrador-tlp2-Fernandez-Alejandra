// * ARCHIVO A COMPLETAR
// * Imports, role, profile.* y loginValidation ya resueltos
import { body } from "express-validator";
import { UserModel } from "../../models/sequelize/user.model.js";
import { ProfileModel } from "../../models/sequelize/profile.model.js";

export const registerValidation = [
  body("username"), // TODO 1: de 3 a 20 caracteres (`isLength`), alfanumérico (`isAlphanumeric`) y único (`custom` con una consulta a la base, con `paranoid: false` para incluir a los usuarios eliminados lógicamente).

  body("email"), // TODO 2: email válido (`isEmail`) y único (`custom` con una consulta a la base, también con `paranoid: false`).

  body("password"), // TODO 3: con un mínimo de 8 caracteres (`isLength`).

  body("role")
    .optional()
    .isIn(["user", "administrator"])
    .withMessage("El role debe ser user o administrator"),
  body("profile.nickname")
    .trim()
    .notEmpty()
    .withMessage("El nickname es obligatorio")
    .custom(async (nickname) => {
      const found = await ProfileModel.findOne({ where: { nickname } });
      if (found) throw new Error("El nickname ya está en uso");
      return true;
    }),
  body("profile.first_name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El first_name debe tener entre 2 y 50 caracteres"),
  body("profile.last_name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("El last_name debe tener entre 2 y 50 caracteres"),
  body("profile.phone")
    .optional()
    .isNumeric()
    .withMessage("El phone solo puede contener números"),
];

export const loginValidation = [
  body("email").isEmail().withMessage("El email no es válido"),
  body("password").notEmpty().withMessage("La password es obligatoria"),
];
