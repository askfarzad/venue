import React from "react";
import Carrousel from "./Carrousel";

const Featured = () => {
    return (
        <div
            style={{
                position: "relative"
            }}
        >
            <div className="artist_name">
                <div className="wrapper">Ariana Grande</div>
            </div>
            <Carrousel />
        </div>
    );
};

export default Featured;
