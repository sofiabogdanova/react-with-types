import React from "react";
import {CoursePart} from "../types";

const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const Part: React.FunctionComponent<{ part: CoursePart }> = ({part}) => {

    switch (part.name) {
        case "Fundamentals":
            return (
                <div>
                    <h3>Fundamentals</h3>
                    <p>Exercises: {part.exerciseCount}</p>
                    <p>Description: {part.description}</p>
                </div>
            );
            break;
        case "Using props to pass data":
            return (
                <div>
                    <h3>Using props to pass data</h3>
                    <p>Exercises: {part.exerciseCount}</p>
                    <p>Projects: {part.groupProjectCount}</p>
                </div>
            );
            break;
        case "Deeper type usage":
            return (
            <div>
                <h3>Deeper type usage</h3>
                <p>Exercises: {part.exerciseCount}</p>
                <p>Description: {part.description}</p>
                <p>Submission link: {part.exerciseSubmissionLink}</p>
            </div>
            );
            break;
        case "Deployment":
            return (
                <div>
                    <h3>Deployment</h3>
                    <p>Exercises: {part.exerciseCount}</p>
                    <p>Description: {part.description}</p>
                    <p>Deployment link: {part.deploymentLink}</p>
                </div>
            );
            break;
        default:
            assertNever(part)
            return <div></div>
    }
};

export default Part;