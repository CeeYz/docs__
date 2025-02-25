import BG from "./components/BG";
import FG from "./components/FG";
import Header from "./components/Header";

function App() {
	return (
		<div className="relative w-full h-screen bg-zinc-800">
			<Header />
			<BG />
			<FG />
		</div>
	);
}

export default App;
