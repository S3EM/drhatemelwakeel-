import { MapPin } from 'lucide-react';

export default function MapButton() {
  return (
    <a
      href="https://maps.app.goo.gl/4SpCumxJWBmZuHHD9"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[104px] right-8 z-[100] bg-[#5C964A] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center isolate group"
      aria-label="عرض على الخريطة"
      title="عرض على الخريطة"
    >
      <div className="absolute inset-0 bg-[#5C964A] rounded-full animate-pulse -z-10 opacity-60 group-hover:opacity-0 transition-opacity delay-75"></div>
      <MapPin size={32} strokeWidth={2} />
    </a>
  );
}
