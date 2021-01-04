import React from "react";
import {CoursePart} from "../types";
import Part from "./Part";

interface ContentProps {
    courseParts: Array<CoursePart>;
}

const Content: React.FC<ContentProps> = ({courseParts}) => {
    return (
        <div>
            {courseParts.map(part => (
                <Part key={part.name} part={part} />
            ))}
        </div>

    )
}

export default Content;