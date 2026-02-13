export default function Header() {
	return (
		<header className="border-b border-slate-200 bg-white">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				{/* Brand */}
				<a href="#" className="flex items-center gap-2">
					<div className="h-9 w-9 rounded-xl bg-slate-900" aria-hidden="true" />
					<div className="leading-tight">
						<p className="text-sm font-semibold">DemoSite</p>
						<p className="text-xs text-slate-500">React + Tailwind</p>
					</div>
				</a>

				{/* Nav */}
				<nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
					<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
						Home
					</a>
					<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
						Lessons
					</a>
					<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
						Projects
					</a>
					<a href="#" className="text-sm text-slate-600 hover:text-slate-900">
						About
					</a>
				</nav>

				{/* Actions */}
				<div className="flex items-center gap-2">
					<button
						type="button"
						className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex"
					>
						Log in
					</button>
					<button
						type="button"
						className="inline-flex rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
					>
						Get started
					</button>
				</div>
			</div>
		</header>
	)
}
