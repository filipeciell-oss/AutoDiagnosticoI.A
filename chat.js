import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatGPT from '../components/ChatGPT';

export default function Chat() {
  return (
    <div>
      <Header />
      <main>
        <h1>Chat de Dúvidas Mecânicas</h1>
        <ChatGPT />
      </main>
      <Footer />
    </div>
  );
}