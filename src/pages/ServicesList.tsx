import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SafeImage } from "../components/SafeImage";
import MobileMenu from "../components/MobileMenu";

const servicesData = [
  { id: 1, title: "كشف الأطفال وحديثي\nالولادة" },
  { id: 2, title: "قياس الصفراء للأطفال حديثي\nالولادة" },
  { id: 3, title: "العلاج الضوئي للصفراء عند\nحديثي الولادة" },
  { id: 4, title: "التطعيمات الأساسية\nوالإضافية" },
  { id: 5, title: "متابعة مراحل نمو وتطور\nالطفل من الولادة" },
  { id: 6, title: "أمراض سوء التغذية والمناعة" },
  { id: 7, title: "جميع أنواع الحساسيات\nالغذائية" },
  { id: 8, title: "تشخيص وعلاج أمراض الجهاز\nالهضمي والنزلات المعوية\nوالجفاف" },
  { id: 9, title: "متابعة وعلاج حالات النزلات\nالشعبية والالتهابات الرئوية\nوحساسيات الصدر والأنف" },
  { id: 10, title: "علاج حالات التبول اللا إرادي\nوالتهابات مجرى البول" },
  { id: 11, title: "المشاكل السلوكية عند\nالأطفال" },
  { id: 12, title: "طيف التوحد | تشتت الانتباه |\nفرط الحركة" },
  { id: 13, title: "استخدام الطب الوظيفي\nللكبار والصغار" },
];

