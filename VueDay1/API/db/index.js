import mysql from 'mysql2'

const pool = mysql.createPool({
        host: '127.0.0.1',
        port: 3306,
        database: 'my_db',
        user: 'root',
        password: 'root',
    })
    // 外部以promise对象使用
export default pool.promise()