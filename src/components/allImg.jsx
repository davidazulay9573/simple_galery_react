

export function AllImg (props){   
    return    <>  
    {props.imgsList.map((img) => (
         <div onClick={() => props.targetImg(img)} key={img.id}>
           <img className="smallImg" src={img.src} alt={img.alt} key={img.id} />
         </div>
       ))}
    </>;
  
}