import { validateRequest } from "../middleware/auth.js";
import * as MoviesController from "../controllers/movies-controller.js";

export default {
 
  getAllmovies: {
    method: "GET",
    url: "/movie",
    handler: MoviesController.getAllmovies,
  },
  createmovies: {
    method: "POST",
    url: "/movie",
    preHandler: [validateRequest],
    handler: MoviesController.createmovie,
  },
  editmovies: {
    method: "PATCH",
    url: "/movie/:id",
    preHandler: [validateRequest],
    handler: MoviesController.updatemovies,
  },
  deletemovies: {
    method: "DELETE",
    url: "/movie/:id",
    preHandler: [validateRequest],
    handler: MoviesController.Deletemovie,
  },
  getonemovies: {
    method: "GET",
    url: "/movie/:id",
    handler: MoviesController.getmovie
  },
};
