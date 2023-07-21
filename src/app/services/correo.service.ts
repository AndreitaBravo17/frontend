/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor() { }
  // correo.service.js
const nodemailer = require('');

// Configura el transportador SMTP con los datos de tu cuenta de correo
const transporter = this.nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'europaandrea7@gmail.com', // Reemplaza con tu dirección de correo electrónico
    pass: 'Aabl161201' // Reemplaza con tu contraseña de correo electrónico
  }
});

// Función para enviar el correo electrónico
const enviarCorreo = (destinatario, asunto, contenido) => {
  const mailOptions = {
    from: 'europaandrea7@gmail.com', // Reemplaza con tu dirección de correo electrónico
    to: destinatario,
    subject: asunto,
    html: contenido
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

module.exports = enviarCorreo;

}*/
