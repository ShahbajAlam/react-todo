import { useTodos } from "../Contexts/ToDoContext";
import ToDo from "./ToDo";

function ToDos() {
    const { todos } = useTodos();
    todos.sort((a, b) => b.createdAt - a.createdAt);

    return (
        <ul className="overflow-auto w-[90%] h-[65vh] rounded-lg md:w-[70%] lg:w-[50%] lg:h-[60vh]">
            {todos.map((todo) => (
                <ToDo
                    key={todo.createdAt}
                    text={todo.text}
                    id={todo.createdAt}
                />
            ))}
        </ul>
    );
}

export default ToDos;
