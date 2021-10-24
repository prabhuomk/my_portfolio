import "./intro.scss";


export default function Intro() {
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Prabhakaran </h1>
          <h3>
            Full Stack Developer
            
          </h3>
          <h4 className="ouate"> According to Albert Einstein: “A clever person solves a problem; a wise person avoids it.”  </h4>
          <p>  I always prefer to be a a wise person  </p>
          
         <button onClick={()=>window.open("https://drive.google.com/file/d/16H_0tPatQjujp7YuXCVUhsbjyv4ejxWA/view?usp=sharing", "_blank")} >MY RESUME</button>
        </div>
        
      </div>
    </div>
  );
}
