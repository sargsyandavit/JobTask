import React from "react";
import './Table.css'

const Table  = ({tableDate}) => {
    return (
        <div className="table">
           <ul>
           {tableDate.map((elem,index) => 
            <ol className="tableList" key={index}>
                {elem.nfoType}
            </ol>
            )}
           </ul>
      </div>        
    );
};

export default Table;