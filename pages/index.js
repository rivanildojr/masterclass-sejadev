import Header from "../components/Header";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <main className="content">
        <Calculator />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
