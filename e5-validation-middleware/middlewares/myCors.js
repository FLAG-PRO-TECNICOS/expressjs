export function addCors(req, res, next) {
	res.header({
		'Access-Control-Allow-Origin': '*',
	})

	next()
}
