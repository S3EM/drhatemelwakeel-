import { Baby, Facebook, Instagram, Youtube, Ghost, Music } from "lucide-react";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import ServicesList from "./ServicesList";
import Articles from "./Articles";
import Contact from "./Contact";
import { SafeImage } from "../components/SafeImage";
import MobileMenu from "../components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-cairo bg-base text-text-main flex flex-col">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 py-3 lg:py-5 px-4 lg:px-16 bg-white/95 backdrop-blur-md border-b z-[100] shadow-sm transition-all" style={{ borderColor: 'rgba(107, 142, 35, 0.1)' }}>
        <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="flex items-center justify-center text-primary gap-1 sm:gap-2">
              <Baby className="w-6 h-6 lg:w-8 lg:h-8" />
              <span className="font-bold text-[18px] lg:text-2xl leading-tight text-primary">د. حاتم الوكيل</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
            <Link to="/" className="text-primary font-bold transition-colors">الرئيسية</Link>
            <Link to="/about" className="text-text-main hover:text-primary transition-colors">من نحن</Link>
            <Link to="/services" className="text-text-main hover:text-primary transition-colors">خدماتنا</Link>
            <Link to="/services-list" className="text-text-main hover:text-primary transition-colors">قائمة الخدمات</Link>
            <Link to="/articles" className="text-text-main hover:text-primary transition-colors">المقالات</Link>
            <Link to="/contact" className="text-text-main hover:text-primary transition-colors">اتصل بنا</Link>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <MobileMenu />
            <Link to="/contact" className="hidden lg:block bg-primary hover:scale-105 text-white px-8 py-2.5 rounded-full font-semibold transition-transform shadow-md" style={{ boxShadow: '0 10px 20px rgba(107, 142, 35, 0.2)' }}>
              احجز استشارة
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 flex-1 flex flex-col pt-24 lg:pt-32 pb-10 lg:pb-0">
        {/* Hero Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Text Content (Right side in RTL) */}
          <div className="flex justify-center items-center lg:items-start flex-col gap-5 lg:gap-6 order-2 lg:order-1 text-center lg:text-right mt-4 lg:mt-0">
            <div className="bg-white border border-black/5 px-4 lg:px-6 py-1.5 lg:py-2 rounded-full inline-block shadow-sm">
              <span className="font-semibold text-[14px] lg:text-lg text-primary">أخصائي طب الأطفال وحديثي الولادة</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-primary">
              عيادات دكتور <br />
              <span className="text-primary mt-1 lg:mt-2 block">حاتم الوكيل</span>
            </h1>

            <p className="text-[16px] md:text-xl text-text-main leading-relaxed max-w-2xl px-2 lg:px-0 opacity-90 mx-auto lg:mx-0">
              تقدم نهجا مميزا ومختلف لعلاج طيف التوحد وفرط الحركه وتشتت الانتباه والفيبروميالجا والحساسية وحساسية الأطفال والكبار
            </p>

            <Link to="/contact" className="bg-primary hover:scale-105 text-white px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-bold text-[16px] lg:text-lg transition-transform mt-2 lg:mt-4 inline-block shadow-md" style={{ boxShadow: '0 10px 20px rgba(107, 142, 35, 0.2)' }}>
              احجز استشارة الآن
            </Link>
          </div>

          {/* Doctor Image (Left side in RTL) */}
          <div className="h-full flex items-center justify-center relative order-1 lg:order-2 py-6 lg:py-20 w-full max-w-sm mx-auto lg:max-w-none">
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center rounded-full overflow-hidden shadow-xl border-8 border-white bg-white">
              <SafeImage 
                src="/hatem1.jpg" 
                alt="دكتور حاتم الوكيل" 
                className="w-[105%] max-w-[105%] h-full object-cover scale-[1.05] hover:scale-[1.1] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <About hideNav={true} />
      <Services hideNav={true} />
      <ServicesList hideNav={true} />
      <Articles hideNav={true} />
      <Contact hideNav={true} />

    </div>
  );
}
