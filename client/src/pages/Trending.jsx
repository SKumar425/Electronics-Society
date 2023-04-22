import React, { useState } from "react";
import ThreeColumnsOne from "../hoc/ThreeColumnsOne";
import axios from "axios";


const Trending = () => {

  const [data,setData]=useState([]);

  const getNews = ()=>{
     axios.get("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=dd0a3de656b142f7bb46d9638f463fa1")
     .then((response)=>{
        console.log(response);
        setData(response.data.articles);
     })
  }


  return (
    <>
      <ThreeColumnsOne>
        <div
          className="flex flex-col bg-white rounded-3xl shadow mb-9 p-1 cursor-pointer">
          <div className="flex flex-row rounded-3xl items-center">
            <img
              src="/assets/logo.jpg"
              alt="username here"
              className="w-12 rounded-full"
            />
            <div
              className="flex flex-col items-start justify-center ml-6"
            >
              <p className="text-gray-1000">Trending News</p>
              </div>
            
          </div>
        </div>

       
      </ThreeColumnsOne>
      <div className="pt-[64px] relative md:overflow-hidden">
      <div className="container my-3">
      <button className="btn btn-outline-info" onClick={getNews}>News</button>
      </div>

      <div className="container">
          <div className="row">
             {
               data.map((value)=>{
               
                 return(<>
                  <div className="col-4">
                  <div className="card" style={{width: "25rem"}}>
                  <img src={value.urlToImage} className="card-img-top" alt="..."/>
                  <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                 <p className="card-text">{value.description}</p>
                 <a href={value.url} className="btn btn-outline-primary">Go somewhere</a>
              </div>
            </div>
            </div>
                 </>);

               })
             }
          </div>

      </div>
    </div>
      
    </>
  );
};

export default Trending;

