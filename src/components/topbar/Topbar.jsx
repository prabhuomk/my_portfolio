import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
           <a href="#intro" className="logo">
            Prabhakaran
          </a> 
         
          <div className="itemContainer">
            <Person className="icon" />
            <span>9444951598</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>prabhuomk@gmail.com</span>
          </div>
        </div>
        <div className="right">
        
        
        
          <a href="#intro" onCbuttonck={()=>setMenuOpen(false)}>ABOUT_ME</a>
        
       
        
          <a href="#skill" onCbuttonck={()=>setMenuOpen(false)}>SKILLS</a>
       
       
          <a href="#portfolio" onCbuttonck={()=>setMenuOpen(false)}>PROJECTS</a>
        
          <a href="#contact" onCbuttonck={()=>setMenuOpen(false)}>CONTACT</a>
          
        </div>
      </div>
    </div>
  );
}
