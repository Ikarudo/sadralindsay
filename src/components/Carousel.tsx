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

  // Auto-scroll logic
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8"
          >
            {/* Video Section */}
            <div className={twMerge(
              "relative flex items-center justify-center",
              item.side === 'right' ? 'lg:order-2' : 'lg:order-1'
            )}>
              <div className="relative w-full">
                {/* Decorative background shapes */}
                <div className="absolute -inset-8 bg-rust-400 transform rotate-3 opacity-30" />
                <div className="absolute -inset-6 bg-green-300 transform -rotate-2 opacity-20" />
                <div className="absolute -inset-4 bg-earth-100 transform rotate-1" />
                
                <div className="relative aspect-video bg-black border-4 border-rust-400 transform hover:rotate-1 transition-transform duration-300">
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
              <div className="relative">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-heading text-rust-400 leading-tight transform hover:-rotate-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="w-24 h-1 bg-rust-400 mt-4" />
              </div>

              {/* Description */}
              <div className="relative">
                <div className="absolute -inset-6 bg-green-300 transform rotate-2" />
                <div className="absolute -inset-4 bg-rust-300 transform -rotate-1" />
                <div className="relative bg-earth-100 p-6 border-4 border-rust-400 transform rotate-1">
                  <p className="text-lg sm:text-xl font-serif text-rust-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center space-x-4 mt-6">
                <div className="w-16 h-2 bg-rust-400 rounded-full" />
                <div className="w-6 h-6 bg-green-300 rounded-full" />
                <div className="w-10 h-2 bg-rust-400 rounded-full" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
        <button
          onClick={goToPrev}
          aria-label="Previous song"
          className="relative group"
        >
          <div className="absolute inset-0 bg-rust-400 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
          <div className="relative bg-earth-100 border-4 border-rust-400 w-12 h-12 flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-300">
            <span className="text-rust-400 text-xl font-bold">←</span>
          </div>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
        <button
          onClick={goToNext}
          aria-label="Next song"
          className="relative group"
        >
          <div className="absolute inset-0 bg-rust-400 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
          <div className="relative bg-earth-100 border-4 border-rust-400 w-12 h-12 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-rust-400 text-xl font-bold">→</span>
          </div>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={twMerge(
              'relative group transition-all duration-300',
              idx === current ? 'scale-125' : 'scale-100'
            )}
            aria-label={`Go to song ${idx + 1}`}
          >
            <div className={twMerge(
              'absolute inset-0 transform rotate-45 transition-all duration-300',
              idx === current ? 'bg-rust-400' : 'bg-earth-200'
            )} />
            <div className={twMerge(
              'relative w-4 h-4 border-2 transition-all duration-300',
              idx === current ? 'border-rust-400 bg-green-300' : 'border-earth-200 bg-earth-100'
            )} />
          </button>
        ))}
      </div>
    </div>
  );
}