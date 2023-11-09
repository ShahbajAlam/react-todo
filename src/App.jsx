import Blank from "./Components/Blank";
import Input from "./Components/Input";
import Logo from "./Components/Logo";
import ToDos from "./Components/ToDos";
import { useTodos } from "./Contexts/ToDoContext";

function App() {
    const { todos } = useTodos();

    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-[#0d0d66] to-[#1693b6] font-['Montserrat']">
            <Logo />
            {todos.length > 0 ? <ToDos /> : <Blank />}
            <Input />
        </main>
    );
}

export default App;
