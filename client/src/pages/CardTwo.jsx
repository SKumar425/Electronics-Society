import React from 'react';
import ImgOne from './ImgOne';


function CardTwo(props){
    return(
   <>
     <div className='cardsone'>
       <div className='cardone'>
          <ImgOne imgsrc={props.imgsrc}/>
          <div className='card_infoone'>
              <span className='card_categoryone'>{props.title}</span>
              <br/>
              <br/>
              <a href={props.linkpaper}>
              <button className='buttononeone'>Articles</button>
              </a>
              <br/>
              <br/>
              <a href={props.linkvideo}>
              <button className='buttononeone'>Project Video</button>
              </a>
              <br/>
              <br/>
              <a href={props.linkcomponent}>
              <button className='buttononeone'>Components</button>
              </a>
              
          </div>
             
       </div>
     </div>
   
   </>
     );
   }

   export default CardTwo;
   
   