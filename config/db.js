"use strict"
const mysql = require('mysql')
const util = require('util')
 
const pool = mysql.createPool({
    connectionLimit: 5000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,

    // connection variable
    database        : 'ludogames', 
    port            : 3308,
    user            : 'root',  
    host            : '127.0.0.1',
    user            : 'root',
    password        : '', 
    debug           :  false
 
})

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
   
    if (connection) connection.release()
    return
})

pool.query = util.promisify(pool.query)

module.exports = pool;
