'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

// Sample product data - replace with actual data from your database
const sampleProducts = [
  {
    id: 'soap1',
    title: 'Pink Himalayan Salt Soap',
    category: 'soap',
    coverImage: '/PinkHimalyanSalt.jpg', 
    price: 9.00,
    description: [
      'Pink Himalayan Salt Luxurious body bar is the newest kid on the block and boy dies she shine ✨ A gentle exfoliant is proven to hydrate while cleaning the skin scented with pachouli and sandalwood is an aromatic feast, while still being gentle on the senses.',
      'Rejuvinates, Replenishes and gives a youthful glow',
      'Sooths and detoxifies skin',
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
      'Aloe Leaf of Life Luxurious body bar was introduced in 2022 and she has not looked back since…',
      'Rejuvinates and Replenishes',
      'Soothing and Moisturizing',
      'Cleans Skin Gently',
      'Perect for Daily Use',
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
      'Turmeric and Aloe Luxurious body bar was introduced in 2022 She is a personal favorite of many and continues to dominate our soap market on the shelves… ',
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
      'Rapid Hair Growth ',
      'Cleanses, Moisturizes and Detangles',
      'No Parabens.',
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
      'Rapid Hair Growth ',
      'Cleanses, Moisturizes and Detangles',
      'No Parabens.',
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
      'No Parabens.',
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
      'Sooths, hHydrates, and plumps the skin',
      'Treats Hyperpigmentation',
      'Reduce Fine Lines and Wrinkles',
      'Provides a protective barrier For the skin',
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
      'Hair and Scalp treatment. ',
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
      'No Parabens.',
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
  // Add more products here
];

function StorePageContent() {
  const { addItem } = useCart();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rust-200 via-earth-100 to-green-100 border-b-4 border-rust-400">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full">
              <Image
                src="/StoreBGPic.jpg"
                alt="Store Background"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center justify-center h-full min-h-[60vh] md:min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full flex flex-col items-center justify-center pt-20 md:pt-0 px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold text-white drop-shadow-xl tracking-tight text-center break-words max-w-full leading-tight">
                Store
              </h1>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* Garden Gold Logo */}
        <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 my-6 sm:my-8 px-4">
          <Image
            src="/GardenGoldLogo.png"
            alt="Garden Gold Logo"
            width={384}
            height={384}
            className="w-64 sm:w-72 md:w-80 lg:w-96 border-[4px] border-earth-700 rounded-full m-0 shadow-sm h-auto"
            priority
          />
        </div>
        <br />

        {/* Products Grid Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-green-300">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title !text-black text-center mb-8 sm:mb-10">All Products</h2>
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