import { Router } from "express";
import {
  getClientes,
  createNewCliente,
  getClientesById,
  deleteClientes,
  updateClietesById,
} from "../controllers/cliente.coller";

const router = Router();

router.get("/Cliente", getClientes);

router.post("/Cliente", createNewCliente);

router.get("/Cliente/:id", getClientesById);

router.delete("/Cliente/:id", deleteClientes);

router.put("/Cliente/:id", updateClietesById);

export default router;
