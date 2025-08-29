import Header from '../components/Header';
import Footer from '../components/Footer';
import FormUpload from '../components/FormUpload';

export default function DiagnosticoSom() {
  return (
    <div>
      <Header />
      <main>
        <h1>Diagnóstico por Som</h1>
        <p>Funcionalidade em treinamento. Apenas upload de áudio.</p>
        <FormUpload tipo="audio" />
      </main>
      <Footer />
    </div>
  );
}