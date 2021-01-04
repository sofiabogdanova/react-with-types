import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import {CoursePart} from "./types";

const App: React.FC = () => {
    const courseName = "Half Stack application development";
    const courseParts = [
        {
            name: "Fundamentals",
            exerciseCount: 10
        },
        {
            name: "Using props to pass data",
            exerciseCount: 7
        },
        {
            name: "Deeper type usage",
            exerciseCount: 14
        }
    ] as Array<CoursePart>;
    return (
        <div>
            <Header header={courseName}/>
            <Content courseParts={courseParts}/>
            <Total courseParts={courseParts}/>
        </div>
    );
};

export default App;