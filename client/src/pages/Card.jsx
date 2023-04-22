import React from 'react';
import ImgOne from './ImgOne';


function Card(props){
    return(
   <>
     <div className='cards'>
       <div className='card'>
          <ImgOne imgsrc={props.imgsrc}/>
          <div className='card_info'>
              <span className='card_category'>{props.title}</span>
              <br/>
              <br/>
              <a href={props.link}>
              <button className='buttonone'>Go To Page</button>
              </a>
          </div>
             
       </div>
     </div>
   
   </>
     );
   }

   export default Card;
   
   