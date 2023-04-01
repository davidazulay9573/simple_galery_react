import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import {Galery}from "./components/galery";

function App() {
  return (
    <div className="App">
    
      <Galery imgsList={imgsList}></Galery>
    </div>
  );
} 

const imgsList = [
  {
    src: "https://th.bing.com/th/id/R.dd8d24967dcdc2f2c853e0d0b071a75f?rik=lvOCWQIamgMOcA&riu=http%3a%2f%2fimages.freeimages.com%2fimages%2fsmall-previews%2fc16%2firan-khouzestan-1637495.jpg&ehk=%2bJvk7tBMjUCGzEWjd4Upt75kwRHHcLzcFkrWfDPpIp0%3d&risl=&pid=ImgRaw&r=0",
    alt: "lll",
    id: "12",
  },
  {
    src: "https://lifehacks.co.il/wp-content/uploads/2015/02/%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%99%D7%A4%D7%95%D7%AA-10.jpg",
    alt: "lll",
    id: "2",
  },
  {
    src: "https://www.dailyliberal.com.au/images/transform/v1/crop/frm/9nQYdrBHQxDB6mMpJRZdp8/056a444c-0602-4746-9e0c-62a9b007e4b9.JPG/r0_0_4032_3024_w1200_h678_fmax.jpg",
    alt: "lll",
    id: "3",
  },
  {
    src: "https://th.bing.com/th/id/OIP.lQTpqCJOdTcpohiTWJKjkQHaD4?pid=ImgDet&rs=1",
    alt: "lll",
    id: "4",
  },
  {
    src: "https://i.pinimg.com/originals/73/43/81/7343819a847d2c6442c3f4372c79214d.jpg",
    alt: "lll",
    id: "5",
  },
  {
    src: "https://image.slidesharecdn.com/presentacin1animales12275295157342188-1227531223164299-8/95/-4-728.jpg?cb=1227508433",
    alt: "lll",
    id: "6",
  },
  {
    src: "https://www.photo-art.co.il/wp-content/uploads/2015/07/IMG_7877.jpg",
    alt: "lll",
    id: "7",
  },
  {
    src: "https://th.bing.com/th/id/R.6cfa44b0f85e89c22de275318099a421?rik=S9lcMDFEBBh0nQ&riu=http%3a%2f%2fwww.lifehacks.co.il%2fwp-content%2fuploads%2f2015%2f02%2f%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA-%D7%99%D7%A4%D7%95%D7%AA-8.jpg&ehk=Bo4sXLHbSi6sNbzJP8CHTIfgkmHehnWZj1nuGfNqm4o%3d&risl=&pid=ImgRaw&r=0",
    alt: "lll",
    id: "8",
  },
];

export default App;
