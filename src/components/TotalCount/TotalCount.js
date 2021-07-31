import React from "react";

export default function TotalCount({totalCount}) {

    return(
        <div className="total-count-wrapper">
            <div className="total-count-text">Total count:
                <b className="total-counter">{totalCount}</b>
            </div>
        </div>
    );
}