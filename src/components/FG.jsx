import { useRef, useState } from "react";
import Card from "./Card";

function FG() {
	const ref = useRef(null);
	const [data, setData] = useState([
		{
			desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
			fileSize: "0.8 MB",
			close: false,
			tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
		},
		{
			desc: "I afbja agagb all;irueouw wljflwj.",
			fileSize: "12 MB",
			close: true,
			tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
		},
		{
			desc: "Lorem ipsgh poeuw lmclnse ctetur adipisicing.",
			fileSize: "0.3 MB",
			close: true,
			tag: { isOpen: false, tagTitle: "Download", tagColor: "green" },
		},
	]);

	return (
		<>
			<div
				ref={ref}
				className="z-[3] fixed w-full h-full left-0 flex gap-1 flex-wrap p-2 mt-10"
			>
				{data.map((item, index) => (
					<Card data={item} key={index} reference={ref} />
				))}
			</div>
		</>
	);
}

export default FG;
