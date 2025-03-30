import { NavLink } from 'react-router';
import emailjs from "@emailjs/browser";

function TelaDois() {
  const sendEmail = () => {

    const templateParams = {
      from_name: 'rayane',
      message: 'Primeiro teste',
      email: 'cavalcantirayane722@gmail.com'
    }

    //               id do email,   id do template,   objetos que defii, public key
    emailjs.send("service_nr2zexv", "template_oqlw5vf", templateParams, "aXkhGM110364V1kTb")
    .then((response) => {
      console.log("EMAI ENVIADO", response.status, response.text)
      // reset todas os campos
    }, (error) => {
      console.log("error", error)
    })
  }

  return (
    <div>
      <h1>TELA DOIS - HOME</h1>
      <NavLink to='/login-page'> HOME </NavLink>
      <button onClick={sendEmail} type="text">
        BT
      </button>
     </div>
  );
}

export default TelaDois;
