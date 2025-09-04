'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { db } from '@/lib/firebase';
import { setDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
// removed unused useUser import
import { useEffect } from 'react';

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#ee8e5a] text-white px-8 py-4 rounded-2xl shadow-2xl z-[9999] text-lg font-medium animate-fade-in backdrop-blur-sm border border-white/20">
      {message}
    </div>
  );
}

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // removed unused user context
  const [toast, setToast] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!username.trim()) {
      setError('Username is required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save user entity to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        username,
        cart: { items: [], total: 0 },
        orderHistory: [],
      });
      setToast('Account Created');
      setTimeout(() => {
        setToast('');
        router.push('/');
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to register.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // Listen for global toasts (e.g., sign out)
  useEffect(() => {
    const handler = (e: CustomEvent<{ message?: string }>) => {
      if (e.detail && e.detail.message) setToast(e.detail.message);
      setTimeout(() => setToast(''), 2000);
    };
    window.addEventListener('show-toast', handler as EventListener);
    return () => window.removeEventListener('show-toast', handler as EventListener);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center bg-earth-100 py-12 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(238,142,90,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(238,142,90,0.08),transparent_70%)] pointer-events-none"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Logo/Brand section */}
          <div className="text-center mb-8 mt-15">
              <div className="flex justify-center items-center mb-8 sm:mb-12">
                <img
                  src="/SML Logo v1.svg"
                  alt="SML Logo"
                  className="w-48 sm:w-56 md:w-64 lg:w-72 border-2 h-auto max-w-full"
                />
              </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600">Join us and start your journey</p>
          </div>

          {/* Registration form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative">
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="px-4 py-2 rounded-lg border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-400 text-earth-700 bg-earth-100"
              />
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-[#ee8e5a] focus:ring-4 focus:ring-[#ee8e5a]/20 text-gray-700 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-lg transition-all duration-200 hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-[#ee8e5a] focus:ring-4 focus:ring-[#ee8e5a]/20 text-gray-700 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-lg transition-all duration-200 hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-[#ee8e5a] focus:ring-4 focus:ring-[#ee8e5a]/20 text-gray-700 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-lg transition-all duration-200 hover:border-gray-300"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700 text-center text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ee8e5a] to-[#ee8e5a] hover:from-green-300 hover:to-green-300 text-white font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">
                  {loading ? 'Creating Account...' : 'Create Account'}
                </span>
                {loading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d17a47] to-[#b86b3d] animate-pulse"></div>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <span className="text-gray-600">Already have an account?</span>{' '}
              <Link 
                href="/signin" 
                className="text-[#ee8e5a] hover:text-[#d17a47] font-semibold transition-colors duration-200 hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
}