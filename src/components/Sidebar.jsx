import { useState } from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button className="toggle-btn" onClick={toggleMenu}>
        {isOpen ? "Fechar" : "Abrir"} Menu
      </button>
      <ul className="menu">
        <li className="item"><a className="item" href="#">Inicio</a></li>
        <li className="item"><a className="item" href="#">Espaço</a></li>
        <li className="item"><a className="item" href="#">Planos</a></li>
        <li className="item"><a className="item" href="#">Endereço</a></li>
        <li className="item"><a className="item" href="#">Contato</a></li>   
      </ul>
    </div>
  );
};

export default Sidebar;
