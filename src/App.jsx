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
          imgLink="https://cdn.colombia.com/sdi/2020/06/30/sindrome-perro-azul-curiosa-y-terrible-enfermedad-canes-841445.webp"
          description="Adolfo es un perro de aspecto imponente, con un pelaje de color oscuro. Su mirada intensa podría hipnotizarte si no tienes cuidado. Tiene una postura firme y segura. A pesar de su apariencia seria, Adolfo tiene un lado cariñoso y leal. Es un compañero leal y protector una vez que se gana su confianza. ¿Te atreves a darle una oportunidad?"
        />
        <MyCard
          name="Napoleon"
          raza="Bulldog Francés"
          imgLink="https://t2.ea.ltmcdn.com/es/posts/1/8/0/las_enfermedades_mas_comunes_del_bulldog_frances_23081_600.webp"
          description="Napoleón es un Bulldog Francés de porte regio y mirada penetrante. Con su pequeña estatura, compensa con una gran personalidad. Tiene una actitud dominante y confiada, como si estuviera siempre listo para conquistar el mundo. Es inteligente y astuto, siempre planeando su próxima estrategia para obtener lo que quiere. Napoleón puede ser un compañero leal y cariñoso"
        />
        <MyCard
          name="Putin"
          raza="Pastor Ruso"
          imgLink="https://fello.pet/wp-content/uploads/2022/03/South-Russian-Ovcharka-1.jpg"
          description="Putin es un Pastor Ruso de aspecto majestuoso, con un pelaje espeso y una mirada penetrante. Tiene una presencia imponente y una postura firme, como si estuviera siempre listo para proteger su territorio. Putin valora la disciplina y el orden. Aunque puede parecer reservado al principio, una vez que te ganes su confianza, serás recompensado con una lealtad inquebrantable."
        />
        <MyCard
          name="Bush Jr"
          raza="Golden Retriever"
          imgLink="https://media.graphassets.com/resize=height:404,width:1280/output=format:webp/dA0SghvARzmRh4PNCMDx?width=1280"
          description="Bush Jr. es un Golden Retriever lleno de energía y entusiasmo. Con su pelaje dorado. Bush Jr. es un perro inteligente y juguetón, que nunca se cansa de jugar o recibir caricias. Es el compañero perfecto para alguien que busque alegría y compañía incondicional."
        />
      </section>

      <Footer />
    </>
  );
}

export default App;
