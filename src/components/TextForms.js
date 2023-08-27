import React, { useState } from "react";

const TextForms = (props) => {
    const [text, setText] = useState("");
    const handleUpperClick = (e) => {
        // console.log("upper case was clicked " + text);
        let newUpperText = text.toUpperCase();
        setText(newUpperText);
    };
    const handleOnChange = (e) => {
        // console.log("on change");
        setText(e.target.value);
    };

    const handleLowerClick = (e) => {
        let newLowerText = text.toLowerCase();
        setText(newLowerText);
    };
    const handleClickClear = (e) => {
        setText("");
    }
    const handleCopy = (e) => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    } 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
 

    return (
        <>
            <div className="container" style={{color:props.mode==="dark"?"white":"grey"}}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control border border-dark"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{backgroundColor:props.mode==="light" ? "white":"grey",color:props.mode==="light" ? "black":"white"}}
                    >

                    </textarea>
                </div>
                <button className="btn btn-success" onClick={handleUpperClick}>Convert to Upper Case</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleLowerClick}>Convert to Lower Case</button>
                <button className="btn btn-success mx-0.5 my-3" onClick={handleClickClear}>Clear Text</button>
                <button className="btn btn-success mx-2 my-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-success mx-0.5 my-3" onClick={ handleExtraSpaces}>Remove Spaces</button>
                
            </div>
            <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
                <h2> Your text summary </h2>
                <p>{text.trim().split(/\s+/).filter((word) => word !== "").length} words and {text.replace(/\s/g, "").length} characters</p>
                <p>{0.008 *text.trim().split(/\s+/).filter((word) => word !== "").length} min. Total time to read this text if you are a slow reader</p>
                <h2> Preview </h2> 
             
                    
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{backgroundColor:props.mode==="light" ? "white":"#012204",color:props.mode==="light" ? "black":"white"}}
                    >
                    <p> {text} </p>
                    </textarea>
               
            </div>
        </>
    );
};

export default TextForms;
