function Logo() {
    return (
        <header className="flex items-center justify-center mb-8">
            <img
                src="logo.svg"
                alt="logo"
                className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] lg:w-[3rem] lg:h-[3rem]"
            />
            <h1 className="font-['Courgette'] text-[3rem] font-semibold ml-2 text-gray-50 md:text-[4rem] lg:text-[3rem]">
                TODO
            </h1>
        </header>
    );
}

export default Logo;
