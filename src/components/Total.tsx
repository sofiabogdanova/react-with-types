import React from "react";
import {CoursePart} from "../types";

const Total: React.FC<{ courseParts: Array<CoursePart> }> = ({courseParts}) => {
    const total: number = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)
    return (
        <div>
            <p>
                Number of exercises{" "}
                {total}
            </p>
        </div>

    )
}

export default Total;