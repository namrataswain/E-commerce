import React from 'react';

export const MenuItem = (props) =>{
  return(
    <div className="menu-item">
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
    </div>
  )
}