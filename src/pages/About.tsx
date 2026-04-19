import { Facebook, Instagram, Music, Twitter, Youtube, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

export default function About({ hideNav = false }: { hideNav?: boolean } = {}) {
  return (
    <div className="w-full bg-white font-cairo text-gray-800" dir="rtl">
      {/* Navigation */}
      {!hideNav && (
        <nav className="relative flex items-center justify-between py-6 px-6 lg:px-20 bg-white border-b border-gray-50 z-50">
          <div className="flex items-center gap-2 text-[#5C964A]">
            <Baby className="w-8 h-8" />
            <span className="font-bold text-2xl">د. حاتم الوكيل</span>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-8 font-bold text-gray-800 text-[15px] flex-1">
            <Link to="/" className="text-gray-800 hover:text-[#5C964A] transition-colors">الرئيسية</Link>
            <Link to="/about" className="text-[#5C964A] relative transition-colors">
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
            
            {/* Text Content Block */}
            <div className="flex items-center justify-between lg:pr-10 lg:order-1 order-2">
              <div className="flex-1">
                <ul className="space-y-6 list-none text-right">
                  <li className="flex items-start gap-4 text-justify">
                    <div className="w-1.5 h-1.5 mt-3 rounded-full bg-gray-400 shrink-0" />
                    <p className="text-[#656A69] font-medium text-[15.5px] leading-relaxed">استشاري في مجال طب الأطفال وحديثي الولادة، يتمتع بخبرة واسعة في القطاعين الخاص والعام.</p>
                  </li>
                  <li className="flex items-start gap-4 text-justify">
                    <div className="w-1.5 h-1.5 mt-3 rounded-full bg-gray-400 shrink-0" />
                    <p className="text-[#656A69] font-medium text-[15.5px] leading-relaxed">ممارس للطب الوظيفي لمساعدتك في إيجاد حلول لسبب مرضك والاختلالات الغذائية.</p>
                  </li>
                  <li className="flex items-start gap-4 text-justify">
                    <div className="w-1.5 h-1.5 mt-3 rounded-full bg-gray-400 shrink-0" />
                    <p className="text-[#656A69] font-medium text-[15.5px] leading-relaxed">متخصص في علاج حساسية بروتين الطعام والاضطرابات المرتبطة بالغلوتين لجميع الأعمار.</p>
                  </li>
                </ul>
              </div>

              {/* Decorative Circle lines */}
              <div className="hidden lg:block w-24 shrink-0 mr-12 opacity-90">
                <div className="flex gap-2 transform rotate-[40deg]">
                  <div className="w-1.5 h-20 bg-[#8ACC6E] rounded-full" />
                  <div className="w-1.5 h-16 bg-[#8ACC6E] rounded-full mt-2" />
                  <div className="w-1.5 h-12 bg-[#8ACC6E] rounded-full mt-4" />
                </div>
              </div>
            </div>

            {/* Images Grid المحدثة لضمان ظهور chiald1.jpg */}
            <div className="grid grid-cols-2 gap-4 lg:order-2 order-1 w-full max-w-lg mx-auto">
              {/* الصورة الكبيرة الموحدة (يسار الشبكة) */}
              <div className="col-span-1 h-full">
                <img 
                  src="/chiald1.jpg" 
                  alt="Child Care 1" 
                  className="rounded-3xl object-cover w-full h-full shadow-md border border-gray-50"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x800/5C964A/white?text=Child+Care"; }}
                />
              </div>

              {/* عمود الصورتين الصغيرتين (يمين الشبكة) */}
              <div className="col-span-1 flex flex-col gap-4">
                <img 
                  src="/chiald4.jpg" 
                  alt="Child Care 2" 
                  className="rounded-2xl object-cover w-full h-[180px] shadow-sm"
                />
                <img 
                  src="/chiald2.jpg" 
                  alt="Child Care 3" 
                  className="rounded-2xl object-cover w-full h-[180px] shadow-sm"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] font-bold text-[#65994A] mb-8 leading-tight text-center">الإعتمادات</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-500 font-medium text-[15px] text-right">
              {[
                "عضو في الجمعية الدولية لطب الأطفال (IFM)",
                "عضو في الجمعية الأمريكية لطب الأطفال (AAAI)",
                "عضو في الجمعية الأمريكية للطب التكاملي",
                "ممارس للطب الوظيفي في جنوب كاليفورنيا",
                "عضو في جمعية 2019 (IMMH)",
                "عضو الأكاديمية الأمريكية للأطفال ذوي الاحتياجات الخاصة"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#8ACC6E] rounded-full shrink-0 mt-2.5" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
