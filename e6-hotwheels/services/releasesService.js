import pool from '../db/pool.js'

export async function findAll() {
	const sql = `SELECT * FROM releases`
	const [result] = await pool.execute(sql)

	return result
}

export async function findByModelId(modelId) {
	const sql = `SELECT * FROM releases WHERE model_id = ?`
	const [result] = await pool.execute(sql, [modelId])

	return result
}
