import React from "react";
import "../style.css";


function Menu() {
  return (
    <div class="container">
    <div class="arrow">
      <div class="outer"></div>
      <div class="inner"></div>
    </div>
    <div class="message-body">
      <h1>boardme Founders meeting </h1>
      <p>4 Dec 2019 . 17:30 to 18:15</p>
      <div className="row">
          <div className="col-sm-8">
      <btn className="btnjoin1">join Zoom Meeting</btn>
      </div>
      <div className="col-sm-4">
          <p>Meeting info</p>
      </div>
      </div>

    <h1>Attendees</h1>
    <ul className="list-group">
            <li className="list-group-item odd">
            <a className="icon"> &#10004;</a> Passion@email.com
            </li>
            

            <li className="list-group-item odd">
           <a className="icon"> &#10004;</a> art@email.com
          </li>

          <li className="list-group-item odd">
          <a className="icon"> &#x3F;</a> love@email.com
          </li>

          <li className="list-group-item odd">
          <a className="icon"> &#x3F;</a> technology@email.com
          </li>
            </ul>
            
    </div>
  </div>
  );
}

export default Menu;


