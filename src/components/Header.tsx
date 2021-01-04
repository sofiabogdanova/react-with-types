import React from "react";

const Header: React.FunctionComponent<{ header: string }> = ({header}) => {
    return <h1>{header} </h1>;
};

export default Header;