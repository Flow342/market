import { useState } from "react";

export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };
    return [fetching, isLoading, error] as const;
};
