import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

function Card({ data, reference }) {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.1 }}
			dragElastic={0.2}
			dragTransition={{ bounceStiffness: 100, bounceDumping: 30 }}
			className="flex-shrink-0 relative overflow-hidden w-60 h-72 bg-zinc-900/60 rounded-[45px] px-8 py-10 m-4 text-zinc-300 mt-8">
			<FaRegFileAlt />
			<p className="text-sm  font-semibold leading-tight mt-5">{data.desc}</p>

			<div className="left-0 footer absolute bottom-0 w-full">
				<div className="flex items-center justify-between px-8 py-3 mb-3 text-zinc-400">
					<h5>{data.fileSize}</h5>

					<span className="w-7 h-7 flex rounded-full justify-center items-center">
						{data.close ? <IoClose /> : <LuDownload />}
					</span>
					
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag w-full flex items-center justify-center py-4 text-white bg-blue-600 hover:bg-green-500`}
					>
						<h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
					</div>
				)}
			</div>
		</motion.div>
	);
}

export default Card;
