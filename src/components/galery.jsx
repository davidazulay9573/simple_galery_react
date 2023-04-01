import { useState } from "react";
import { ButtonsGalery } from "./ButtonsGalery";
import { AllImg } from "./allImg";
 
export function Galery({imgsList, imgState = imgsList[0]}){
  
  const [img, setImg] = useState(imgState);
  const [slideState, setSlideState] = useState({state: true, icon: <i className="bi bi-repeat"></i>});
  
  function nextImg (){
    if (imgsList.length !== 0) {
      let indexOfImg = imgsList.indexOf(img);
      setImg(imgsList[indexOfImg + 1]);
      if (indexOfImg === imgsList.length - 1) {
        if (slideState) {
          setImg(imgsList[0]);
        } else {
          setImg((img) => img);
        }
      }
    }
  }

  function previousImg() {
     if (imgsList.length !== 0) {
        let indexOfImg = imgsList.indexOf(img);
        setImg(imgsList[indexOfImg - 1]);
        if (indexOfImg === 0) {
          if (slideState) {
            setImg(imgsList[imgsList.length - 1]);
          } else {
            setImg((img) => img);
          }
        }
     }
  }
   
  function targetImg(img){
     let indexOfImg = imgsList.indexOf(img);
     setImg(imgsList[indexOfImg]);
   };
 
  function setInfintiSlide() {
      if (slideState.state) {
        setSlideState({ state: false, icon: <i className="bi bi-repeat"></i>});
      }
      if (!slideState.state) {
        setSlideState({ state: true,icon: <i className="bi bi-backspace-fill"></i> });
      }
    }
   
  function deleteImg() {
   
     if (imgsList.length !== 0) {
        let indexOfImg = imgsList.indexOf(img);
          imgsList.splice(indexOfImg, 1);
          if(indexOfImg !== 0){
           setImg(imgsList[indexOfImg - 1]);
          }
          else{ 
            if (imgsList.length !== 0) {
           setImg(imgsList[0]);
           }else{
            setImg('')
           }
        }
       }     
    }
    return (
      <div className="galery" style={{ display: "flex", flexDirection: "row" }}>
       <div className="allImg border border-5">  
        <AllImg imgsList={imgsList} targetImg={targetImg}></AllImg>
       </div>
     
        <div className="singleImg border border-5">
          <img className="bigImg" src={img.src} alt={img.alt}></img>
          <div>
            <br />
            <ButtonsGalery
              nextImg={nextImg}
              previousImg={previousImg}
              setInfintiSlide={setInfintiSlide}
              deleteImg={deleteImg}
              imgsList={imgsList}
              img={img}
              slideState={slideState}
            />
          </div>
        </div>
      </div>
    );
}