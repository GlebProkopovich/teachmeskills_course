import React from 'react';
import './PagePannel.scss';

const PagePannel = () => {
  return (
    <div className="pagePannel">
      <button className="prev">
        <span className="material-symbols-outlined">arrow_back</span>
        Prev
      </button>
      <div className="pages">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>30</button>
      </div>
      <button className="next">
        Next
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default PagePannel;
