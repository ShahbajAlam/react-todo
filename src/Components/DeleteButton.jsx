import { useTodos } from "../Contexts/ToDoContext";

function DeleteButton({ id }) {
    const { setTodos } = useTodos();

    const handleDelete = () => {
        setTodos((todos) => todos.filter((todo) => todo.createdAt !== id));
    };

    return (
        <button onClick={handleDelete}>
            <img
                src="delete.svg"
                alt="delete button"
                className="w-[1.8rem] h-[1.8rem] md:w-[2.8rem] md:h-[2.8rem] lg:w-[2rem] lg:h-[2rem]"
            />
        </button>
    );
}

export default DeleteButton;
