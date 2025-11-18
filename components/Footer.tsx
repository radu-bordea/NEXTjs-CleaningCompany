import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="bg-neutral-800/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 shadow-2xl shadow-neutral-900/20 text-white">
      {/* Container  */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container  */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu & Logo Container  */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* Logo  */}
            <div className="h-8 text-2xl md:ml-3">CleaningForYou</div>
            {/* Menu Container  */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 2 */}
              <div className="h-10 group">
                <a href="mailto:andreea@gmail.com">andreea@gmail.com</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>

              {/* Item 3 */}
              <div className="h-10 group">
                <a href="tel:+40722345531">+40 0722 345 531</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Social & Copy Container  */}
        <div className="flex flex-col items-start justify-between space-y-4">
          {/* icons Container  */}
          <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
            {/* Icon 1  */}
            <div className="h-8 group">
              <a href="https://www.facebook.com/">
                <FaFacebook className="h-6 text-2xl text-blue-700 hover:text-blue-800" />
              </a>
            </div>
            {/* Icon 2  */}
            <div className="h-8 group">
              <a href="https://www.instagram.com/">
                <FaInstagram className="h-6 text-2xl text-pink-700 hover:text-pink-800" />
              </a>
            </div>
          </div>

          {/* Copy  */}
          <div className="font-bold mx-auto md:mx-0">
            &copy; 2025 Servicii Curatenie. Toate drepturile rezervate
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
