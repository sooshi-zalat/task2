import React from "react";
import "../style.css";


import React from 'react'

    const Photos = ({ photos }) => {
      return (
        <div >
          <center><h1>Photos</h1></center>
          {photos.map((photo) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{photo.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{photo.url}</h6>
                <p class="card-text">{photo.thumbnailUrl}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Photos

const Item = ({ children, onClick }) => {
    return (
      <div className='item' >
        {children}
      </div>
    );
  };
  

  
export default Item;