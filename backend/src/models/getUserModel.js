import pool from '../config/db/conectionDb.js';

export const getAllUserModel = async () => {
    const allUser = await pool.query('SELECT * FROM usuarios');
    return allUser.rows;
};