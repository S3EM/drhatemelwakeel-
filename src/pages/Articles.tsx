import { useState } from "react";
import { X, ArrowLeft, Baby } from "lucide-react";
import { Link } from "react-router-dom";
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
  description: `نصائح وإرشادات طبية هامة لصحة طفلك. اقرأ المزيد لمعرفة كل التفاصيل الطبية الدقيقة التي ستساعدك على العناية المثلى.`,
  content: `هذا هو النص الكامل للنصيحة الطبية الفعالة رقم ${item.id}.\n\nمتابعة صحة طفلك بشكل دوري وتطبيق النصائح الطبية الصحيحة يساهم في بناء الجسد بشكل سليم وتعزيز المناعة. نحن نضع دائمًا صحتك وصحة أطفالك في المقام الأول.`
}));

export default function Articles({ hideNav = false }: { hideNav?: boolean }) {
  const [selectedArticle, setSelectedArticle] = useState<typeof articlesData[0] | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const visibleArticles = showAllArticles ? articlesData : articlesData.slice(0, 3);

  return (
    <div className="w-full bg-[#fafdfa] font-cairo text-gray-800 min-h-screen flex flex-col" dir="rtl">
      {!hideNav && (
        <nav className="flex items-center justify-between py-5 px-6 lg:px-16 bg-white/80 backdrop-blur-md border-b sticky top-0 z-50" style={{ borderColor: 'rgba(107, 142, 35, 0.1)' }}>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="flex items-center justify-center text-[#5C964A] gap-2">
              <Baby className="w-8 h-8" />
              <span className="font-bold text-2xl leading-tight text-[#5C964A]">د. حاتم الوكيل</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
            <Link to="/" className="text-gray-600 hover:text-[#5C964A] transition-colors">الرئيسية</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#5C964A] transition-colors">من نحن</Link>
            <Link to="/services" className="text-gray-600 hover:text-[#5C964A] transition-colors">خدماتنا</Link>
            <Link to="/services-list" className="text-gray-600 hover:text-[#5C964A] transition-colors">قائمة الخدمات</Link>
            <Link to="/articles" className="text-[#5C964A] font-bold transition-colors">المقالات</Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#5C964A] transition-colors">اتصل بنا</Link>
          </div>

          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link to="/contact" className="hidden lg:block bg-[#5C964A] hover:scale-105 text-white px-8 py-2.5 rounded-full font-semibold transition-transform">
              احجز استشارة
            </Link>
          </div>
        </nav>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {visibleArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-[24px] shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col overflow-hidden">
              <div className="h-56 w-full bg-gray-100 relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400/5C964A/white?text=Image+Not+Found"; }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl mb-3">{article.title}</h3>
                <p className="text-gray-500 mb-6 line-clamp-3">{article.description}</p>
                <div className="mt-auto pt-5 border-t border-gray-50 flex justify-end">
                  <button onClick={() => setSelectedArticle(article)} className="text-[#5C964A] font-bold flex items-center gap-2">
                    اقرأ المزيد <ArrowLeft size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 w-full">
          <button onClick={() => setShowAllArticles(!showAllArticles)} className="px-10 py-3 rounded-full font-bold bg-[#5C964A] text-white">
            {showAllArticles ? 'عرض أقل' : 'عرض المزيد'}
          </button>
        </div>
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative bg-white rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <button onClick={() => setSelectedArticle(null)} className="absolute top-5 left-5 z-20 p-2 bg-white/70 hover:bg-white rounded-full shadow-md text-gray-800 transition-colors"><X size={24} /></button>
            <div className="overflow-y-auto">
              <div className="w-full bg-[#111] flex items-center justify-center">
                 <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-[350px] sm:h-[450px] object-contain sm:object-cover" 
                />
              </div>
              <div className="p-6 sm:p-12 bg-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">{selectedArticle.title}</h3>
                <div className="h-1 w-20 bg-[#5C964A] mb-6 rounded-full"></div>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-[17px] sm:text-[18px]">
                  {selectedArticle.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
