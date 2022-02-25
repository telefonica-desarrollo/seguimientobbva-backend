import { Request, Response } from 'express';
import con from "../database" 

class TiendaController{
    
    async obtenerTiendas(req: Request, res: Response){
        await con.query("Select * from Tiendas", (err, result, fields) => {
            try {
                if(err) throw err
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        });
    }
}

export const tiendaController = new TiendaController();