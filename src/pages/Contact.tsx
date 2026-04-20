import { Link } from "react-router-dom";
import { MapPin, Phone, MessageSquare, Clock, Facebook, Map, Youtube, Music } from "lucide-react";
import { SafeImage } from "../components/SafeImage";
import MobileMenu from "../components/MobileMenu";

export default function Contact({ hideNav = false }: { hideNav?: boolean } = {}) {
  return (
    <div className="w-full bg-white font-cairo text-gray-800 min-h-screen" dir="rtl">
      {/* Navigation - Navbar */}
      {!hideNav && (
      <nav className="relative flex items-center justify-between py-6 px-6 lg:px-20 bg-white border-b border-gray-100 z-50 shadow-sm">
        {/* Logo Section */}
        <div className="absolute top-0 right-6 lg:right-20 bg-[#76b82a] text-white px-4 pb-5 pt-4 rounded-b-3xl flex flex-col items-center justify-center shadow-lg z-50">
          <div className="w-[60px] h-[60px] p-1 bg-white rounded-full flex items-center justify-center mb-2 overflow-hidden shadow-sm">
            <SafeImage src="/hatem1.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="font-bold text-sm whitespace-nowrap leading-tight">د. حاتم الوكيل</span>
          <span className="text-[10px] opacity-90">أخصائي طب الأطفال</span>
        </div>

        {/* Spacer to push links next to the absolute logo */}
        <div className="w-[100px] lg:w-[120px]"></div>

        {/* Links Menu */}
        <div className="hidden lg:flex items-center gap-10 flex-1 justify-center pr-20 font-bold text-[15px]">
          <Link to="/" className="text-gray-800 hover:text-[#76b82a] transition-colors">الرئيسية</Link>
          <Link to="#services" className="text-gray-800 hover:text-[#76b82a] transition-colors">خدماتنا</Link>
          <Link to="#success" className="text-gray-800 hover:text-[#76b82a] transition-colors">قصص النجاح</Link>
          <Link to="/articles" className="text-gray-800 hover:text-[#76b82a] transition-colors">المقالات</Link>
          <Link to="/contact" className="hover:text-[#76b82a] transition-colors relative text-gray-800">
            اتصل بنا
            <div className="absolute -bottom-7 left-0 w-full h-[3px] bg-[#76b82a] rounded-t-sm" />
          </Link>
        </div>

        <div className="flex items-center gap-4 z-50">
          <MobileMenu />
          <Link to="/contact" className="hidden lg:block bg-[#76b82a] hover:bg-[#649c23] text-white px-8 py-2.5 rounded-full font-bold transition-colors shadow-md text-[15px]">
            احجز استشارة
          </Link>
        </div>
      </nav>
      )}

      {/* Main Content Area */}
      <section className="contact-section w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start overflow-hidden">
        
        {/* Right Column: Contact Details */}
        <div className="contact-info flex flex-col text-right order-1 lg:order-1 relative mb-10 lg:mb-0">
          
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#5C964A]/5 rounded-full blur-3xl -z-10"></div>

          <div className="flex justify-end mb-4 md:mt-8 mt-4 lg:mt-0">
            <span className="bg-[#EAF5F0] text-[#5C964A] px-5 py-2 rounded-full text-[13px] lg:text-[14px] font-bold">
              تواصل معنا الآن
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3F35] mb-4 lg:mb-5 leading-tight text-center lg:text-right">
            يسعدنا التواصل معكم
          </h2>
          <p className="text-gray-500 mb-6 lg:mb-8 max-w-sm mx-auto lg:mr-0 lg:ml-auto leading-relaxed text-[15px] lg:text-[16px] font-medium text-center lg:text-right px-2 lg:px-0">
            واستقبال مقترحاتكم وبحث فرص التعاون.. هل أنت مستعد لكتابة قصتك الصحية من جديد؟
          </p>

          <address className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-italic">
            {/* Address Item */}
            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col gap-3">
              <div className="bg-[#EAF5F0] p-3 rounded-full w-fit self-end"><MapPin className="text-[#5C964A]" size={22} /></div>
              <div className="text-right">
                <span className="block text-gray-900 font-bold text-lg mb-1">العنوان</span>
                <p className="text-gray-500 text-[14px]">أبو زعبل البلد</p>
              </div>
            </div>

            {/* Egypt Phones Item */}
            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col gap-3">
              <div className="bg-[#EAF5F0] p-3 rounded-full w-fit self-end"><Phone className="text-[#5C964A]" size={22} /></div>
              <div className="text-right">
                <span className="block text-gray-900 font-bold text-lg mb-1">عيادة مصر</span>
                <a href="tel:+201006393466" className="text-gray-500 text-[15px] hover:text-[#5C964A] transition-colors inline-block" dir="ltr">+20 100 639 3466</a>
              </div>
            </div>

            {/* Working Hours Item */}
            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col gap-3">
              <div className="bg-[#EAF5F0] p-3 rounded-full w-fit self-end"><Clock className="text-[#5C964A]" size={22} /></div>
              <div className="text-right">
                <span className="block text-gray-900 font-bold text-lg mb-1">مواعيد العمل</span>
                <p className="text-gray-500 text-[14px]">السبت - الخميس <span className="text-[#e74c3c] font-medium">(الإثنين إجازة)</span></p>
                <p className="text-gray-500 text-[14px]">6:00 م - 11:00 م</p>
              </div>
            </div>
          </address>

          {/* Map & Socials */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
            <a href="https://maps.app.goo.gl/4SpCumxJWBmZuHHD9" target="_blank" rel="noopener noreferrer" className="flex-1 w-full bg-gray-50 rounded-[20px] h-20 relative overflow-hidden border border-gray-100 group cursor-pointer flex items-center justify-center hover:bg-gray-100 transition-colors">
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="flex items-center gap-2 text-[#5C964A] font-bold z-10 group-hover:scale-105 transition-transform">
                <Map size={20} />
                <span>عرض على الخريطة</span>
              </div>
            </a>

            <div className="flex items-center justify-between sm:justify-start gap-4 md:gap-6 w-full mt-4 border-t border-gray-100 pt-6">
              <a href="https://www.facebook.com/share/1CUQuzh1Mc/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:bg-[#EAF5F0] transition-all duration-300 hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="https://www.tiktok.com/@drhatemelwakeel" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#EAF5F0] transition-all duration-300 hover:scale-110">
                <Music size={24} />
              </a>
              <a href="https://youtube.com/@drhelwakeel" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#FF0000] hover:bg-[#EAF5F0] transition-all duration-300 hover:scale-110">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Left Column: Form Card */}
        <div className="w-full flex justify-center lg:justify-start order-2 lg:order-2">
          <form action="https://formsubmit.co/hagageslam430@gmail.com" method="POST" className="contact-form-card bg-[#f6f7f6] rounded-[24px] p-6 sm:p-8 md:p-10 w-full max-w-lg text-right shadow-sm border border-gray-50">
            {/* FormSubmit Config */}
            <input type="hidden" name="_subject" value="رسالة جديدة من الموقع الإلكتروني" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contact` : 'https://your-domain.com'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-[#a5ada7] text-[13px] font-bold mb-2">الاسم **</label>
                <input id="name" name="name" type="text" required className="w-full h-[48px] px-4 rounded-[10px] border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#76b82a]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#a5ada7] text-[13px] font-bold mb-2">البريد الإلكتروني **</label>
                <input id="email" name="email" type="email" required className="w-full h-[48px] px-4 rounded-[10px] border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#76b82a]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#a5ada7] text-[13px] font-bold mb-2">الهاتف **</label>
                <input id="phone" name="phone" type="tel" required className="w-full h-[48px] px-4 rounded-[10px] border-none shadow-sm bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#76b82a]" />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="subject" className="block text-[#a5ada7] text-[13px] font-bold mb-2">الموضوع</label>
              <input id="subject" name="subject" type="text" className="w-full h-[48px] px-4 rounded-[10px] border-none shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#76b82a]" />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-[#a5ada7] text-[13px] font-bold mb-2">الرسالة</label>
              <textarea id="message" name="message" required rows={4} className="w-full p-4 rounded-[10px] border-none shadow-sm bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#76b82a]"></textarea>
            </div>

            <div className="flex justify-start">
              <button type="submit" className="bg-[#76b82a] hover:bg-[#649c23] text-white px-12 py-3 rounded-[10px] font-bold text-[15px] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#76b82a]">
                ارسال
              </button>
            </div>
          </form>
        </div>

      </section>
    </div>
  );
}