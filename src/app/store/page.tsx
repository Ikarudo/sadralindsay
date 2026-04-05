'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

const sampleProducts = [
  {
    id: 'soap1',
    title: 'Pink Himalayan Salt Soap',
    category: 'soap',
    coverImage: '/PinkHimalyanSalt.jpg',
    price: 9.00,
    description: [
      'Pink Himalayan Salt Luxurious body bar is the newest kid on the block and boy does she shine! A gentle exfoliant is proven to hydrate while cleaning the skin scented with patchouli and sandalwood is an aromatic feast, while still being gentle on the senses.',
      'Rejuvenates, Replenishes and gives a youthful glow',
      'Soothes and detoxifies skin',
      'Made with 100% organic and natural ingredients.'
    ],
  },
  {
    id: 'soap2',
    title: 'Aloe Leaf of Life Soap',
    category: 'soap',
    coverImage: '/AloeLeafofLife.jpg',
    price: 9.00,
    description: [
      'Aloe Leaf of Life Luxurious body bar was introduced in 2022 and she has not looked back since...',
      'Rejuvenates and Replenishes',
      'Soothing and Moisturizing',
      'Cleans Skin Gently',
      'Perfect for Daily Use',
      '100% Natural Ingredients'
    ],
  },
  {
    id: 'soap3',
    title: 'Tumeric and Aloe Soap',
    category: 'soap',
    coverImage: '/TumericandAloe.jpg',
    price: 9.00,
    description: [
      'Turmeric and Aloe Luxurious body bar was introduced in 2022. She is a personal favorite of many and continues to dominate our soap market on the shelves.',
      'Gentle on skin with moisturizing properties',
      'Clears dark spots and blotches',
      'Lightens and brightens skin',
      '100% Natural Ingredients'
    ],
  },
  {
    id: 'ShampooSML',
    title: 'Aloe Blend Leaf of Life Infused Shampoo 8oz',
    category: 'Shampoo',
    coverImage: '/Aloe Leaf of Life Shampoo 8OZ.jpg',
    price: 12.00,
    description: [
      'Rapid Hair Growth',
      'Cleanses, Moisturizes and Detangles',
      'No Parabens',
      'No Sulfates',
      'No Mineral Oils',
      'No Petroleum',
    ],
  },
  {
    id: 'ShampooLRG',
    title: 'Aloe Blend Leaf of Life Infused Shampoo 16oz',
    category: 'Shampoo',
    coverImage: '/Aloe Leaf of Life Shampoo 16OZ.jpg',
    price: 17.99,
    description: [
      'Rapid Hair Growth',
      'Cleanses, Moisturizes and Detangles',
      'No Parabens',
      'No Sulfates',
      'No Mineral Oils',
      'No Petroleum',
    ],
  },
  {
    id: 'Conditioner',
    title: 'Aloe Blend Conditioner',
    category: 'Conditioner',
    coverImage: '/Aloe Blend Conditioner.jpg',
    price: 17.99,
    description: [
      'Cleanses, Moisturizes and Stimulates Hair Growth',
      'No Parabens',
      'No Sulfates',
      'No Mineral Oils',
      'No Petroleum',
    ],
  },
  {
    id: 'Serum1',
    title: 'Leaf of Life Serum',
    category: 'Serum',
    coverImage: '/Leaf of life Serum.jpg',
    price: 17.99,
    description: [
      'Soothes, Hydrates, and plumps the skin',
      'Treats Hyperpigmentation',
      'Reduce Fine Lines and Wrinkles',
      'Provides a protective barrier for the skin',
      'Naturally healing Antioxidant',
      'Promotes Collagen Production',
    ],
  },
  {
    id: 'Oil1',
    title: 'Aloe Oil Blend',
    category: 'Oil',
    coverImage: '/Aloe Oil Blend.jpg',
    price: 15.99,
    description: [
      'Promotes Super Fast Hair Growth',
      'Hair and Scalp treatment',
      'Care for Split Ends',
      'Moisture Retention',
      'Improves Blood Circulation'
    ],
  },
  {
    id: 'Oil2',
    title: 'Rosemary Oil Blend',
    category: 'Oil',
    coverImage: '/Rosemary Oil Blend.jpg',
    price: 17.99,
    description: [
      'Promotes Super Fast Hair Growth',
      'Thickens Hair',
      'Prevents Dry Itchy Scalp',
      'Prevents Hair Loss',
      'Stimulates Growth on Bald Spots'
    ],
  },
  {
    id: 'Moisturizer1',
    title: 'Aloe Blend Leave-in Moisturizer',
    category: 'Moisturizer',
    coverImage: '/Aloe Blend Moisteurizer 8oz.jpg',
    price: 17.99,
    description: [
      'Stimulates Hair Growth',
      'No Parabens',
      'No Sulfates',
      'No Mineral Oils',
      'No Petroleum',
      '100% Natural'
    ],
  },
  {
    id: 'ComboSML',
    title: 'Aloe Blend Combo Small',
    category: 'Combo',
    coverImage: '/Aloe Blend Combo Small.jpg',
    price: 65.00,
    description: [
      'Aloe Blend Leaf of Life Infused Moisturizing Shampoo (8oz)',
      'Intensive Care Conditioner (12oz)',
      'Leave-In Moisturizer (4oz)',
      'Aloe Blend Oil (2oz)',
    ],
  },
  {
    id: 'ComboLRG',
    title: 'Aloe Blend Combo Large',
    category: 'Combo',
    coverImage: '/Aloe Blend Combo Small.jpg',
    price: 85.00,
    description: [
      'Aloe Blend (Leaf of Life Infused Moisturizing Shampoo (16oz)',
      'Intensive Care Conditioner (12oz)',
      'Leave-In Moisturizer (4oz)',
      'Aloe Blend Oil (4oz)',
    ],
  },
];

function StorePageContent() {
  const { addItem } = useCart();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/StoreBGPic.jpg"
              alt="Store Background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#E97B4A]/30 via-[#217a2b]/15 to-[#1a1a1a]/60" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="pt-20"
            >
              <h1 className="font-['Oswald'] font-bold text-white uppercase text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-2xl">
                Store
              </h1>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>

        {/* Garden Gold Logo */}
        <div className="flex justify-center items-center py-10 sm:py-14 px-4">
          <Image
            src="/GardenGoldLogo.png"
            alt="Garden Gold Logo"
            width={384}
            height={384}
            className="w-56 sm:w-64 md:w-72 lg:w-80 rounded-full shadow-md h-auto"
            priority
          />
        </div>

        {/* Products Grid Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#217a2b] via-[#2a8f35] to-[#1a6622]">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Oswald'] font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl text-center mb-10 tracking-wide">
                All Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {sampleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    coverImage={product.coverImage}
                    price={product.price}
                    description={product.description}
                    onAddToCart={(quantity) => {
                      addItem({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        coverImage: product.coverImage,
                      }, quantity);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default StorePageContent;
