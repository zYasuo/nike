import { FaSearch } from "react-icons/fa"

export function InputSearch() {
    return (
        <div className="relative">
            <input
                className="bg-transparent border border-gray-300 rounded-lg py-2 px-4 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:w-64"
                type="text"
                placeholder="Buscar"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaSearch className="text-gray-400" />
            </div>
        </div>
    )
}