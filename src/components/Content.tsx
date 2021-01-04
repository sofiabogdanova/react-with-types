import React from "react";
import {CoursePart} from "../types";

interface ContentProps {
    courseParts: Array<CoursePart>;
}

const Content: React.FC<ContentProps> = ({courseParts}) => {
    return (
        <div>
            {courseParts.map(part => (
                <p key={part.name}>
                    {part.name} {part.exerciseCount}
                </p>
            ))}
        </div>

    )
}

export default Content;