
import React, { useState, useRef } from 'react'

export default function Koreainternal() {
    const [file, setFile] = useState([]);
    const inputFile = useRef(null);
    const handleChange = e => {
        setFile([...file, e.target.files[0]]);
        console.log(file)
    }
    // return (
    //     <div className="input-group mb-3">
    //         <label htmlFor="Select-model-file" className="form-label mx-5">Select model file</label>
    //         {/* <input type="text" className="form-control mx-5" onChange={SelectBtnFxn} ref={inputFile}/> */}
    //         <input type="text" onChange={handleChange} ref={inputFile}/>
    //         <button onClick={() => inputFile.current.click()} >Select</button>
    //     </div>
    // )
    return (
        <div className="app">
            <label htmlFor="Select-model-file" className="form-label mx-5">Select model file</label>
            <input type="file" onChange={handleChange} ref={inputFile} />
        </div>
      );
}