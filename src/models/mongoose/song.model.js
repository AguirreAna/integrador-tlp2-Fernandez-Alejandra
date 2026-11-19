// * ARCHIVO A COMPLETAR
import { Schema, model } from "mongoose";

const songSchema = new Schema(
  {
    // * title y artist: ya implementados
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    artist: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
  },
  { timestamps: true, versionKey: false },
);

// TODO 1: definir el virtual populate "playlists": playlists que incluyen esta canción en su array songs (`ref`, `localField`, `foreignField`).

// TODO 2: configurar toJSON y toObject para que incluyan los virtuals (`virtuals`).

const Song = model("Song", songSchema);

export default Song;
