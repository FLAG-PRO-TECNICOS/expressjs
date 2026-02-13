import pool from '../db/pool.js'

export async function addSubscriber(email) {
	const sql = 'INSERT INTO subscribers (email) VALUES (?)'

	try {
		const [result] = await pool.execute(sql, [email])
		return result.affectedRows
	} catch (error) {
		console.log(error)
		return false
	}
}
