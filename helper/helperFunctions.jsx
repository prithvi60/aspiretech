import { VALID_CITIES } from "@/utils/Data";


export function parseDataScienceRoute(path) {
    // Exact pattern: best-data-science-course-in-{city}
    const dataSciencePattern = /^best-data-science-course-in-(.+)$/;
    const match = path.match(dataSciencePattern);

    if (match) {
        const city = match[1].toLowerCase();

        // Validate if the city is in our allowed list
        // if (VALID_CITIES.includes(city)) {
        return {
            type: 'data-science-course',
            city: city
        };
        // }
    }

    return null;
}