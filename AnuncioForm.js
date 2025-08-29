import styles from '../styles/AnuncioForm.module.css';

export default function AnuncioForm() {
  return (
    <form className={styles.form}>
      <input placeholder="Título do anúncio" />
      <input placeholder="Descrição" />
      <input placeholder="Preço" />
      <button type="submit">Publicar</button>
    </form>
  );
}