import { useEffect, useState } from "react"

export const useDebounced = (value: string, delay: number = 700): string => {
    const [ debounced, setDebounced ] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounced;
}