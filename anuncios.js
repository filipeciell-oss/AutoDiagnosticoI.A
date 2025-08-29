import Header from '../components/Header';
import Footer from '../components/Footer';
import AnuncioForm from '../components/AnuncioForm';

export default function Anuncios() {
  return (
    <div>
      <Header />
      <main>
        <h1>Área de Anúncios</h1>
        <AnuncioForm />
      </main>
      <Footer />
    </div>
  );
}