import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { BookOpen, Heart, Search } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import GlobalQuranSearch from '@/components/GlobalQuranSearch';

export default function Layout({ children, currentPageName }) {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <head>
        <meta name="google-site-verification" content="google8f36c703edf754cb" />
      </head>
      <div className="min-h-screen bg-stone-50">
      {/* Social Media Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white py-2 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-sm sm:text-base">Socials</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Global Search Button */}
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-2 px-3 py-1 bg-white/15 hover:bg-white/25 rounded-full text-white text-xs transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search Quran</span>
            </button>
            <a
              href="https://www.reddit.com/r/al_islam1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-indigo-200 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              Reddit
            </a>
            <a 
              href="https://x.com/mr_muslim123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm hover:text-indigo-200 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X/Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-arabic {
          font-family: 'Amiri', 'Traditional Arabic', serif;
        }
        
        :root {
          --color-teal-50: #f0fdfa;
          --color-teal-100: #ccfbf1;
          --color-teal-200: #99f6e4;
          --color-teal-500: #14b8a6;
          --color-teal-600: #0d9488;
          --color-teal-700: #0f766e;
          --color-teal-800: #115e59;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f5f5f4;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a29e;
        }
        
        /* Slider styling */
        [data-radix-collection-item] {
          transition: all 0.2s;
        }
      `}</style>
      
      {children}

      <AnimatePresence>
        {showSearch && <GlobalQuranSearch onClose={() => setShowSearch(false)} />}
      </AnimatePresence>
      </div>

      {/* Footer */}
      {(currentPageName === 'Home' || currentPageName === 'QuranReader' || currentPageName === 'Dashboard' || currentPageName === 'Lessons') && (
        <footer className="border-t border-stone-200 bg-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-stone-800">Quran Reader</span>
              </div>
              
              <p className="text-sm text-stone-500 flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-blue-500" fill="currentColor" /> for the Ummah. Made for everyone 
              </p>
              <p className="text-xs text-stone-400 font-medium">
                Made by Al-Islam Developers
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
    </>
    );
    }
