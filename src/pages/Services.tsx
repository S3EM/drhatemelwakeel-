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
