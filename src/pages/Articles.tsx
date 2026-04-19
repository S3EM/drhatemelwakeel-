import { useState } from "react";
import { X, ArrowLeft, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import { SafeImage } from "../components/SafeImage";
import MobileMenu from "../components/MobileMenu";

const articlesData = [
  { id: 1, title: "نصيحة طبية 1", image: "/advice 1.jpg" },
  { id: 2, title: "نصيحة طبية 2", image: "/advice 2.jpg" },
  { id: 3, title: "نصيحة طبية 3", image: "/advice 3.jpg" },
  { id: 4, title: "نصيحة طبية 4", image: "/advice 4.jpg" },
  { id: 5, title: "نصيحة طبية 5", image: "/advice 5.jpg" },
  { id: 6, title: "نصيحة طبية 6", image: "/advice 6.jpg" },
  { id: 7, title: "نصيحة طبية 7", image: "/advice 7.jpg" },
  { id: 8, title: "نصيحة طبية 8", image: "/advice 8.jpg" },
  { id: 9, title: "نصيحة طبية 9", image: "/advice 9.jpg" },
  { id: 10, title: "نصيحة طبية 10", image: "/advice 10.jpg" },
  { id: 11, title: "نصيحة طبية 11", image: "/advice 11.jpg" },
  { id: 12, title: "نصيحة طبية 12", image: "/advice 12.jpg" },
  { id: 13, title: "نصيحة طبية 13", image: "/advice 13.jpg" },
  { id: 14, title: "نصيحة طبية 14", image: "/advice 14.jpg" },
  { id: 15, title: "نصيحة طبية 15", image: "/advice 15.jpg" },
  { id: 16, title: "نصيحة طبية 16", image: "/advice 16.jpg" },
  { id: 17, title: "نصيحة طبية 17", image: "/advice 17.jpg" },
  { id: 18, title: "نصيحة طبية 18", image: "/advice 18.jpg" },
  { id: 19, title: "نصيحة طبية 19", image: "/advice 19.jpg" }
].map(item => ({
  ...item,
  description: `نصائح وإرشادات طبية هامة لصحة طفلك متعلقة بهذه النصيحة. اقرأ المزيد لمعرفة كل التفاصيل الطبية الدقيقة التي ستساعدك على العناية المثلى وتوفير بيئة صحية متكاملة لنموه.`,
  content: `هذا هو النص الكامل للنصيحة الطبية الفعالة رقم ${item.id}.\n\nمتابعة صحة طفلك بشكل دوري وتطبيق النصائح الطبية الصحيحة يساهم في بناء الجسد بشكل سليم وتعزيز المناعة. نحن نضع دائمًا صحتك وصحة أطفالك في المقام الأول؛ لذا لا تتردد في حجز استشارة أو زيارة العيادة عند ملاحظة أي أعراض غير معتادة على الطفل، فالتشخيص المبكر خطوة هامة في العلاج.\n\nتذكر دائماً أن الوقاية خير من العلاج، وأن التغذية السليمة، والنوم الكافي، والالتزام بجدول التطعيمات هي الركائز الأساسية لتمتع طفلك بصحة جيدة.`
}));

export default function Articles({ hideNav = false }: { hideNav?: boolean } = {}) {
  const [selectedArticle, setSelectedArticle] = useState<typeof articlesData[0] | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const visibleArticles = showAllArticles ? articlesData : articlesData.slice(0, 3);

  return (
    <div className="w-full bg-[#fafdfa] font-cairo text-gray-800 min-h-screen flex flex-col" dir="rtl">
      {!hideNav && (
        <nav className="flex items-center justify-between py-5 px-6 lg:px-16 bg-white/80 backdrop-blur-md border-b sticky top-0 z-50" style={{ borderColor: 'rgba(107, 142, 35, 0.1)' }}>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            {/* Logo */}
            <div className="flex items-center justify-center text-primary gap-2">
              <Baby className="w-8 h-8" />
              <span className="font-bold text-2xl leading-tight text-primary">د. حاتم الوكيل</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
            <Link to="/" className="text-text-main hover:text-primary transition-colors">الرئيسية</Link>
            <Link to="/about" className="text-text-main hover:text-primary transition-colors">من نحن</Link>
            <Link to="/services" className="text-text-main hover:text-primary transition-colors">خدماتنا</Link>
            <Link to="/services-list" className="text-text-main hover:text-primary transition-colors">قائمة الخدمات</Link>
            <Link to="/articles" className="text-primary font-bold transition-colors">المقالات</Link>
            <Link to="/contact" className="text-text-main hover:text-primary transition-colors">اتصل بنا</Link>
          </div>

          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link to="/contact" className="hidden lg:block bg-primary hover:scale-105 text-white px-8 py-2.5 rounded-full font-semibold transition-transform" style={{ boxShadow: '0 10px 20px rgba(107, 142, 35, 0.2)' }}>
              احجز استشارة
            </Link>
          </div>
        </nav>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1 w-full">
        {!hideNav && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">نصائح طبية ومقالات</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              مجموعة من النصائح والمقالات الطبية المتخصصة في رعاية الأطفال وحديثي الولادة
            </p>
          </div>
        )}

        {/* 3 Columns Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {visibleArticles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(92,150,74,0.12)] hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col group h-full overflow-hidden"
            >
              {/* Card Image Header */}
              <div className="h-56 w-full bg-gray-50 relative overflow-hidden shrink-0 border-b border-gray-50">
                <SafeImage 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#5C964A] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-20">
                  مقال طبي
                </div>
              </div>
              
              {/* Card Body Components */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-bold text-[18px] lg:text-[22px] text-gray-900 mb-3">{article.title}</h3>
                  {/* Description */}
                  <p className="text-gray-500 mb-6 text-[15px] leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
                
                {/* Footer (Read More Button aligned to the Left/End) */}
                <div className="pt-5 border-t border-gray-50 flex justify-end">
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="text-[#5C964A] font-bold text-[15px] flex items-center gap-2 hover:bg-[#EEF6EC] px-4 py-2.5 rounded-xl transition-colors"
                  >
                    اقرأ المزيد
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12 w-full">
          <button 
            onClick={() => setShowAllArticles(!showAllArticles)}
            className={`px-10 py-3 rounded-full font-bold text-lg transition-all shadow-md active:scale-95 ${showAllArticles ? 'bg-black hover:bg-gray-800 text-white' : 'bg-[#5C964A] hover:bg-[#4a7a3b] text-white'}`}
          >
            {showAllArticles ? 'عرض أقل' : 'عرض المزيد'}
          </button>
        </div>
      </div>

      {/* Read More Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setSelectedArticle(null)}></div>
          
          <div className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300" dir="rtl">
            <div className="absolute top-5 left-5 z-20">
              <button 
                onClick={() => setSelectedArticle(null)} 
                className="p-2 bg-white/70 hover:bg-white backdrop-blur-md rounded-full transition-colors shadow-sm text-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-y-auto w-full h-full">
              {/* Modal Header */}
              <div className="w-full h-64 sm:h-[450px] relative bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
                <SafeImage 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                   <h3 className="font-bold text-3xl sm:text-5xl text-white leading-tight relative p-6 sm:p-10 w-full">
                     {selectedArticle.title}
                   </h3>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 sm:p-12 bg-white">
                <div className="max-w-3xl mx-auto prose prose-lg text-gray-700 leading-loose">
                  <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed border-r-4 border-[#5C964A] pr-5 bg-gradient-to-l from-[#f5fbf4] to-transparent py-5 rounded-l-2xl">
                    {selectedArticle.description}
                  </p>
                  <p className="whitespace-pre-line text-[17px] sm:text-[18px] text-gray-800 leading-relaxed font-medium">
                    {selectedArticle.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
