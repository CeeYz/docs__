// import { BsMenuApp } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
// import { FaHamburger } from "react-icons/fa";

function Nav() {
	return (
		<div className="bg-zinc-950/50 h-10 flex items-center justify-between p-4 z-[5]">
			<div className="text-zinc-300">Notes</div>
			<button className="cursor-pointer">
				<CgMenuRight color="#7d7d7d" size="1.5em" />
			</button>
		</div>
	);
}

export default Nav;
