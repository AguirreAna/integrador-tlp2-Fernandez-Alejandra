// * ARCHIVO A COMPLETAR
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/sequelize.js";
import { PlaylistModel } from "./playlist.model.js";
import { SongModel } from "./song.model.js";

export const PlaylistSongModel = sequelize.define(
  "PlaylistSong",
  {
    // TODO 1: `playlist_id` y `song_id`: tipo `INTEGER`, obligatorios (`allowNull`) y claves foráneas (`references`): `playlist_id` hacia el `id` de `PlaylistModel` y `song_id` hacia el `id` de `SongModel`.
  },
  {
    // TODO 2: En las opciones del modelo, desactivar las columnas `createdAt` y `updatedAt` (`timestamps`).
  },
);

// TODO 3: Relacionar `PlaylistModel` con `SongModel` (N:M): una playlist tiene muchas canciones, a través de la tabla intermedia `PlaylistSongModel`. Alias: `songs`. Debe usar los campos `playlist_id` (apunta a la playlist) y `song_id` (apunta a la canción) de `PlaylistSongModel`.

// TODO 4: Relacionar `SongModel` con `PlaylistModel` (N:M): una canción puede estar en muchas playlists, a través de la tabla intermedia `PlaylistSongModel`. Alias: `playlists`. Debe usar los campos `song_id` (apunta a la canción) y `playlist_id` (apunta a la playlist) de `PlaylistSongModel`.
