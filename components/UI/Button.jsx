import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const Button1 = ({ text, href, type }) => {
    return (
        <button title={`${text} page`} role="button" className="w-max">
            <Link
                title={`${text} page`}
                href={href || "#"}
                className="rounded-lg w-full border-2 border-solid border-white flex justify-center items-center gap-3 bg-white px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-black text-sm md:text-base transition-all duration-300 hover:scale-110 hover:bg-primary"
            >
                {text}
                {type && (<span><FaArrowRight className="text-base md:text-lg" /></span>)}
            </Link>
        </button>
    );
};

export const AnimateButton = ({ text, href }) => {
    return (
        <button title={`${text} page`} role="button" className="w-max transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            <Link
                title={`${text} page`}
                href={href || "#"}
                className={`bg-white hover:shadow-[4px_4px_0px_var(--primary)] text-center text-black w-full cursor-pointer px-2 py-2 md:py-3 md:px-4 font-semibold capitalize text-sm md:text-base rounded-lg`}
            >
                {text}
            </Link>
        </button>
    );
};