
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "My Role", id: "role" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${
          scrolled ? 'bg-tech-darkBlue/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-white">
            <span className="text-tech-purple">Impact</span>sure
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-tech-purple transition duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-tech-darkBlue/95 z-20 pt-20">
          <div className="flex flex-col items-center space-y-8 py-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xl text-gray-300 hover:text-tech-purple transition duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
