import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface AccordionItem {
  title: string;
  videoUrl: string;
  description: string;
  bgColor: string;
  side: 'left' | 'right';
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-[60vw] max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.title} className="border-b last:border-b-0">
            {/* Header */}
            <button
              className={twMerge(
                'w-full flex items-center justify-between px-8 py-6 bg-white focus:outline-none transition-colors',
                isOpen ? 'bg-earth-50' : 'hover:bg-earth-50'
              )}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="text-2xl md:text-3xl font-cursive text-earth-800 tracking-wide text-left">
                {item.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                className="ml-4 text-earth-400"
                transition={{ duration: 0.3 }}
              >
                ▶
              </motion.span>
            </button>
            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={twMerge(
                    'overflow-hidden',
                    item.bgColor,
                    'px-0 md:px-8 py-8 flex flex-col md:flex-row gap-8 items-center'
                  )}
                >
                  {item.side === 'left' ? (
                    <>
                      <div className="w-full md:basis-1/2 flex justify-center">
                        <div className="w-full h-[330px] md:h-[370px] rounded-lg overflow-hidden shadow-lg border-2 border-earth-200 flex">
                          <iframe
                            src={item.videoUrl}
                            title={item.title}
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 text-left">
                        <p className="text-lg md:text-xl font-body text-earth-900">
                          {item.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:w-1/2 text-left order-2 md:order-1">
                        <p className="text-lg md:text-xl font-body text-earth-900">
                          {item.description}
                        </p>
                      </div>
                      <div className="w-full md:basis-1/2 flex justify-center order-1 md:order-2">
                        <div className="w-full h-[330px] md:h-[370px] rounded-lg overflow-hidden shadow-lg border-2 border-earth-200 flex">
                          <iframe
                            src={item.videoUrl}
                            title={item.title}
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
} 