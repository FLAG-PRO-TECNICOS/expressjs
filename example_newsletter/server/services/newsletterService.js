import pool from '../db/pool.js'

export async function addSubscriber(email, name) {
	const sql = 'INSERT INTO subscribers (email, name) VALUES (?, ?)'

	try {
		const [result] = await pool.execute(sql, [email, name])
		return result.affectedRows
	} catch (error) {
		console.log(error)
		return false
	}
}
