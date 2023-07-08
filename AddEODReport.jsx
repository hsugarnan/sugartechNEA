import "./App.css";//uses App.css 
import { useState, useEffect } from "react";//need useEffect for running the fetch function as soon as the page mounts and useState to store variables
import React from 'react';// for react
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";//needed functions from the firebase storage thing
import { storage } from "./firebase/init";//needed for functions
import { v4 } from "uuid";//needed to make every file unique

function AddEODReport() {
  const [imageUpload, setImageUpload] = useState(null);//set state for Image upload
  const [imageUrls, setImageUrls] = useState([]);//array of previous Image
  const [submit, setSubmit] = useState(false)//setting the state of the Submit or not(whether the picture has been inputted or not)

  const imagesListRef = ref(storage, "EOD/");//imageListRef refers to where the blobs are being stored
  const uploadFile = () => {//a function to upload the file
    if (imageUpload == null) return;//if no image return nothing
    const imageRef = ref(storage, `EOD/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);//sets the array of images
        console.log("success")
        setSubmit(!submit)//setting submit field to True


      });
    });
  };

  useEffect(() => {//runs on mounts
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);//shows the previous images
        });
      });
    });
  }, []);

  return (
    <div className="App">
     <h1 className="title">Upload End of Day Reports</h1>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      
      <button onClick={uploadFile} className="button-10"> Upload Image</button>
      {/* {imageUrls.map((url) => {
        return <img src={url} />;
      })} */}
       { submit ? <div className = "buttonWrapper"><p className="alert1" >Upload Complete</p> <Link to="/">Complete Report</Link> </div> : <p className="smallFont">SugarTech 2023©</p>  }
    </div>
  );
}

export default AddEODReport;