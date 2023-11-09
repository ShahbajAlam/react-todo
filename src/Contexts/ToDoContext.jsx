import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        () => JSON.parse(window.localStorage.getItem("todos")) || []
    );
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const clearText = () => {
        setText("");
    };

    return (
        <ToDoContext.Provider
            value={{
                todos,
                setTodos,
                text,
                handleChange,
                clearText,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};

const useTodos = () => useContext(ToDoContext);

export { ToDoProvider, useTodos };
