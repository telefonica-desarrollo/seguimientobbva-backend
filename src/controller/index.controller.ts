import { Request, Response } from 'express';
import con from "../database" 

class IndexController{

    async obtenerRegistrosNuevos(req: Request, res:Response){
        const data: any = req.body
        console.log(data);
        
        const sql = "SELECT * FROM Registros WHERE STATUS = 0 and ID_TIENDA = ?"
        await con.query(sql, [data.ID_TIENDA], (err, result) => {
            try {
                if(err) throw err
                console.log(result);
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        })    
    }
    async obtenerRegistros(req: Request, res: Response){
        const data = req.body
        console.log(data);
        
        const sql = "SELECT R.* FROM Seguimiento S inner join Registros R on S.ID_REGISTRO = R.ID_REGISTRO and S.ID_USUARIO = ?"
        await con.query(sql, [data.ID_USUARIO], (err, result) => {
            try {
                if(err) throw err;
                console.log(result);
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        })
    }
    async obtenerRegistro(req: Request, res: Response){
        const data = req.body
        console.log(data);
        
        const sql = "SELECT * FROM Registros where ID_REGISTRO = ?"
        await con.query(sql, [data.ID_REGISTRO], (err, result) => {
            try {
                if(err) throw err;
                console.log(result);
                res.json(result[0])
            } catch (error) {
                console.log(error);
            }
        })
    }


    async cambiarStatus(req: Request, res:Response){
        const data: any = req.body;
        console.log(data);
        
        const sql = "UPDATE Registros SET STATUS = ? WHERE ID_REGISTRO = ?";
        await con.query(sql, [data.STATUS, data.ID_REGISTRO], (err, result)=> {
            try {
                if(err) throw err
                console.log(result);
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        })
    }
    async cambiar_PrimerRespuesta(req: Request, res:Response){
        const data: any = req.body;
        console.log(data);
        
        const sql = "UPDATE Registros SET STATUS = 2, PRIMER_RESPUESTA= ?  WHERE ID_REGISTRO = ?";
        await con.query(sql, [data.PRIMER_RESPUESTA, data.ID_REGISTRO], (err, result)=> {
            try {
                if(err) throw err
                console.log(result);
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        })
    }

    async iniciarSeguimiento(req: Request, res:Response){
        const data: any= req.body;
        console.log(data);

        const sql = "INSERT INTO Seguimiento (ID_USUARIO, ID_REGISTRO) VALUES (?,?)"
        await con.query(sql, [data.ID_USUARIO, data.ID_REGISTRO], (err, result) => {
            try {
                if(err) throw err
                console.log(result);
                res.json(result)
            } catch (error) {
                console.log(error)
            }
        })
        
    }

    async modificarRegistro(req: Request, res: Response){
        const data: any = req.body;
        console.log(data);
        
        const sql = `UPDATE Registros SET PRIMER_RESPUESTA= ?, COMENTARIOS= ?, CITA= ?, FECHA_CITA= ?,
        WHERE Id_Tienda=?;`
        
        await con.query(sql, [data.PRIMER_RESPUESTA, data.COMENTARIOS, data.CITA, data.FECHA_CITA], (err, result) => {
            try {
                if(err) throw err
                console.log(result);
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        })
    }
    async validarUsuario(req: Request, res: Response){
        const data: any= req.body;
        console.log(data);
        
        const sql = "Select * from Usuarios where USUARIO = ? && PASSWORD = ?"
        await con.query(sql , [data.Usuario, data.Password] , (err, result) => {
            try {
                if(err) throw "Peticion no validaa";
                if(result.length > 0) {
                    console.log(result);
                    console.log(result);
                    res.json(result[0])
                }
                else res.json(null)     
            } catch (error) {
                console.log(error);
            }
        })
    }
    async informacionTienda(req: Request, res: Response){
        const data: any = req.body
        const sql = "Select * from Tiendas where Id_Tienda = ?"
        await con.query(sql, [data.ID_TIENDA], (err, result)=> {
            try {
                if(err) throw err
                console.log(result);
                res.json(result[0])                
            } catch (error) {
                console.log(error);
            }
        })
    }

} 

export const indexController = new IndexController();