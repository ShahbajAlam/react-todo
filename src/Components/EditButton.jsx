function EditButton({ toggleEditable }) {
    return (
        <button onClick={toggleEditable}>
            <img
                src="edit.svg"
                alt="edit button"
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] lg:w-[2.2rem] lg:h-[2.2rem]"
            />
        </button>
    );
}

export default EditButton;
