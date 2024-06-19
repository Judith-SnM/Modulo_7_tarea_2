import { pool } from '../database/connection.js'

const findAll = async () => {
    const { rows } = await pool.query("SELECT * FROM STUDENTS LIMIT 10")
    return rows
}

const findOneByRut = async (rut) => {
    const query = {
        name: 'fin-student-by-rut',
        text: 'SELECT * FROM STUDENTS WHERE RUT = $1',
        values: [rut],
        // rowMode: 'array'
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const create = async ({ rut, nombre, curso, nivel }) => {
    const query = {
        text: 'INSERT INTO STUDENTS VALUES ($1, $2, $3, $4) RETURNING *',
        values: [rut, nombre, curso, nivel],
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const studentModel = {
    findAll, findOneByRut, create
}