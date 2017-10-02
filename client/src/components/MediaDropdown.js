import React from 'react';
var Alert = require('react-bootstrap/lib/Alert');

export default class MediaDropdown extends React.Component {
    render () { 
        return (

            <div>
              <div className = "ButtonToolbar">
                <div className = "DropdownButton" bsSize="large" title="Large button" id="dropdown-size-large">
                  <div className ='MenuItem' eventKey="1">Graffitti</div>
                  <div className ='MenuItem' eventKey="2">Sculpture </div>
                  <div className ='MenuItem' eventKey="3">Statues</div>
                  <div className ='MenuItem' eventKey="4">Murals</div>
                  <div className ='MenuItem' eventKey="4">Constructs</div>
                </div>
              </div>  
</div>
    
        
    )
 } 
 }