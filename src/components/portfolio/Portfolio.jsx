import { useEffect, useState } from "react";

import "./portfolio.scss";
import {
  featuredPortfolio,
 
} from "../../data";

export default function Portfolio() {
  
  const [data, setData] = useState(featuredPortfolio);
  

  useEffect(() => {
   
        setData(featuredPortfolio);
       
    
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <h1>PROJECTS</h1>
      
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img className="myimg"
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <p>{d.about}</p>
          <button className="button1" ><h3>React.js</h3></button>
          <button className="button2"><h3>Node.js</h3></button>
          <button className="button3"><h3>Express</h3></button>
          <button className="button4"><h3>MongoDB</h3></button>
          <img className="gitf" src="assets/github.png" alt="" onClick={()=>window.open(d.frontend, "_blank")}/>
          <img className="gitb" src="assets/github.png" alt="" onClick={()=>window.open(d.backend, "_blank")}/>
          <img className="netlify" src="assets/netlify.png" alt="" onClick={()=>window.open(d.netlify, "_blank")}/>
           </div>
        ))}
      </div>
    </div>
  );
}
