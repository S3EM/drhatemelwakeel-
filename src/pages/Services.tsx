import { Activity, Microscope, Video, Award, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SafeImage } from "../components/SafeImage";
import MobileMenu from "../components/MobileMenu";

export default function Services({ hideNav = false }: { hideNav?: boolean } = {}) {
  return (
    <div className="w-full bg-white font-cairo text-gray-800" dir="rtl">
      {/* Navigation */}
      {!hideNav && (
      <nav className="relative flex items-center justify-between py-6 px-6 lg:px-20 bg-white border-b border-gray-50 z-50">
        
        {/* Logo Hanging Badge (Right in RTL) */}
        <div className="absolute top-0 right-6 lg:right-20 bg-[#65994A] text-white px-4 pb-5 pt-4 rounded-b-3xl flex flex-col items-center justify-center shadow-lg z-50 shadow-[#65994A]/20">
          <div className="w-[60px] h-[60px] p-1 bg-white rounded-full flex items-center justify-center mb-2 overflow-hidden shadow-sm">
            <SafeImage src="/hatem1.jpg" alt="Logo" className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-90 scale-110" />
          </div>
          <span className="font-bold text-sm whitespace-nowrap leading-tight">د. حاتم الوكيل</span>
          <span className="text-[8px] text-white/90 whitespace-nowrap mt-1 tracking-wider">استشاري طب الأطفال وحديثي الولادة</span>
        </div>

        {/* Spacer to push links next to the absolute logo */}
        <div className="w-[100px] lg:w-[120px]"></div>

        {/* Links (Center) */}
        <div className="hidden lg:flex items-center justify-center gap-8 font-bold text-[15px] flex-1">
          <Link to="/" className="text-gray-800 hover:text-[#5C964A] transition-colors">الرئيسية</Link>
          <Link to="/about" className="text-gray-800 hover:text-[#5C964A] transition-colors">من نحن</Link>
          <Link to="/services" className="text-gray-800 hover:text-[#5C964A] transition-colors relative">
            خدماتنا
            <div className="absolute -bottom-7 left-0 w-full h-[3px] bg-[#65994A] rounded-t-sm" />
          </Link>
          <Link to="/services-list" className="hover:text-[#5C964A] transition-colors">قائمة الخدمات</Link>
          <Link to="/articles" className="hover:text-[#5C964A] transition-colors">المقالات</Link>
          <Link to="/contact" className="hover:text-[#5C964A] transition-colors">اتصل بنا</Link>
        </div>

        <div className="flex items-center gap-4">
          <MobileMenu />
          {/* Action Button (Left in RTL) */}
          <Link to="/contact" className="hidden lg:block bg-[#65994A] hover:bg-[#527d3b] text-white px-8 py-2.5 rounded-full font-bold transition-colors shadow-md text-[15px]">
            احجز استشارة
          </Link>
        </div>
      </nav>
      )}

      {/* Affiliations Section */}
      <section className="relative py-14 lg:py-24 bg-[#65994A] overflow-hidden">
        {/* Subtle background overlay (simulating office background) */}
        <div className="absolute inset-0 opacity-10 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 lg:px-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 lg:mb-12">
            <span className="text-[#1D2120] block mb-2">الإنتماءات</span>
            <span className="text-white">المهنية</span>
          </h2>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-6 md:gap-12 w-full max-w-4xl mx-auto mt-8">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 text-white transition-colors">
              <ChevronRight size={32} />
            </button>
            
            <div className="flex gap-6 overflow-hidden">
               {/* Box 1 */}
               <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 border-4 border-yellow-500 shadow-inner">
                    CFMP
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold leading-tight text-center uppercase">Functional Medicine<br/>Practitioner</span>
               </div>

               {/* Box 2 */}
               <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center p-4 overflow-hidden relative group">
                  <div className="flex flex-col items-center">
                   <div className="flex gap-[1px]">
                     <div className="w-3 h-10 bg-blue-500 transform -skew-x-[20deg]" />
                     <div className="w-3 h-10 bg-blue-600 transform -skew-x-[20deg]" />
                     <div className="w-3 h-10 bg-blue-700 transform -skew-x-[20deg]" />
                     <div className="w-3 h-10 bg-blue-800 transform -skew-x-[20deg]" />
                   </div>
                   <span className="text-blue-900 font-black text-xl tracking-tight mt-1">AAAAI</span>
                  </div>
               </div>

               {/* Box 3 */}
               <div className="w-40 h-40 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 mb-2 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-[2px]" />
                  </div>
                  <span className="text-blue-900 font-black text-xl tracking-tighter">EAACI</span>
               </div>
            </div>

            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 text-white transition-colors">
              <ChevronLeft size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-20 text-center">
          
          {/* Header */}
          <span className="bg-[#EEF6EC] text-[#5C964A] px-6 py-2 rounded-full text-sm font-bold inline-block mb-4 shadow-sm border border-[#5C964A]/10 mt-6 lg:mt-0">
            لماذا تختار دكتور حاتم الوكيل
          </span>
          <h2 className="text-3xl lg:text-[35px] font-black leading-tight mb-10 lg:mb-16">
            <span className="text-[#1D2120]">ما الذى يجعلنا </span>
            <span className="text-[#65994A]">مميزين ؟</span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto text-center cursor-default">
            
            {/* Card 1 */}
            <div className="bg-[#EEF6EC] p-8 pb-12 rounded-2xl flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#65994A] mb-6 drop-shadow-sm">
                <Activity size={50} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">رعاية متطورة</h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2 font-medium">
                دمج أحدث التطورات في التكنولوجيا والطب
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EEF6EC] p-8 pb-12 rounded-2xl flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#65994A] mb-6 drop-shadow-sm">
                <Video size={50} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">الكشف داخل العيادة<br/>والاونلاين متاح</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                نوفر خدمة الكشف داخل العيادة واونلاين لضمان راحتك وتوفير الوقت واختيار الوقت المناسب لك
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EEF6EC] p-8 pb-12 rounded-2xl flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#65994A] mb-6 drop-shadow-sm">
                <Microscope size={50} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">المنهج التكاملي</h3>
              <p className="text-gray-600 text-[13px] leading-relaxed font-medium px-2">
                ربط المعرفة الطبية التقليدية بالطب الطبيعي والوظيفي من أجل منهج شامل للرعاية الجذرية
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#EEF6EC] p-8 pb-12 rounded-2xl flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#65994A] mb-6 drop-shadow-sm relative">
                <Award size={50} strokeWidth={1.5} />
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="flex text-yellow-500">★★★</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">الخبرة والتجربة</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium px-2">
                فريقنا متخصص ومدرب بخبرة أكثر من 10 سنوات
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
