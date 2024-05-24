import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import logo from '../image/logo.png';

export default function Menu() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false);
  };

  useEffect(() => {
    function handleResize() {
      setLarguraJanela(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickForaMenu(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAtivo(false);
      }
    }

    document.addEventListener('mousedown', handleClickForaMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickForaMenu);
    };
  }, []);

  return (
    <div>
      <img src={logo} alt='logo' className={`logo ${menuAtivo ? 'hidden' : ''}`} />
      {larguraJanela <= 700 && (
        <div className={`menu-toggle ${menuAtivo ? 'active' : ''}`} onClick={toggleMenu}>
          ☰
        </div>
      )}
      <nav ref={menuRef} className={`menu ${menuAtivo ? 'active' : ''}`}>
        {larguraJanela <= 700 && (
          <div className="fechar-menu" onClick={fecharMenu}>
            <span>&times;</span>
          </div>
        )}
        <ul>
          <li className="item"><a href="#">Inicio</a></li>
          <li className="item"><a href="#">Espaço</a></li>
          <li className="item"><a href="#">Planos</a></li>
          <li className="item"><a href="#">Endereço</a></li>
          <li className="item"><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
}
