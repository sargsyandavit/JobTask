import React from "react";
import './List.css';
// import { listData } from "../../utils/utils";
import RightPanel from "./rightPanel/RightPanel";
import LeftPanel from "./leftPanel/LeftPanel";

const List = () => {
  return(
      <div className="listContent">
        <div className="list">
            <LeftPanel/>
            <RightPanel/>
        </div>
      </div>
  );  
};

export default List;