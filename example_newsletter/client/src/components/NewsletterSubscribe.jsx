import { useState } from 'react'

export default function NewsletterSubscribe() {
	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	async function formSubmitHandler(e) {
		e.preventDefault()

		const url = import.meta.env.VITE_SERVER_URL + '/newsletter/addsubscriber'
		const response = await fetch(url, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ email }),
		})
		const result = await response.json()
		console.log(result)

		if (result.status === 'ok') {
			setSubmitted(true)
		} else {
			setErrorMessage(result.message)
		}
	}

	return (
		<div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
			{submitted ? (
				<div>thanks!</div>
			) : (
				<form className="space-y-4" onSubmit={formSubmitHandler}>
					<div className="space-y-1">
						<label
							htmlFor="email"
							className="text-sm font-medium text-slate-700"
						>
							Email address
						</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
						/>
						<p className="text-xs text-slate-500">
							We’ll never share your email.
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<button
							type="submit"
							className="inline-flex justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
						>
							Subscribe
						</button>
					</div>
					<div>{errorMessage}</div>
				</form>
			)}
		</div>
	)
}
