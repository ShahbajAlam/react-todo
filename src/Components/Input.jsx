import { useTodos } from "../Contexts/ToDoContext";
import AddButton from "./AddButton";

function Input() {
    const { text, handleChange, setTodos, clearText } = useTodos();

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            setTodos((i) => [...i, { text, createdAt: Date.now() }]);
            clearText();
        }
    };

    return (
        <div className="w-[90%] md:w-[70%] lg:w-[50%] relative mt-8">
            <input
                type="text"
                placeholder="Enter your todo..."
                value={text}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleEnterKey(e)}
                className="w-full p-3 pr-[3rem] text-xl border-none outline-none rounded-xl font-semibold text-gray-950 bg-gradient-to-r from-[#CFDEF3] to-[#E0EAFC] placeholder:text-gray-800 md:p-4 md:text-2xl md:pr-[5rem] lg:text-xl lg:px-4 lg:py-3 lg:pr-[4.2rem] caret-slate-950"
            />
            <AddButton />
        </div>
    );
}

export default Input;
