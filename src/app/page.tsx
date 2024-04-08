import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Modal from "@/components/layout/Modal";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Modal title="We are Fstvl Stage" desc="Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s." />
      <Modal title="Circoloco" desc="Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s." />
      <Modal title="Solid Grooves" desc="Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s." />
    </>
  );
}
