import Header from '../components/Header';
import Footer from '../components/Footer';
import FormUpload from '../components/FormUpload';

export default function DiagnosticoImagem() {
  return (
    <div>
      <Header />
      <main>
        <h1>Diagnóstico por Imagem</h1>
        <p>Envie uma foto do seu veículo para diagnóstico.</p>
        <FormUpload tipo="imagem" />
      </main>
      <Footer />
    </div>
  );
}