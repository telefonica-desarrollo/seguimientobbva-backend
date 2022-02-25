"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controller/index.controller");
const tienda_controller_1 = require("../controller/tienda.controller");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/obtener/tiendas", tienda_controller_1.tiendaController.obtenerTiendas);
        this.router.post("/registros/nuevos", index_controller_1.indexController.obtenerRegistrosNuevos);
        this.router.post("/registros", index_controller_1.indexController.obtenerRegistros);
        this.router.post("/registro", index_controller_1.indexController.obtenerRegistro);
        this.router.post("/registro/iniciar/seguimiento", index_controller_1.indexController.iniciarSeguimiento);
        this.router.post("/registro/seguimiento/status", index_controller_1.indexController.cambiarStatus);
        this.router.post("/registro/seguimiento/p-respuesta", index_controller_1.indexController.cambiar_PrimerRespuesta);
        this.router.post("/registro/seguimiento/informacion", index_controller_1.indexController.modificarRegistro);
        this.router.post("/login", index_controller_1.indexController.validarUsuario);
        this.router.post("/tienda", index_controller_1.indexController.informacionTienda);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
