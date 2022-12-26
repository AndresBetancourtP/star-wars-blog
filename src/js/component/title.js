import React from "react";
import PropTypes from "prop-types";

export const Title = ({text}) => {
return (
    <h1 className = "display-6" style={{color:"#CCCCCC"}}><strong>{text}</strong></h1>
)
};

Title.propTypes = {
    text: PropTypes.string,
};