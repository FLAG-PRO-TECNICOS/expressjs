import pool from '../db/pool.js'
import { findByModelId } from './releasesService.js'

export async function findAll() {
	const sql = `SELECT * FROM models`
	const [result] = await pool.execute(sql)

	for (let i = 0; i < result.length; i++) {
		// const releases = await findByModelId(result[i].id)
		// result[i].releases = releases

		const releases = await findByModelId(result[i].id)
		const stringReleases = releases.map((value) => {
			return 'http://localhost:3000/api/releases/' + value.id
		})
		result[i].releases = stringReleases
	}

	console.log(result)

	return result
}

export async function insertModel(model) {
	const { name, debutYear, vehicleType, designer, notes } = model

	const sql = `INSERT INTO models (name, debut_year, vehicle_type, designer, notes) VALUES (?, ?, ?, ?, ?)`
	const [result] = await pool.execute(sql, [
		name,
		debutYear,
		vehicleType || null,
		designer || null,
		notes || null,
	])

	return result
}
