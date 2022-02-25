import {Router} from 'express';
import { indexController } from '../controller/index.controller';
import { tiendaController } from '../controller/tienda.controller';


class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){ 

        this.router.get("/obtener/tiendas", tiendaController.obtenerTiendas)

        this.router.post("/registros/nuevos", indexController.obtenerRegistrosNuevos)
        this.router.post("/registros", indexController.obtenerRegistros)
        this.router.post("/registro", indexController.obtenerRegistro)
        

        this.router.post("/registro/iniciar/seguimiento", indexController.iniciarSeguimiento)
        this.router.post("/registro/seguimiento/status", indexController.cambiarStatus)
        this.router.post("/registro/seguimiento/p-respuesta", indexController.cambiar_PrimerRespuesta)
        this.router.post("/registro/seguimiento/informacion", indexController.modificarRegistro)

        this.router.post("/login", indexController.validarUsuario)
        this.router.post("/tienda", indexController.informacionTienda)
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;