import Image from "next/image";

/////Images
import Service1 from "@/public/images/Service1.png";
import Service2 from "@/public/images/Service2.png";
import Service3 from "@/public/images/Service3.png";
import Service4 from "@/public/images/Service4.png";
import Service5 from "@/public/images/Service5.png";
import Service from "./Service";
/////Images

const services = [
  {
    title: "Cirurgias Avançadas",
    upperTitle: "Nossos Serviços",
    paragraph:
      "Os dentistas usam técnicas e ferramentas especiais para realizar cirurgias menos dolorosas e que ajudam você a se recuperar mais rapidamente.",
    image: Service1,
  },
  {
    title: "Próteses dentária",
    upperTitle: "Nossos Serviços",
    paragraph:
      "Próteses dentárias são dispositivos protéticos feitos sob medida que são usados para substituir dentes perdidos ou danificados. Nos utilizam técnicas avançadas e tecnologia moderna para projetar e fabricar próteses dentárias de alta qualidade, que se encaixam confortavelmente na boca do paciente e parecem naturais:",
    image: Service2,
  },
  {
    title: "Ortodontia",
    upperTitle: "Nossos Serviços",
    paragraph:
      "Ortodontia é uma especialidade odontológica que corrige o alinhamento de dentes e ossos maxilares mal posicionados. Para um processo mais eficiente, nos trabalhamos com as seguintes tecnologias:",
    image: Service3,
  },
  {
    title: "Tratamento de Canal",
    upperTitle: "Nossos Serviços",
    paragraph:
      "canal dentário é um procedimento que consiste na retirada da polpa do dente, um tecido encontrado na parte interna da raiz. Geralmente, ele é indicado quando existe uma cárie em processo avançado e que já causou danos na polpa dentária.",
    image: Service4,
  },
  {
    title: "Tratamentos Estéticos",
    upperTitle: "Nossos Serviços",
    paragraph:
      "Oferecemos diversos tratamentos estéticos para deixar o seu sorriso perfeito:",
    image: Service5,
  },
];

export default function Services() {
  return (
    <>
      {services.map((service, key) => (
        <Service {...service} reversed={key % 2 !== 0} key={key} />
      ))}
    </>
  );
}
