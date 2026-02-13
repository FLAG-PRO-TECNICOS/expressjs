import NewsletterSubscribe from './NewsletterSubscribe'

export default function Body() {
	return (
		<div className="space-y-10">
			{/* Hero */}
			<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
					<div className="space-y-4">
						<p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
							Teaching demo page
						</p>

						<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
							Build a backend form + connect it from the frontend
						</h1>

						<p className="text-slate-600">
							This page is intentionally “structure-only”: clean
							components, good layout, and obvious places to add
							request logic later.
						</p>

						<div className="flex flex-wrap gap-3">
							<button
								type="button"
								className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
							>
								Primary action
							</button>
							<button
								type="button"
								className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
							>
								Secondary action
							</button>
						</div>
					</div>

					{/* Placeholder visual */}
					<div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
						<div className="p-6 sm:p-10">
							<div className="grid gap-4">
								<div className="h-8 w-2/3 rounded-xl bg-white shadow-sm" />
								<div className="h-24 rounded-2xl bg-white shadow-sm" />
								<div className="h-10 w-1/2 rounded-xl bg-white shadow-sm" />
								<div className="h-10 w-2/5 rounded-xl bg-white shadow-sm" />
							</div>

							<p className="mt-6 text-xs text-slate-500">
								Placeholder “dashboard” card for layout.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Content grid */}
			<section className="grid gap-6 lg:grid-cols-3">
				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<h2 className="text-lg font-semibold">
						What students learn
					</h2>
					<p className="mt-2 text-sm text-slate-600">
						Component structure, form UX, request states, and how to
						connect to a simple API.
					</p>
					<ul className="mt-4 space-y-2 text-sm text-slate-700">
						<li className="flex gap-2">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
							Endpoints + validation (BE)
						</li>
						<li className="flex gap-2">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
							Fetch/Axios wiring (FE)
						</li>
						<li className="flex gap-2">
							<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
							Loading/errors/success states
						</li>
					</ul>
				</article>

				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<h2 className="text-lg font-semibold">Backend idea</h2>
					<p className="mt-2 text-sm text-slate-600">
						A <span className="font-medium">/subscribe</span> POST
						endpoint that accepts email + returns a simple JSON
						response.
					</p>
					<div className="mt-4 rounded-2xl bg-slate-50 p-4">
						<p className="text-xs font-medium text-slate-700">
							Example payload
						</p>
						<pre className="mt-2 overflow-x-auto text-xs text-slate-600">
							{`{
  "email": "student@example.com"
}`}
						</pre>
					</div>
				</article>

				<article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<h2 className="text-lg font-semibold">Frontend idea</h2>
					<p className="mt-2 text-sm text-slate-600">
						Add request logic inside the Newsletter component:
						onSubmit, call endpoint, show status.
					</p>
					<div className="mt-4 rounded-2xl border border-dashed border-slate-200 p-4">
						<p className="text-sm text-slate-600">
							Next step for class: add a{' '}
							<span className="font-medium">fetch</span> in the
							form submit handler.
						</p>
					</div>
				</article>
			</section>

			{/* Newsletter section */}
			<section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
					<div>
						<h2 className="text-2xl font-semibold tracking-tight">
							Newsletter subscribe
						</h2>
						<p className="mt-2 text-slate-600">
							Structure-only component: great place to teach
							controlled inputs, submit handlers, and API calls.
						</p>
					</div>

					<NewsletterSubscribe />
				</div>
			</section>
		</div>
	)
}
