// * ARCHIVO A COMPLETAR
// * Imports ya resueltos
import { body, param } from "express-validator";
import Song from "../../models/mongoose/song.model.js";

export const createSongValidation = [
  body("title"), // TODO 1: de 2 a 100 caracteres (`isLength`) y único (`custom` con una consulta a la base).

  body("artist"), // TODO 2: de 2 a 50 caracteres (`isLength`).
];

export const songIdValidation = [
  param("id"), // TODO 3: ID de MongoDB válido (`isMongoId`).
];
