import React from "react";
// import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default class UploadForm extends React.Component {

Render () {
        return ( 
        <form className= "form-inline" 
ref='uploadForm' 
id='uploadForm' 
action='./upload' 
method='post' 
encType="multipart/form-data">
    <input className="form-control formBorder" type="file" name="image" required />
    <input className="form-control" type="text" name="artist" id="artistBox" placeholder="artist (if known)"/>
    <input className="form-control" type="text" name="title" id="titleBox" placeholder="title (if known)" required/>
    <input className="form-control" type="text" name="description" id="descriptionBox" placeholder="Description" required/>
    <input className="form-control" type="text" name="address" id="addressBox" placeholder="address" required />
    <input className="form-control" id="submitBox" type='submit' value='Upload!' />
</form>

);


}
}

