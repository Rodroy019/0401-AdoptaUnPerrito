import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componts/Header";
import MyCard from "./componts/MyCard";
import Footer from "./componts/Footer";

function App() {
  return (
    <>
      <Header />
      <section>
        <MyCard />
      </section>
      <Footer />
    </>
  );
}

export default App;
