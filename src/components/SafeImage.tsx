import { ImgHTMLAttributes, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export function SafeImage({ src, alt, className, style }: ImgHTMLAttributes<HTMLImageElement>) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#EEF6EC] to-[#E4F5D9] flex flex-col items-center justify-center text-[#5C964A] ${className}`} style={{ ...style, overflow: 'hidden' }}>
        <ImageIcon size={32} className="opacity-50 mb-2" />
        <span className="text-[11px] font-bold opacity-70 text-center px-4 w-full truncate leading-relaxed">{alt || "صورة"}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} style={{ ...style }} onError={() => setHasError(true)} />;
}
