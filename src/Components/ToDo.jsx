import { useState } from "react";
import { motion } from "framer-motion";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

function ToDo({ text, id }) {
    const [editable, setEditable] = useState(false);
    const [editedValue, setEditedValue] = useState(text);
    const toggleEditable = () => {
        setEditable((e) => !e);
    };

    return (
        <motion.li
            className="bg-[#CCCCB2] rounded-lg p-3 flex items-center justify-between w-full mb-2 lg:py-1"
            initial={{ opacity: 0, y: -20, animationDuration: 500 }}
            animate={{ opacity: 1, y: 0, animationDuration: 500 }}
            exit={{ opacity: 0, y: -20, animationDuration: 500 }}
            layout
        >
            {!editable && (
                <p className="w-[80%] break-words text-xl pr-2 font-semibold text-gray-800 md:text-2xl lg:text-xl">
                    {editedValue}
                </p>
            )}
            {editable && (
                <input
                    autoFocus
                    className="w-[80%] text-xl border-none outline-none bg-[#CCCCB2] pr-2 font-semibold text-gray-950 md:text-2xl lg:text-xl caret-slate-950"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") toggleEditable();
                    }}
                />
            )}
            <div className="w-[20%] flex justify-between items-center md:justify-end md:gap-4">
                {!editable && <EditButton toggleEditable={toggleEditable} />}
                {editable && <SaveButton toggleEditable={toggleEditable} />}
                <DeleteButton id={id} />
            </div>
        </motion.li>
    );
}

export default ToDo;
