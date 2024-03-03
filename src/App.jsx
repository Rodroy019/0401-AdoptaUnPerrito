import "./App.css";
import Header from "./componts/Header";
import MyCard from "./componts/MyCard";
import Footer from "./componts/Footer";

function App() {
  return (
    <>
      <Header />
      <section>
        <MyCard
          name="Adolfo"
          raza="Mezcla única"
          imgLink="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.expertoanimal.com%2Flas-enfermedades-mas-comunes-del-bulldog-frances-23081.html&psig=AOvVaw3Hx3TJqliYMKFc4te1Wqam&ust=1709585633204000&source=images&cd=vfe&opi=89978449&ved=https://t2.ea.ltmcdn.com/es/posts/1/8/0/las_enfermedades_mas_comunes_del_bulldog_frances_23081_600.webp"
          description="Adolfo es un perro de aspecto imponente, con un pelaje de color oscuro que recuerda al negro de la noche. Su mirada intensa podría hipnotizarte si no tienes cuidado. Tiene una postura firme y segura, como si estuviera siempre en guardia. A pesar de su apariencia seria, Adolfo tiene un lado cariñoso y leal. Es un compañero leal y protector una vez que se gana su confianza, dispuesto a defender a sus seres queridos con valentía. Sin embargo, necesita un dueño con experiencia que pueda proporcionarle estructura y disciplina. ¿Te atreves a darle una oportunidad a este can único?"
        />
        <MyCard
          name="Napoleon"
          raza="Bulldog Francés"
          description="Napoleón es un Bulldog Francés de porte regio y mirada penetrante. Con su pequeña estatura, compensa con una gran personalidad. Tiene una actitud dominante y confiada, como si estuviera siempre listo para conquistar el mundo (o al menos el sofá). Es inteligente y astuto, siempre planeando su próxima estrategia para obtener lo que quiere. A pesar de su carácter determinado, Napoleón puede ser un compañero leal y cariñoso, especialmente cuando se siente el líder de la manada."
        />
        <MyCard
          name="Putin"
          raza="Pastor Ruso"
          description="Putin es un Pastor Ruso de aspecto majestuoso, con un pelaje espeso y una mirada penetrante que parece ver a través de ti. Tiene una presencia imponente y una postura firme, como si estuviera siempre listo para proteger su territorio. Putin es un perro inteligente y leal, que valora la disciplina y el orden. Aunque puede parecer reservado al principio, una vez que te ganes su confianza, serás recompensado con una lealtad inquebrantable."
        />
        <MyCard
          name="Bush Jr"
          raza="Golden Retriever"
          description="Bush Jr. es un Golden Retriever lleno de energía y entusiasmo. Con su pelaje dorado y su cola siempre en movimiento, es imposible no contagiarse de su alegría. Tiene una personalidad amigable y extrovertida, siempre listo para hacer nuevos amigos y disfrutar de la vida al máximo. Bush Jr. es un perro inteligente y juguetón, que nunca se cansa de jugar a buscar la pelota o recibir caricias. Es el compañero perfecto para alguien que busque alegría y compañía incondicional."
        />
      </section>

      <Footer />
    </>
  );
}

export default App;
