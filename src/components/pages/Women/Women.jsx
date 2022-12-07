import './Women.css'
import {useEffect} from "react";
  
  

function Women() {
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response.json())
    .then(json => console.log(json))
    }, []);

  return (
    <div className="Women">
      <h1>Category Name</h1>
        <div className='boxes'>
              <div className="box">
                o
              </div>
              <div className="box">
                o
                </div>
                <div className="box">
                o
                </div>
                <div className="box">
                0
                </div>
                <div className="box">
                0
                </div>
                <div className="box">
                0
                </div>
        </div>
  
    </div>
  )
}

export default Women