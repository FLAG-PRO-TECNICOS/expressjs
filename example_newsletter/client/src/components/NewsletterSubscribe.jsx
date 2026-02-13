export default function NewsletterSubscribe() {
	return (
		<div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
			<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
				<div className="space-y-1">
					<label htmlFor="email" className="text-sm font-medium text-slate-700">
						Email address
					</label>
					<input
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
			</form>
		</div>
	)
}
