import { Facebook, Instagram, Music, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { SafeImage } from "../components/SafeImage";
import MobileMenu from "../components/MobileMenu";

export default function About({ hideNav = false }: { hideNav?: boolean } = {}) {
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
        <div className="hidden lg:flex items-center justify-center gap-8 font-bold text-gray-800 text-[15px] flex-1">
          <Link to="/" className="text-gray-800 hover:text-[#5C964A] transition-colors">الرئيسية</Link>
          <Link to="/about" className="text-gray-800 hover:text-[#5C964A] transition-colors relative">
            من نحن
            <div className="absolute -bottom-7 left-0 w-full h-[3px] bg-[#65994A] rounded-t-sm" />
          </Link>
          <Link to="/services" className="hover:text-[#5C964A] transition-colors">خدماتنا</Link>
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

      {/* Hero Header section */}
      <section className="pt-24 pb-8 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <span className="bg-[#EEF6EC] text-[#5C964A] px-6 py-2 rounded-full text-sm font-bold inline-block mb-3 shadow-sm border border-[#5C964A]/10">
            تعرف على
          </span>
          <h2 className="text-[40px] md:text-[50px] font-black text-[#1D2120] leading-tight">
            دكتور <br />
            <span className="text-[#5C964A] text-[65px] md:text-[90px] mt-0 block font-black">حاتم الوكيل</span>
          </h2>
        </div>
      </section>

      {/* About Description + Images */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content Block (Visual Right Side -> order-1 in RTL) */}
            {/* Text Content Block (Visual Right Side -> order-1 in RTL) */}
            <div className="flex items-center justify-between lg:pr-10 lg:order-1 order-2">
              <div className="flex-1">
                <ul className="space-y-6 list-none text-right">
                  <li className="flex items-start gap-4 text-justify">
                    <div className="w-1.5 h-1.5 mt-3 rounded-full bg-gray-400 shrink-0" />
                    <p className="text-[#656A69] font-medium text-[15.5px] leading-relaxed">استشاري في مجال طب الأطفال وحديثي الولادة، يتمتع بخبرة واسعة في القطاعين الخاص والعام، حيث مارس الطب السريري.</p>
                  </li>
                  <li className="flex items-start gap-4 text-justify">
                    <div className="w-1.5 h-1.5 mt-3 rounded-full bg-gray-400 shrink-0" />
                    <p className="text-[#656A69] font-medium text-[15.5px] leading-relaxed">ممارس للطب الوظيفي، يستخدم الطب الوظيفي لمساعدتك في إيجاد حلول لسبب مرضك والاختلالات الغذائية والكيميائية الحيوية التي قد تُسبب لك المرض.</p>
                  </li>
                  <li className="flex items-start gap-4 text-justify">
                    <div className="w-1.5 h-1.5 mt-3 rounded-full bg-gray-400 shrink-0" />
                    <p className="text-[#656A69] font-medium text-[15.5px] leading-relaxed">متخصص في علاج المرضى من جميع الأعمار الذين يعانون من حساسية بروتين الطعام والاضطرابات المرتبطة بالغلوتين، بما في ذلك الداء البطني، وعدم تحمل الغلوتين، وحساسية الغلوتين.</p>
                  </li>
                </ul>
              </div>

              {/* Decorative Circle lines on the left */}
              <div className="hidden lg:block w-24 shrink-0 mr-12 opacity-90">
                <div className="flex gap-2 transform rotate-[40deg]">
                  <div className="w-1.5 h-6 bg-[#8ACC6E] rounded-full mt-12" />
                  <div className="w-1.5 h-12 bg-[#8ACC6E] rounded-full mt-6" />
                  <div className="w-1.5 h-16 bg-[#8ACC6E] rounded-full mt-2" />
                  <div className="w-1.5 h-20 bg-[#8ACC6E] rounded-full" />
                  <div className="w-1.5 h-16 bg-[#8ACC6E] rounded-full mt-2" />
                  <div className="w-1.5 h-12 bg-[#8ACC6E] rounded-full mt-6" />
                  <div className="w-1.5 h-6 bg-[#8ACC6E] rounded-full mt-12" />
                </div>
              </div>
            </div>

            {/* Images Grid (Visual Left Side -> order-2 in RTL) */}
            <div className="flex lg:order-2 order-1 w-full max-w-lg mx-auto">
               
              {/* Right Column Inside Grid (First child string RTL -> physically right) */}
              <div className="w-[45%] flex flex-col justify-center gap-4 ml-4 mt-8 z-10">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full">
                  <SafeImage src="/chiald4.jpg" alt="Child Top Right" className="w-full h-auto object-contain" />
                </div>
                {/* New Child Bottom Right -> Square */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full">
                  <SafeImage src="/chiald2.jpg" alt="Child Bottom Right" className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Left Column Inside Grid (Second child RTL -> physically left) */}
              <div className="flex flex-col gap-4 w-[55%]">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full">
                  <SafeImage src="/chiald1.jpg" alt="Child Top Left" className="w-full h-auto object-contain" />
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 w-full">
                  <SafeImage src="/chiald3.jpg" alt="Child Bottom Left" className="w-full h-auto object-contain" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto flex justify-center">
            
            {/* Accreditation List */}
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-[32px] font-bold text-[#65994A] mb-8 leading-tight text-center md:text-right">الإعتمادات</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-500 font-medium text-[15px] leading-relaxed text-right">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-2.5" />
                  <p>عضو في الجمعية الدولية لطب الأطفال (IFM)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-2.5" />
                  <p>عضو في الجمعية الأمريكية لطب الأطفال (AAAI)، والجمعية الأوروبية لطب الأطفال (EAACI)، وجامعة فلوريدا (FMU)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-2.5" />
                  <p>عضو في الجمعية الأمريكية للطب التكاملي للصحة النفسية.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-2.5" />
                  <p>ممارس للطب الوظيفي في جنوب كاليفورنيا للعلوم الصحية.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-2.5" />
                  <p>عضو في جمعية 2019 (IMMH).</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-2.5" />
                  <p>عضو في الأكاديمية الأمريكية الطبية للأطفال ذوي الاحتياجات الخاصة (MAPS)</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
