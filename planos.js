import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanoCard from '../components/PlanoCard';

export default function Planos() {
  return (
    <div>
      <Header />
      <main>
        <h1>Nossos Planos</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <PlanoCard plano="Grátis" preco="0" cor="#0066FF"/>
          <PlanoCard plano="Avulso" preco="9.99" cor="#FF6600"/>
          <PlanoCard plano="Premium" preco="59.99" cor="#0066FF"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}