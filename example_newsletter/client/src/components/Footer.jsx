export default function Footer() {
	return (
		<footer className="border-t border-slate-200 bg-white">
			<div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid gap-6 sm:grid-cols-2 sm:items-center">
					<div>
						<p className="text-sm font-semibold">DemoSite</p>
						<p className="mt-1 text-sm text-slate-600">
							A sample layout for teaching forms + API integration.
						</p>
					</div>

					<div className="flex flex-wrap gap-4 sm:justify-end">
						<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
							Privacy
						</a>
						<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
							Terms
						</a>
						<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
							Contact
						</a>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
					<p className="text-xs text-slate-500">
						© {new Date().getFullYear()} DemoSite
					</p>
					<p className="text-xs text-slate-500">Built for classroom demos.</p>
				</div>
			</div>
		</footer>
	)
}
