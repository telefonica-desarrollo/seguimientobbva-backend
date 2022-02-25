import mysql from "mysql";

const con = mysql.createPool({
    host: "10.140.110.15",
    user: "temm",
    password: "t3kn312021",
    database: "proyecto5la",
    port: 3306,
    connectionLimit:20,
    debug: false
})   

con.getConnection((err, conection)=> {
    try {
        if(err) throw err
        console.log("Base de datos conectada 1.2");
    } catch (error) {
        console.log(err);
    }
})

// con.connect( (err) => {
//     try {
//         if(err) throw err
//         console.log("Base de datos conectada");
//     } catch (error) {
//         console.log("Error de conexion");
//     }
// })

export default con;