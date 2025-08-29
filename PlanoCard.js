import styles from '../styles/PlanoCard.module.css';

export default function PlanoCard({ plano, preco, cor }) {
  return (
    <div className={styles.card} style={{ borderColor: cor }}>
      <h3>{plano}</h3>
      <p>R$ {preco}</p>
      <button style={{ backgroundColor: cor }}>Assinar / Comprar</button>
    </div>
  );
}