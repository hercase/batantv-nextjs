import SocialLinks from '../SocialLinks';

const Header: React.FC = () => {
  return (
    <header className="text-gray-700 body-font shadow">
      <div className="container mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <img className="w-40 mr-2" src="/images/logo.png" alt="Logo" />
          <img
            className="w-8 animate-pulse"
            src="/images/live.svg"
            alt="Logo"
          />
        </a>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
