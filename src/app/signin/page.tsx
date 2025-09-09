'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
// removed unused useUser import
import { useEffect } from 'react';
import Image from 'next/image';

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-coral-400 text-white px-8 py-4 rounded-2xl shadow-2xl z-[9999] text-lg font-medium animate-fade-in backdrop-blur-sm border border-white/20">
      {message}
    </div>
  );
}

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [toast, setToast] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setToast('Sign In Successful.');
      setTimeout(() => {
        setToast('');
        router.push('/');
      }, 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to sign in.';
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,146,60,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Logo/Brand section */}
          <div className="text-center mb-8 mt-15">
              <div className="flex justify-center items-center mb-8 sm:mb-12">
                <span className="block w-48 sm:w-56 md:w-64 lg:w-72">
                  <Image
                    src="./SML Logo v1.svg"
                    alt="SML Logo"
                    width={288}
                    height={288}
                    className="border-2 h-auto max-w-full"
                    priority
                  />
                </span>
              </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Sign in form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative">
            <form onSubmit={handleSignIn} className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-[#ee8e5a] focus:ring-4 focus:ring-orange-400/20 text-gray-700 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-lg transition-all duration-200 hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:border-[#ee8e5a] focus:ring-4 focus:ring-orange-400/20 text-gray-700 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-lg transition-all duration-200 hover:border-gray-300"
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
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ee8e5a] to-orange-500 hover:from-green-300 hover:to-green-300 text-white font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">
                  {loading ? 'Signing In...' : 'Sign In'}
                </span>
                {loading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ee8e5a] to-orange-600 animate-pulse"></div>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <span className="text-gray-600">Don&apos;t have an account?</span>{' '}
              <Link 
                href="/register" 
                className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200 hover:underline"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Additional features */}
          <div className="mt-6 text-center">
            <Link 
              href="/forgot-password" 
              className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
}