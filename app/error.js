"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2 className="text-red-400">Something went wrong!</h2>
            <h2>{error?.message}</h2>
            <button
                className="px-4 py2 bg-blue-500 text-white"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
