
import mysql2 from 'mysql2'
import util from 'util'


let pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "Aayush2002",
    database:"Fruits",
})


pool.getConnection((err, connection) => {
    if (err) {
        console.log("err", err);
    }
    if (connection) {
        console.log("database connected");
    }
})


pool.query = util.promisify(pool.query);


export default pool;