import { useRef, useState, useEffect } from "react";
import { DocsForm, DocsItem } from "./DocsAppContext";
import { DocsContextProvider } from "../contexts/docsAppContext";

function FG() {
	const ref = useRef(null);

	const [docs, setDocs] = useState([]);

	const addDoc = (todo) => {
		setDocs((prevDocs) => [{ id: Date.now(), ...todo }, ...prevDocs]);
	};

	const deleteDoc = (id) => {
		setDocs((prev) => prev.filter((todo) => todo.id !== id));
	};

	const updateDoc = (id, todo) => {
		setDocs((prev) => prev.map((prevDoc) => (prevDoc.id === id ? todo : prevDoc)));
	};

	const toggleComplete = (id) => {
		setDocs((prev) =>
			prev.map((prevDoc) =>
				prevDoc.id === id ? { ...prevDoc, completed: !prevDoc.completed } : prevDoc
			)
		);
	};

	useEffect(() => {
		const docs = JSON.parse(localStorage.getItem("docs"));

		if (docs && docs.length > 0) {
			setDocs(docs);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("docs", JSON.stringify(docs));
	}, [docs]);

	return (
		<>
			<DocsContextProvider value={{ docs, addDoc, deleteDoc, updateDoc, toggleComplete }}>
				<div className="mb-4">
					<DocsForm />
				</div>
				<div
					ref={ref}
					className="z-[3] fixed w-full h-full left-0 flex gap-1 flex-wrap p-2 mt-10"
				>
					{docs.map((doc) => (
						<div key={doc.id} className="w-full">
							<DocsItem todo={doc} reference={ref} />
						</div>
					))}
				</div>
			</DocsContextProvider>
		</>
	);
}

export default FG;
