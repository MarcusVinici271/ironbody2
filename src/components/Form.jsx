import React from 'react';
import './Form.css'; // Arquivo de estilos CSS
import whatsapp from '../image/whatsapp.png';

export default function WhatsAppButton() {
  const phoneNumber = '5521997786969'; // Número de telefone específico
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
    console.log('Abrindo o bate-papo do WhatsApp...');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
      <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" />
    </div>
  );
}
