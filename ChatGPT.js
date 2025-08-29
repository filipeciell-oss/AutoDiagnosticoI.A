import { useState } from 'react';
import styles from '../styles/ChatGPT.module.css';

export default function ChatGPT() {
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const enviarMensagem = async (e) => {
    e.preventDefault();
    setResposta("Resposta automática (substituir pelo GPT real)");
  }

  return (
    <div className={styles.chat}>
      <form onSubmit={enviarMensagem}>
        <input value={mensagem} onChange={e => setMensagem(e.target.value)} placeholder="Digite sua dúvida..." />
        <button type="submit">Enviar</button>
      </form>
      <div className={styles.resposta}>{resposta}</div>
    </div>
  );
}