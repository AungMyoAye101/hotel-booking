"use client";
import { Spinner } from "@heroui/react"


const Loading = () => {
    return (
        <section>
            <div className="flex justify-center items-center min-h-screen">
                <Spinner size="lg" aria-label="Loading content" />
            </div>
        </section>
    )
}

export default Loading