export default function ServicesList({ hideNav = false }: { hideNav?: boolean } = {}) {
  return (
    <div className="w-full bg-[#fcfdfc] font-cairo text-gray-800 min-h-screen pb-20" dir="rtl">
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
          <Link to="/services" className="text-gray-800 hover:text-[#5C964A] transition-colors">خدماتنا</Link>
          <Link to="/services-list" className="hover:text-[#5C964A] transition-colors relative text-gray-800">
            قائمة الخدمات
            <div className="absolute -bottom-7 left-0 w-full h-[3px] bg-[#65994A] rounded-t-sm" />
          </Link>
          <Link to="/articles" className="hover:text-[#5C964A] transition-colors">المقالات</Link>
          <Link to="/contact" className="hover:text-[#5C964A] transition-colors">اتصل بنا</Link>
        </div>

        {/* Action Button (Left in RTL) */}
        <div className="flex items-center gap-4">
          <MobileMenu />
          <Link to="/contact" className="hidden lg:block bg-[#65994A] hover:bg-[#527d3b] text-white px-8 py-2.5 rounded-full font-bold transition-colors shadow-md text-[15px]">
            احجز استشارة
          </Link>
        </div>
      </nav>
      )}

      {/* Main Content Section */}
      <section className="relative pt-20 px-6 lg:px-20 overflow-hidden">
        
        {/* Decorative Squiggle (Top Right) */}
        <div className="absolute top-10 right-20 lg:right-32 xl:right-48 pointer-events-none opacity-80 hidden md:block">
          <svg width="220" height="220" viewBox="0 0 100 100" fill="none" className="text-[#8ACC6E]">
            <ellipse cx="50" cy="50" rx="35" ry="25" stroke="currentColor" strokeWidth="2.5" transform="rotate(20 50 50)" />
            <ellipse cx="50" cy="50" rx="25" ry="38" stroke="currentColor" strokeWidth="2.5" transform="rotate(-40 50 50)" />
            <circle cx="55" cy="45" r="22" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="38" cy="58" r="24" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="70" cy="60" rx="18" ry="26" stroke="currentColor" strokeWidth="2.5" transform="rotate(45 70 60)" />
            <ellipse cx="30" cy="35" rx="22" ry="18" stroke="currentColor" strokeWidth="2.5" transform="rotate(-15 30 35)" />
            <circle cx="75" cy="35" r="15" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Header Text */}
        <div className="text-center relative z-10 max-w-2xl mx-auto">
          <span className="bg-[#EEF6EC] text-[#5C964A] px-5 py-1.5 rounded-full text-xs font-bold inline-block mb-6 shadow-sm border border-[#5C964A]/10">
            خدماتنا
          </span>
          <h2 className="text-4xl md:text-[45px] font-bold leading-tight mb-4">
            <span className="text-[#2B302F] block mb-2">رحلة تحولية</span>
            <span className="text-[#8ACC6E] font-black">نحو صحة أفضل</span>
          </h2>
          <p className="text-[#656A69] text-sm md:text-base font-medium">
            نحن نعالج السبب الجذري وليس الأعراض فقط
          </p>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto max-w-[1100px] mt-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#E4F5D9] rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[140px]"
              >
                <span className="text-[#5C964A] font-bold text-lg mb-3 block">
                  {service.id}
                </span>
                <h3 className="text-[#1D2120] font-bold text-[15px] leading-relaxed whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </section>
      
      {/* How We Work Section */}
      <section className="relative py-24 bg-[#548460] mt-24">
        {/* Abstract Background Overlay to simulate the dark overlay in the picture */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          {/* Header */}
          <span className="bg-white/20 text-white px-5 py-1.5 rounded-full text-[13px] font-bold inline-block mb-4 shadow-sm backdrop-blur-sm">
            خطوات العمل
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            كيف <span className="text-[#A4D976]">نعمل؟</span>
          </h2>
          <p className="text-white/95 text-sm md:text-base max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            في عيادات دكتور حاتم الوكيل نقدم لكم دليلاً خطوة بخطوة لتحسين الصحة من خلال الطب الوظيفي تعرف معنا على أزاي قصتك<br />وتساعدنا على فهم الأسباب الجذرية للمرض وكيفية وضع بروتوكول طبى متكامل للعلاج والدعم المستمر بمخطط زمنى واضح
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-8 shadow-xl flex flex-col h-full transform hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#5C964A] font-bold text-[17px]">إجمع قصتك</h3>
                <span className="bg-[#6B9F75] text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                   <ArrowLeft size={14} strokeWidth={2.5} /> الخطوة 1
                </span>
              </div>
              <p className="text-gray-600 text-[13px] leading-[2.2] font-medium">
                تبدأ رحلتك الصحية حتى قبل زيارتك الأولى. من خلال نموذج تاريخ صحي مفصل واستبيان متعمق، نبدأ بتجميع تفاصيل قصتك الصحية الشخصية. تتيح لنا هذه الخطوة:<br/>
                1. فهم التفاعل الديناميكي بين جيناتك وأسلوب حياتك والتعرضات البيئية.<br/>
                2. حدد الأنماط والمحفزات المحتملة وراء أعراضك.<br/>
                3. بناء أساس قوي لخطة رعاية مصممة خصيصا لك.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-8 shadow-xl flex flex-col h-full transform hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#5C964A] font-bold text-[17px]">اكتشاف الأسباب الجذرية</h3>
                <span className="bg-[#6B9F75] text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                   <ArrowLeft size={14} strokeWidth={2.5} /> الخطوة 2
                </span>
              </div>
              <p className="text-gray-600 text-[13px] leading-[2.2] font-medium">
                في استشارتك الأولية، نتعمق في مخاوفك وأهدافك الصحية. ونستكشف:<br/>
                1. عملية الهضم والتغذية والتوازن الهرموني والتعرض المحتمل للسموم.<br/>
                2. عوامل نمط الحياة الرئيسية التي تؤثر على صحتك العامة.<br/>
                3. نتائج المختبر الموجودة، تم تحليلها من خلال عدسة الطب الوظيفي لكشف الأفكار التي تم تجاهلها.<br/>
                4. الحاجة إلى إجراء اختبارات متقدمة، مثل لوحات المغذيات التفصيلية، وتقييمات الهرمونات، أو الاختبارات الجينومية، لتحديد الأسباب الجذرية لعدم التوازن.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-8 shadow-xl flex flex-col h-full transform hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#5C964A] font-bold text-[17px]">مخطط صحي شخصي</h3>
                <span className="bg-[#6B9F75] text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                   <ArrowLeft size={14} strokeWidth={2.5} /> الخطوة 3
                </span>
              </div>
              <p className="text-gray-600 text-[13px] leading-[2.2] font-medium">
                بفضل فهمنا الواضح لاحتياجاتك الفريدة، نضع خطة شاملة وعملية مصممة لاستعادة التوازن وتحسين صحتك. قد تشمل هذه الخطة:<br/>
                1. بروتوكولات غذائية مصممة للعمل في انسجام مع استعداداتك الجينية.<br/>
                2. توصيات مبنية على الأدلة بشأن المكملات الغذائية والأدوية النباتية وتعديلات نمط الحياة.<br/>
                3. أدوات لمراقبة التقدم وضمان تطور العلاج معك.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] p-8 shadow-xl flex flex-col h-full transform hover:-translate-y-1 transition-transform">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#5C964A] font-bold text-[17px]">الرعاية والدعم المستمر</h3>
                <span className="bg-[#6B9F75] text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-sm">
                   <ArrowLeft size={14} strokeWidth={2.5} /> الخطوة 4
                </span>
              </div>
              <p className="text-gray-600 text-[13px] leading-[2.2] font-medium">
                صحتك ليست ثابتة، وكذلك خطة رعايتك. الشفاء يحدث على مراحل، بدأً من الدعم الأساسي وصولاً إلى التطور التدريجي. من خلال المتابعة الدورية، نقوم بما يلي:<br/>
                1. راقب التقدم للتأكد من أن العلاج الخاص بك يظل فعالاً.<br/>
                2. قم بتحسين خطتك عندما تظهر احتياجات وأهداف جديدة.<br/>
                3. توفير التعليم المستمر والتشجيع لمساعدتك على الحفاظ على النتائج الدائمة.<br/>
                4. رحلة صحتك فريدة، لنبدأها معا
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Band */}
      <section className="bg-[#9CD26A] py-14">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
             <div>
                <h3 className="text-4xl lg:text-5xl font-black mb-3">+ 4350</h3>
                <p className="font-bold text-[15px] drop-shadow-sm">مريض وثق فينا</p>
             </div>
             <div>
                <h3 className="text-4xl lg:text-5xl font-black mb-3">+ 3200</h3>
                <p className="font-bold text-[15px] drop-shadow-sm">حالات شفاء</p>
             </div>
             <div>
                <h3 className="text-4xl lg:text-5xl font-black mb-3">+ 20</h3>
                <p className="font-bold text-[15px] drop-shadow-sm">عاماً من الخبرة</p>
             </div>
             <div>
                <h3 className="text-4xl lg:text-5xl font-black mb-3">+ 15</h3>
                <p className="font-bold text-[15px] drop-shadow-sm">شهادة وزمالة</p>
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
