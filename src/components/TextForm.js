import React, { useState } from "react";

export default function TextForm({ heading,mode }) {
    const [text, setText] = useState('');

    const handleLowerClick = () => {
        let textToChange = text.toLowerCase();
        setText(textToChange);
    };

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <>
        <div className="container" style={{color:mode==='dark'?'white':'#042743'}}>
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea
                    placeholder="enter text here"
                    className="form-control "
                    value={text}
                    onChange={handleChange}
                    style={{backgroundColor:mode==='light'?'white':'grey'}}
                    id="exampleFormControlTextarea1"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
            <h2 className="my-2">Preview text</h2>
            <textarea
                className="form-control"
                value={text}
                readOnly
                style={{ width: '300px' ,backgroundColor:mode==='light'?'white':'grey'}}
            ></textarea>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <button id="download" className="btn btn-primary mt-3" onClick={handleDownload}>Download Text</button>
        </div>
        </>
    );
}
