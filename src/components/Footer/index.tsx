import SocialLinks from '../SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div className="w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-24 mb-3" src="/images/logo.png" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Batan.TV es la plataforma OTT de video on line y televisión en vivo
            de la Cooperativa Batan donde podrás disfrutar de un amplio catálogo
            de contenidos originales de producidos por nuestra ciudad y
            alrededores.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              PRODUCTOS
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="http://www.ecolan.com/"
                >
                  Ecolan
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="http://www.caraludme.edu.ar/"
                >
                  Caraludme
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800">Ecodev</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-2">
              LINK UTILES
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800" href="">
                  Mi Cuenta
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800" href="">
                  Suscripción
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800" href="">
                  Ayuda
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-2">
              CONTACTOS
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800">
                  Julian Rios 4215 - Batan
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800">
                  info@batan.coop
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-600 hover:text-gray-800">
                  + 223 464 3000
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Copyright - Batan.tv
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
