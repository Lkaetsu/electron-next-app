import styles from "@/pages/index.module.css";
import { useState } from 'react';

export default function Signup() {
  const [address, setAddress] = useState({});

  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/, '');
    if (cep.length !== 8) {
      return;
    }
  
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setAddress(data);
  };

  return (
    <div>
      <form>
        <label>
          Nome:
          <input type="text" defaultValue="nome" required /> <br/>
        </label>
        <label>
          Email:
          <input type="email" defaultValue="example@gmail.com" required /> <br/>
        </label>
        <label>
          CEP:
          <input type="cep" required onBlur={checkCEP} /> <br/>
        </label>
        <label>
          Rua:
          <input type="text" value={address.logradouro || ''} required /> <br/>
        </label>
        <label>
          Bairro:
          <input type="text" value={address.bairro || ''} required /> <br/>
        </label>
        <label>
          Cidade:
          <input type="text" value={address.localidade || ''} required /> <br/>
        </label>
        <label>
          Estado:
          <input type="text" value={address.uf || ''} required /> <br/>
        </label>
        <label>
          Senha:
          <input type="password" required /> <br/>
        </label>
        <input type="submit" value="Criar conta" />
      </form>
    </div>
  );
}