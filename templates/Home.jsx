import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

function Home() {
  const theme = useContext(ThemeContext);
  const [themeClasses, setThemeClasses] = useState('bg-stone-950 h-full');

  useEffect(() => {
    document.title = 'Home'; // Altere "Seu Nome" para o seu nome ou título desejado
  }, []);

  useEffect(() => {
    setThemeClasses(
      theme.color === 'light'
        ? 'bg-gray-800'
        : 'bg-stone-950'
    );
  }, [theme.color]);

  return (
    <>
      <Header />
      <div className={` min-h-screen flex flex-col items-center pt-20 ${themeClasses}`} >
        <div className="flex items-center justify-end">
          <div className="flex flex-col items-start">
            <div className="flex justify-center">
              <span className={`text-4xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text`}>
                Desenvolvedor Front-end
              </span>
            </div>
            <span className={`text-2xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text`}>
              Campinas, São Paulo
            </span>
            <span className={`text-4xl bg-gradient-to-r from-blue-500  to-purple-500 text-transparent bg-clip-text`}>
              Sobre Mim
            </span>
            <div className="text-white w-64">
              Meus conhecimentos principais são em ReactJS, CSS3, Git, mas também sempre com vontade e disponível para aprender novas tecnologias. Hoje estou aprendendo SQL, Docker, NodeJs, entre outras. Estou em transição de carreira, sou formado em Front-end pela Trybe e estou rumo ao fullstack.
              Experiência de 13 anos vendendo e instalando o serviço de rastreador veicular, onde apliquei muita negociação e comunicação.
            </div>
          </div>
          <Image
            src="/myphototwo.jpeg"
            alt="My Photo"
            className="rounded-full shadow-lg h-auto w-64 object-cover md:ml-6 md:order-1 mb-4 md:mb-0 mt-8"
            width={500}
            height={500}
          />
        </div>
        <div className="flex mt-10 justify-center">
          <a
            href="https://www.linkedin.com/in/pablolandimdesadev/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-2xl text-blue-500 hover:text-blue-700 mr-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
          >
            GitHub
          </a>
          <Link href="/skills" className="text-2xl text-blue-500 hover:text-blue-700">
            Skills
          </Link>
        </div>
      </div>

      <Footer />

    </>
  );
}

export default Home;
