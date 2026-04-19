import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // highlight active link
  const isActive = (path: string) => {
    return location.pathname === path ? "text-[#5C964A] bg-gray-50" : "text-gray-800";
  };

  // prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-[#5C964A] p-2 hover:bg-gray-100 rounded-full transition-colors relative z-[101]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[80px] w-full h-[calc(100vh-80px)] bg-white z-[100] flex flex-col px-6 py-8 overflow-y-auto shadow-2xl">
          <div className="flex flex-col gap-4">
            <Link to="/" className={`py-4 px-4 rounded-xl font-bold text-xl transition-colors ${isActive('/')}`} onClick={() => setIsOpen(false)}>الرئيسية</Link>
            <Link to="/about" className={`py-4 px-4 rounded-xl font-bold text-xl transition-colors ${isActive('/about')}`} onClick={() => setIsOpen(false)}>من نحن</Link>
            <Link to="/services" className={`py-4 px-4 rounded-xl font-bold text-xl transition-colors ${isActive('/services')}`} onClick={() => setIsOpen(false)}>خدماتنا</Link>
            <Link to="/services-list" className={`py-4 px-4 rounded-xl font-bold text-xl transition-colors ${isActive('/services-list')}`} onClick={() => setIsOpen(false)}>قائمة الخدمات</Link>
            <Link to="/articles" className={`py-4 px-4 rounded-xl font-bold text-xl transition-colors ${isActive('/articles')}`} onClick={() => setIsOpen(false)}>المقالات</Link>
            <Link to="/contact" className={`py-4 px-4 rounded-xl font-bold text-xl transition-colors ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>اتصل بنا</Link>
          </div>
          
          <div className="mt-auto pt-8 pb-10">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-[#5C964A] hover:bg-[#4a7a3b] text-white px-8 py-4 rounded-xl font-bold text-lg text-center block w-full shadow-lg transition-transform hover:scale-[1.02]">
              احجز استشارة
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
