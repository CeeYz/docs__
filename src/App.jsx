import BG from "./components/bg";
import FG from "./components/FG";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="relative w-full h-screen bg-zinc-800">
			<Nav />
			<BG />
			<FG />
		</div>
	);
}

export default App;
