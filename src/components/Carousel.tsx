import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface CarouselItem {
  title: string;
  videoUrl: string;
  description: string;
  bgColor: string;
  side: 'left' | 'right';
}

interface CarouselProps {
  items: CarouselItem[];
}

const extendedDescriptions: Record<string, string> = {
  "Breathe It's Gonna Be Okay":
    "A song of comfort and hope, reminding us to trust in God's timing and breathe through life's storms. Let this melody be your gentle reminder that even in the darkest moments, faith and patience will see you through. Breathe, believe, and know that brighter days are ahead.",
  'Thank you':
    'A heartfelt expression of gratitude for blessings received and the journey of faith. This uplifting anthem encourages us to pause, reflect, and give thanks for every step, every lesson, and every victory along the way. Gratitude opens the door to more abundance and joy.',
  'Our Father':
    'A soulful rendition of the Lords Prayer, celebrating faith and connection to the divine. This song invites you to find peace and strength in prayer, drawing closer to the heart of God and embracing the power of spiritual connection in daily life.',
  'Oceans Where My Feet Fall':
    'A moving anthem about stepping out in faith, even when the path is uncertain. Let this song inspire you to trust, to walk boldly into the unknown, and to remember that you are never alone on your journey. The waves may rise, but your faith will carry you.',
};

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total]);

  const item = items[current];
  const description = extendedDescriptions[item.title] || item.description;

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main carousel container */}
      <div
        className="relative h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        tabIndex={0}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8"
          >
            {/* Video Section */}
            <div className={twMerge(
              "relative flex items-center justify-center",
              item.side === 'right' ? 'lg:order-2' : 'lg:order-1'
            )}>
              <div className="relative w-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={twMerge(
              "relative flex flex-col justify-center space-y-6",
              item.side === 'right' ? 'lg:order-1' : 'lg:order-2'
            )}>
              {/* Title */}
              <div>
                <h3 className="font-['Oswald'] font-bold text-3xl sm:text-4xl md:text-5xl text-[#2d2d2d] uppercase tracking-wide leading-tight">
                  {item.title}
                </h3>
                <div className="w-20 h-1 bg-[#E97B4A] mt-4 rounded-full" />
              </div>

              {/* Description */}
              <div className="bg-gradient-to-br from-[#217a2b] to-[#1a6622] rounded-2xl p-6 sm:p-8 shadow-md">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Decorative dots */}
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-12 h-1 bg-[#E97B4A] rounded-full" />
                <div className="w-3 h-3 bg-[#217a2b] rounded-full" />
                <div className="w-8 h-1 bg-[#E97B4A] rounded-full" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20">
        <button
          onClick={goToPrev}
          aria-label="Previous song"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-[#E97B4A] hover:bg-[#E97B4A] hover:text-white transition-all duration-300"
        >
          <span className="text-xl font-bold">&larr;</span>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20">
        <button
          onClick={goToNext}
          aria-label="Next song"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-[#E97B4A] hover:bg-[#E97B4A] hover:text-white transition-all duration-300"
        >
          <span className="text-xl font-bold">&rarr;</span>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-3 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={twMerge(
              'rounded-full transition-all duration-300',
              idx === current
                ? 'w-8 h-3 bg-[#E97B4A]'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to song ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
