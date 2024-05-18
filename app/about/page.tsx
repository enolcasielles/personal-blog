import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-4xl mb-8 tracking-tighter">Sobre mí</h1>
      <div className="h-[1px] bg-gray-500 mb-8"></div>
      <div className="flex gap-8 flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col gap-2 items-center w-[250px]">
          <Image width={150} height={150} alt="enol-photo" src="/ec-photo.png" className="rounded-full" />
          <span className="font-semibold text-xl">Enol Casielles</span>
          <span className="font-light text-md prose prose-neutral dark:prose-invert">Desarrollador Web</span>
        </div>
        <div>
          <p className="prose prose-neutral dark:prose-invert mb-4">
          Soy un desarrollador web con más de 10 años de experiencia, muy ligado al mundo de las startups, donde he fundado y sacado adelante proyectos como <a href="https://www.mooviment.com" target="_blank">mooviment.com</a>. Me apasiona estar siempre al tanto de lo último en tecnología, nunca dejo de aprender y buscar cómo mejorar lo que hago.
          </p>
          <p className="prose prose-neutral dark:prose-invert mb-4">
          Soy un techy de corazón y sigo explorando nuevas áreas que me permitan seguir creciendo profesionalmente y elevar el nivel de los proyectos que emprendo.          </p>
        </div>
      </div>
    </section>
  );
}
