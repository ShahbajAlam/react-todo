import { BiSolidAddToQueue } from "react-icons/bi";
import { useTodos } from "../Contexts/ToDoContext";
import { useEffect } from "react";

function AddButton() {
    const { todos, setTodos, text, clearText } = useTodos();
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <button
            className="absolute right-[0.5rem] top-[50%] translate-y-[-50%]"
            onClick={() => {
                setTodos((i) => [...i, { text, createdAt: Date.now() }]);
                clearText();
            }}
        >
            <BiSolidAddToQueue className="text-green-700 text-[2.5rem] md:text-[3rem] lg:text-[2.3rem]" />
        </button>
    );
}

export default AddButton;
