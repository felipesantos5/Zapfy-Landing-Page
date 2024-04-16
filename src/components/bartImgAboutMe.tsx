import { useState, useEffect, type ReactNode } from "react";

interface ImgAnimationProps {
  scrollThreshold: number;
  firstImg: string;
  secundImage: string;
  alt: string;
  className?: string;
}

export const ImgAnimation = ({ scrollThreshold, firstImg, secundImage, alt, className }: ImgAnimationProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= scrollThreshold) {
        setCurrentImageIndex(true);
      } else {
        setCurrentImageIndex(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return <img src={currentImageIndex ? firstImg : secundImage} alt={alt} className={`w-28 absolute bottom-2 right-4 ${className}`} />;
};
