import styles from '../styles/FormUpload.module.css';

export default function FormUpload({ tipo }) {
  return (
    <form className={styles.form}>
      <input type="file" accept={tipo === 'imagem' ? 'image/*' : 'audio/*'} />
      <button type="submit">Enviar</button>
    </form>
  );
}