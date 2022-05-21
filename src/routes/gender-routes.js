import { validateRequest } from "../middleware/auth.js";
import * as GenderController from "../controllers/gender-controller.js";

export default {
 
  getAllgender: {
    method: "GET",
    url: "/gender",
    handler: GenderController.getAllgender,
  },
  creategender: {
    method: "POST",
    url: "/gender",
    preHandler: [validateRequest],
    handler: GenderController.creategender,
  },
  editgender: {
    method: "PATCH",
    url: "/gender/:id",
    preHandler: [validateRequest],
    handler: GenderController.updategender,
  },
  Deletegender: {
    method: "DELETE",
    url: "/gender/:id",
    preHandler: [validateRequest],
    handler: GenderController.Deletegender,
  },
  getonegender: {
    method: "GET",
    url: "/gender/:id",
    handler: GenderController.getgender,
  },
};
