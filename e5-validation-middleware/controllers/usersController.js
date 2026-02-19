export function getUsers(req, res) {
	res.send('GET ALL USERS')
}

export function getUser(req, res) {
	res.send('GET USER BY ID')
}

export function postUser(req, res) {
	res.json(req.user)
}

export function putUser(req, res) {
	res.send('UPDATE USER')
}

export function deleteUser(req, res) {
	res.send('DELETE  USER')
}
