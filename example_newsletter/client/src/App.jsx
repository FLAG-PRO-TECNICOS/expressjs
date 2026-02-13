import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default function App() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<Header />

			<main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
				<Body />
			</main>

			<Footer />
		</div>
	)
}
