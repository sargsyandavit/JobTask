import React from "react";
import './Table.css'

const Table  = ({tableData}) => {
    return (
        <div className="table">
           <ul>
           {tableData.map((elem,index) => 
            <ol className="tableList" key={index}>
                {elem.nfoType}
            </ol>
            )}
           </ul>
      </div>        
    );
};

export default Table;