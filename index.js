import Header from '../components/Header';
import Footer from '../components/Footer';
import PlanoCard from '../components/PlanoCard';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Bem-vindo ao AutoDiag</h1>
        <p>Diagnóstico rápido de veículos por imagem e som (em treinamento).</p>
        <section>
          <h2>Planos</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <PlanoCard plano="Grátis" preco="0" cor="#0066FF"/>
            <PlanoCard plano="Avulso" preco="9.99" cor="#FF6600"/>
            <PlanoCard plano="Premium" preco="59.99" cor="#0066FF"/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}