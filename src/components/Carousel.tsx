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
    <div
      className={twMerge(
        'relative w-[90vw] max-w-5xl min-h-[75vh] mx-auto rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center',
        item.bgColor
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
    >
      {/* Carousel Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
          className={twMerge(
            'flex flex-col md:flex-row gap-8 items-center w-full h-full px-2 md:px-12 py-8',
            // Remove bg from here, it's on the parent
            ''
          )}
        >
          {item.side === 'left' ? (
            <>
              <div className="w-full md:basis-1/2 flex justify-center items-center">
                <div className="w-full h-[55vw] max-h-[520px] min-h-[220px] md:h-[480px] md:max-w-[520px] rounded-xl overflow-hidden shadow-lg border-2 border-earth-200 flex bg-black/80">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full min-h-[220px]"
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-heading mb-6 text-earth-900">{item.title}</h3>
                <p className="text-base md:text-xl font-serif border-[2px] p-[18px] text-earth-900 bg-white/70 rounded-lg shadow-md">
                  {description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 text-left order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-heading mb-6 text-earth-900">{item.title}</h3>
                <p className="text-base md:text-xl font-serif border-[2px] p-[18px] text-earth-900 bg-white/70 rounded-lg shadow-md">
                  {description}
                </p>
              </div>
              <div className="w-full md:basis-1/2 flex justify-center items-center order-1 md:order-2">
                <div className="w-full h-[55vw] max-h-[520px] min-h-[220px] md:h-[480px] md:max-w-[520px] rounded-xl overflow-hidden shadow-lg border-2 border-earth-200 flex bg-black/80">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full min-h-[220px]"
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous song"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-earth-200 hover:bg-earth-400 text-earth-900 rounded-full p-3 shadow-lg z-10 transition-colors"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        aria-label="Next song"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-earth-200 hover:bg-earth-400 text-earth-900 rounded-full p-3 shadow-lg z-10 transition-colors"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={twMerge(
              'w-3 h-3 rounded-full transition-all',
              idx === current ? 'bg-rust-400 scale-125' : 'bg-earth-300 opacity-60'
            )}
            aria-label={`Go to song ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 