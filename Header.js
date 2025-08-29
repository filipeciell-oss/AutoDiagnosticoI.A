import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>AutoDiag</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/planos">Planos</a>
        <a href="/diagnostico-imagem">Imagem</a>
        <a href="/diagnostico-som">Som</a>
        <a href="/chat">Chat</a>
        <a href="/anuncios">Anúncios</a>
        <a href="/biblioteca">Biblioteca</a>
        <a href="/doacoes">Doações</a>
      </nav>
    </header>
  );
}