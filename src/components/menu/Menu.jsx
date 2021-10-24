import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">HOME</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#skill">SKILL</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">PROJECT</a>
        </li>
        </ul>
    </div>
  );
}
