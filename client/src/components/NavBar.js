import React from 'react';

export default class NavBar extends React.Component {
        render() {
            return ( 
                <nav className="navbar navbar-default navStyle" id="customNav">
                <div className="container-fluid row3">
                    
                    <div className="navbar-header">
                    <a className="navbar-brand navStyle" id="navHead" href="#">CHICAGO PUBLIC ART DATABASE</a>
                    </div>
                   
                    <div className="collapse navbar-collapse navStyle" id="bs-example-navbar-collapse-1">
                     
                     <ul className="nav navbar-nav" id="list"> 
                        
                        <li className="col-lg-4 col-md-6 col-sm-6"><a className="linkSet" id="linkColor" href="https://pure-atoll-15112.herokuapp.com/about">ABOUT<span className="sr-only">(current)</span></a></li>
                        <li className="col-lg-6 col-md-6 col-sm-6"><a className="linkSet" id="linkColor" href="https://pure-atoll-15112.herokuapp.com/api">API <span className="sr-only">(current)</span></a></li>
                    </ul>       
                    </div>
                </div>
            </nav>
            );
            }
        }