
import Navbar from './component/Navbar'
import React, { useState, useRef } from 'react'
import { GetColorName } from 'hex-color-to-color-name';

export default function Koreainternal() {
    const [modelFile, setmodelFile] = useState([]);
    const [resFile, setresFile] = useState([]);
    // const [outDir, setoutDir] = useState([]);
    const [acceptance_strain_energy, setacceptance_strain_energy] = useState("0");
    const [acceptance_frequency, setacceptance_frequency] = useState("0");
    const [top, settopView] = useState(true);
    const [bottom, setbottomView] = useState(true);
    const [left, setleftView] = useState(true);
    const [right, setrightView] = useState(true);
    const [rear, setrearView] = useState(true);
    const [front, setfrontView] = useState(true);
    const [color, setColor] = useState(null);
    const inputFile = useRef(null);
    const change_topview = e => {
      settopView(!top);
    }
    const change_bottomview = e => {
      setbottomView(!bottom);
    }
    const change_leftview = e => {
      setleftView(!left);
    }
    const change_rightview = e => {
      setrightView(!right);
    }
    const change_rearview = e => {
      setrearView(!rear);
    }
    const change_frontview = e => {
      setfrontView(!front);
    }
    const change_acceptance_frequency = e => {
      setacceptance_frequency(e.target.value)
    }
    const change_acceptance_strain_energy = e => {
      setacceptance_strain_energy(e.target.value)
    }
    const modelFileClick = e => {
      const fileObj = e.target.files && e.target.files[0];
      if (!fileObj) {
        return;
      }
      setmodelFile(fileObj.name)
    }
    const resFileClick = e => {
      const fileObj = e.target.files && e.target.files[0];
      if (!fileObj) {
        return;
      }
      setresFile(fileObj.name)
    }
    // const outClick = e => {
    //   const fileObj = e.target.files && e.target.files[0];
    //   if (!fileObj) {
    //     return;
    //   }
    //   setoutDir(fileObj.name)
    // }

    const Report =() =>{
      console.log(modelFile)
      console.log(resFile)
      console.log("fgollleee")
      let topView = "yes"
      let botView = "yes"
      let leftView = "yes"
      let rightView = "yes"
      let rearView = "yes"
      let frontView = "yes"
      if(top === false) {
        topView = "no"
      }
      if(bottom === false) {
        botView = "no"
      }
      if(left === false) {
        leftView = "no"
      }
      if(right === false) {
        rearView = "no"
      }
      if(rear === false) {
        rightView = "no"
      }
      if(front === false) {
        frontView = "no"
      }

      let colorName = GetColorName(color)

      let result = ["Parameter,Value" ,"model_file,"+modelFile , "result_file,"+resFile ,"acceptance_frequency,"+acceptance_frequency,"acceptance_strain_energy,"+acceptance_strain_energy,"min_legend_color,"+colorName,"View,Response","top,"+topView,"bottom,"+botView,"left,"+leftView,"right,"+rearView,"rear,"+rightView,"front,"+frontView]
      console.log(result)
      let resultantString = result.join("\n");
      console.log(resultantString)
      const element = document.createElement("a");
      const file = new Blob([resultantString], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();

    }
    return (
      <div>
        <div className="mb-3">
          <Navbar/>
        </div>
        <div className="app">
            <label htmlFor="Select-model-file" className="form-label mx-5">Select model file</label>
            <input type="file" onChange={modelFileClick} ref={inputFile} />
        </div>
        <div className="app">
            <label htmlFor="Select-model-file" className="form-label mx-5">Select result file</label>
            <input type="file" onChange={resFileClick} ref={inputFile} />
        </div>
        <div className="input-group mb-3">
            <label htmlFor="Select-model-file" className="form-label mx-5">Select Output Dir</label>
            <input type="file" directory="" webkitdirectory=""  ref={inputFile}/>
            {/* <input type="file" onChange={outClick} ref={inputFile} /> */}
        </div>
        <div className="input-group mb-3">
            <label htmlFor="Select-model-file" className="form-label mx-5">Enter frequency acceptance value</label>
            <input type="text" onChange={change_acceptance_frequency} placeholder={acceptance_frequency} />
            {/* <input type="file" onChange={outClick} ref={inputFile} /> */}
        </div>
        <div className="input-group mb-3">
            <label htmlFor="Select-model-file" className="form-label mx-5">Enter strain energy acceptance value</label>
            <input type="text" onChange={change_acceptance_strain_energy} placeholder={acceptance_strain_energy} />
            {/* <input type="file" onChange={outClick} ref={inputFile} /> */}
        </div>

        <div className="input-group mb-3">
            <label htmlFor="Select-model-file" className="form-label mx-5">Min legend color</label>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            {/* <input type="file" onChange={outClick} ref={inputFile} /> */}
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Top view</label>
          <input className="form-check-input" type="checkbox" role="switch" checked={top} onChange={change_topview} />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Bottom view</label>
          <input className="form-check-input" type="checkbox" role="switch" checked={bottom} onChange={change_bottomview} />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Left view</label>
          <input className="form-check-input" type="checkbox" role="switch" checked={left} onChange={change_leftview} />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Right view</label>
          <input className="form-check-input" type="checkbox" role="switch" checked={right} onChange={change_rightview} />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Rear view</label>
          <input className="form-check-input" type="checkbox" role="switch" checked={rear} onChange={change_rearview} />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Front view</label>
          <input className="form-check-input" type="checkbox" role="switch" checked={front} onChange={change_frontview} />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="Select-model-file" className="form-label mx-5">Generate Report</label>
          <button onClick={Report} >Select</button>
         </div>

      </div>
      );
}

// type UserInfo = {
//   name: string;
//   email: string;
// }

// function exportUserInfo(userInfo: UserInfo) {
//   const fileData = JSON.stringify(userInfo);
//   const blob = new Blob([fileData], { type: "text/plain" });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.download = "user-info.json";
//   link.href = url;
//   link.click();
// }


// import axios from 'axios';
  
// import React,{Component} from 'react';
  
// class App extends Component {
   
//     state = {
  
//       // Initially, no file is selected
//       selectedFile: null
//     };
     
//     // On file select (from the pop up)
//     onFileChange = event => {
     
//       // Update the state
//       this.setState({ selectedFile: event.target.files[0] });
     
//     };
     
//     // On file upload (click the upload button)
//     onFileUpload = () => {
     
//       // Create an object of formData
//       const formData = new FormData();
     
//       // Update the formData object
//       formData.append(
//         "myFile",
//         this.state.selectedFile,
//         this.state.selectedFile.name
//       );
     
//       // Details of the uploaded file
//       console.log(this.state.selectedFile);
     
//       // Request made to the backend api
//       // Send formData object
//       axios.post("api/uploadfile", formData);
//     };
     
//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {
     
//       if (this.state.selectedFile) {
          
//         return (
//           <div>
//             <h2>File Details:</h2>
//             <p>File Name: {this.state.selectedFile.name}</p>
  
//             <p>File Type: {this.state.selectedFile.type}</p>
  
//             <p>
//               Last Modified:{" "}
//               {this.state.selectedFile.lastModifiedDate.toDateString()}
//             </p>
  
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <br />
//             <h4>Choose before Pressing the Upload button</h4>
//           </div>
//         );
//       }
//     };
     
//     render() {
     
//       return (
//         <div>
//             <h1>
//               GeeksforGeeks
//             </h1>
//             <h3>
//               File Upload using React!
//             </h3>
//             <div>
//                 <input type="file" onChange={this.onFileChange} />
//                 <button onClick={this.onFileUpload}>
//                   Upload!
//                 </button>
//             </div>
//           {this.fileData()}
//         </div>
//       );
//     }
//   }
  
//   export default App;
