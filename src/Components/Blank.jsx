import { motion } from "framer-motion";

function Blank() {
    return (
        <motion.div
            className="w-[90%] h-[65vh] md:w-[70%] lg:h-[60vh] flex justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout
        >
            <h1 className="text-2xl text-center text-gray-50 blank md:text-3xl">
                Your to do list will appear here
            </h1>
        </motion.div>
    );
}

export default Blank;
