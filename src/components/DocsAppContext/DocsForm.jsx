import { useState } from "react";
import { useDocs } from "../../contexts/docsAppContext";

function DocsForm() {
	const [doc, setDoc] = useState("");

	const { addDoc } = useDocs();

	const add = (e) => {
		e.preventDefault();

		if (!doc) return;
		// doc: doc === doc
		addDoc({ doc, completed: false });
		setDoc("");
	};

	return (
		<form onSubmit={add} className="flex justify-center mt-2 h-10">
			<input
				type="text"
				placeholder="Write a doc..."
				className="w-[70%] border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/60 py-1.5 text-zinc-800"
				value={doc}
				onChange={(e) => setDoc(e.target.value)}
			/>
			<button
				type="submit"
				className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
			>
				Add
			</button>
		</form>
	);
}

export default DocsForm;
