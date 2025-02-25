import { motion } from "framer-motion";
import { useState } from "react";
import { useDocs } from "../../contexts/docsAppContext";
import PropTypes from "prop-types";

function DocsItem({ doc, reference }) {
	const [isDocEditable, setIsDocEditable] = useState(false);
	const [docMsg, setDocMsg] = useState(doc.doc);
	const { updateDoc, deleteDoc, toggleComplete } = useDocs();

	const editDoc = () => {
		updateDoc(doc.id, { ...doc, doc: docMsg });
		setIsDocEditable(false);
	};

	const toggle = () => {
		toggleComplete(doc.id);
	};

	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.1 }}
			dragElastic={0.2}
			dragTransition={{ bounceStiffness: 100, bounceDumping: 30 }}
			className={`flex-shrink-0 relative overflow-hidden w-60 h-72 rounded-[45px] px-8 py-10 m-4 text-zinc-300 mt-8 ${
				doc.completed ? "bg-[#c6a9a7]" : "bg-zinc-900/60"
			}`}
		>
			{/* checkbox */}
			<input
				type="checkbox"
				className="cursor-pointer"
				checked={doc.checked}
				onChange={toggle}
			/>

			{/* text content */}
			<input
				type="text"
				value={docMsg}
				className={`border outline-none w-full bg-transparent rounded-lg text-sm font-semibold leading-tight mt-5 ${
					isDocEditable ? "border-black/10 px-2" : "border-transparent"
				} ${doc.completed ? "line-through" : ""}`}
				onChange={(e) => setDocMsg(e.target.value)}
				readOnly={!isDocEditable}
			/>

			<div className="left-0 footer absolute bottom-0 w-full">
				<div className="flex items-center justify-between px-8 py-3 mb-3 text-zinc-400"></div>

				<div
					className={`tag w-full flex items-center justify-evenly py-4 text-white bg-blue-600 hover:bg-green-500`}
				>
					{/* Edit, Save Button */}
					<button
						className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
						onClick={() => {
							if (doc.completed) return;

							if (isDocEditable) {
								editDoc();
							} else setIsDocEditable((prev) => !prev);
						}}
						disabled={doc.completed}
					>
						{isDocEditable ? "📁" : "✏️"}
					</button>

					{/* Delete Doc Button */}
					<button
						className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
						onClick={() => deleteDoc(doc.id)}
					>
						❌
					</button>
				</div>
			</div>
		</motion.div>
	);
}

DocsItem.propTypes = {
	doc: PropTypes.array,
	reference: PropTypes.any,
};

export default DocsItem;
