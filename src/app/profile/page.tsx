'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { db } from '@/lib/firebase';
import { doc, getDoc, collection, getDocs, orderBy, query } from 'firebase/firestore';

export default function ProfilePage() {
  const { user, loading, signOut } = useUser();
  const [profile, setProfile] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/signin');
    }
  }, [user, loading, router]);

  useEffect(() => {
    async function fetchProfile() {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        setProfile(userSnap.exists() ? userSnap.data() : null);
        // Fetch order history
        const ordersRef = collection(db, 'users', user.uid, 'orders');
        const q = query(ordersRef, orderBy('createdAt', 'desc'));
        const ordersSnap = await getDocs(q);
        setOrders(ordersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoadingProfile(false);
      }
    }
    fetchProfile();
  }, [user]);

  if (!user || loadingProfile) return null;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-12 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(238,142,90,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(238,142,90,0.08),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#ee8e5a] to-[#d17a47] rounded-full shadow-lg mb-4">
              <span className="text-white text-3xl font-bold">
                {profile?.username?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {profile?.username || 'User Profile'}
            </h1>
            <p className="text-gray-600 text-lg">{profile?.email || user?.email}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Profile Information Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Username</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 min-h-[3rem] flex items-center">
                      <span className="text-gray-800 font-medium break-all">
                        {profile?.username || 'Not set'}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 min-h-[3rem] flex items-center">
                      <span className="text-gray-800 font-medium break-all">
                        {profile?.email || user?.email}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Member Since</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 min-h-[3rem] flex items-center">
                      <span className="text-gray-800 font-medium">
                        {user?.metadata?.creationTime ? 
                          new Date(user.metadata.creationTime).toLocaleDateString() : 
                          'Unknown'
                        }
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Total Orders</label>
                    <div className="px-4 py-3 bg-gradient-to-r from-[#ee8e5a]/10 to-[#d17a47]/10 rounded-xl border border-[#ee8e5a]/20 min-h-[3rem] flex items-center">
                      <span className="text-[#ee8e5a] font-bold text-lg">
                        {orders.length}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={signOut}
                  className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Order History Card */}
            <div className="lg:col-span-3">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Order History</h2>
                  <div className="px-4 py-2 bg-[#ee8e5a]/10 rounded-full border border-[#ee8e5a]/20">
                    <span className="text-[#ee8e5a] font-semibold text-sm">
                      {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-lg">No orders yet</p>
                      <p className="text-gray-500 text-sm mt-2">Your order history will appear here</p>
                    </div>
                  ) : (
                    orders.map(order => (
                      <div key={order.id} className="bg-white/50 rounded-2xl p-6 border border-gray-200 hover:border-[#ee8e5a]/30 transition-all duration-200">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-gray-800 text-lg">Order #{order.id}</h3>
                            <p className="text-gray-600 text-sm">
                              {order.createdAt?.toDate?.().toLocaleDateString?.() || 'Date unknown'}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#ee8e5a]">
                              ${order.total?.toFixed(2) || '0.00'}
                            </div>
                            <div className="text-sm text-gray-600">
                              {order.items?.length || 0} {(order.items?.length || 0) === 1 ? 'item' : 'items'}
                            </div>
                          </div>
                        </div>
                        
                        {order.items && order.items.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-medium text-gray-700 text-sm">Items:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {order.items.map((item: any, index: number) => (
                                <div key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-xl">
                                  <span className="text-gray-800 font-medium">{item.title}</span>
                                  <span className="text-gray-600 text-sm">x{item.quantity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}