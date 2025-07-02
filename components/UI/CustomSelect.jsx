export const CustomSelect = ({ name, val, handleChange }) => {
    return (
        <select
            value={val}
            required
            name={name}
            id="course"
            className="rounded-lg border-3 p-3 font-semibold border-primary focus-within:border-2 focus-within:border-primary text-sm md:text-base focus-within:outline-none w-full text-foreground/80 bg-transparent"
            onChange={handleChange}
        >
            <option value="" disabled className="text-gray-500 font-bold text-sm md:text-base capitalize">
                Choose a Course
            </option>
            <option value="IBM Data Science" className="text-gray-500 text-sm md:text-base capitalize">
                IBM Data Science
            </option>
            <option value="Data Analytics" className="text-gray-500 text-sm md:text-base capitalize">
                Data Analytics
            </option>
            <option value="Digital Marketing" className="text-gray-500 text-sm md:text-base capitalize">
                Digital Marketing
            </option>
            <option value="UI/UX Mastery Course" className="text-gray-500 text-sm md:text-base capitalize">
                UI/UX Mastery Course
            </option>
            <option value="Full Stack Development" className="text-gray-500 text-sm md:text-base capitalize">
                Full Stack Development
            </option>
        </select>
    );
};
