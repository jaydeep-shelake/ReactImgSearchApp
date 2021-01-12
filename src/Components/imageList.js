import React from 'react'
import './imageList.css';
import ImageCard from'./ImageCard';
const ImageList = ({images}) => {
   const imagesUrls= images.map((image,index)=>{
     return <ImageCard key={index} image={image}/>;
    });
  return <div className="imageList">{imagesUrls}</div>
}

export default ImageList;
