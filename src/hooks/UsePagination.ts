import { useMemo } from "react";

export const usePagination = (totalPages: number) => {
    return useMemo(() => {
        const Array: number[] = [];
        for (let i = 0; i < totalPages; i++) {
            Array.push(i + 1);
        }
        return Array;
    }, [totalPages]);
};
