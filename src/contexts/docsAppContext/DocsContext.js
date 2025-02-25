/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const DocsContext = createContext({
	docs: [
		{
			id: 1,
			doc: "Doc Content",
			completed: false,
		},
	],
	addDoc: (doc) => {},
	// updateDoc is to add new doc, so we give id to check for existing
	updateDoc: (id, doc) => {},
	deleteDoc: (id) => {},
	toggleComplete: (id) => {},
});

export const useDocs = () => {
	return useContext(DocsContext);
};

export const DocsContextProvider = DocsContext.Provider;
