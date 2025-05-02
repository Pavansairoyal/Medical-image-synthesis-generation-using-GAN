//
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '@/hooks/useAuth';
// import { Button } from '@/components/ui/button';
// import AuthModal from './AuthModal';
// import { cn } from '@/lib/utils';
// import { History, Info, MessageSquare, Menu, X } from 'lucide-react';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useIsMobile } from '@/hooks/use-mobile';
//
// const Navbar: React.FC = () => {
//   const { isLoggedIn, user, logout } = useAuth();
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
//   const location = useLocation();
//   const isMobile = useIsMobile();
//
//   const openLogin = () => {
//     setAuthMode('login');
//     setShowAuthModal(true);
//   };
//
//   const openSignup = () => {
//     setAuthMode('signup');
//     setShowAuthModal(true);
//   };
//
//   const closeModal = () => {
//     setShowAuthModal(false);
//   };

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };
//
//   const NavLinks = () => (
//     <>
//       <Link
//         to="/"
//         className={cn(
//           "text-sm font-medium transition-colors hover:text-potato-700",
//           isActive('/') ? "text-potato-700" : "text-muted-foreground"
//         )}
//       >
//         Home
//       </Link>
//       <Link
//         to="/upload"
//         className={cn(
//           "text-sm font-medium transition-colors hover:text-potato-700",
//           isActive('/upload') ? "text-potato-700" : "text-muted-foreground"
//         )}
//       >
//         Detection
//       </Link>
//       {isLoggedIn && (
//         <Link
//           to="/history"
//           className={cn(
//             "text-sm font-medium transition-colors hover:text-potato-700 flex items-center gap-1",
//             isActive('/history') ? "text-potato-700" : "text-muted-foreground"
//           )}
//         >
//           <History size={16} />
//           History
//         </Link>
//       )}
//       <Link
//         to="/about"
//         className={cn(
//           "text-sm font-medium transition-colors hover:text-potato-700 flex items-center gap-1",
//           isActive('/about') ? "text-potato-700" : "text-muted-foreground"
//         )}
//       >
//         <Info size={16} />
//         About
//       </Link>
//       <Link
//         to="/feedback"
//         className={cn(
//           "text-sm font-medium transition-colors hover:text-potato-700 flex items-center gap-1",
//           isActive('/feedback') ? "text-potato-700" : "text-muted-foreground"
//         )}
//       >
//         <MessageSquare size={16} />
//         Feedback
//       </Link>
//     </>
//   );
//
//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm transition-all">
//         <div className="container flex h-16 items-center">
//           <div className="flex items-center justify-between w-full">
//             <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
//               <div className="relative flex items-center">
//                 <span className="text-2xl">🥔</span>
//                 <div className="ml-2 flex flex-col">
//                   <span className="font-semibold text-lg text-potato-800">Potato</span>
//                   <span className="text-[10px] -mt-1 text-muted-foreground">Disease Detection</span>
//                 </div>
//               </div>
//             </Link>
//
//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-6 mx-auto">
//               <NavLinks />
//             </nav>
//
//             {/* Auth buttons or user info - always at the end */}
//             <div className="flex items-center gap-4">
//               {isLoggedIn ? (
//                 <div className="flex items-center gap-4">
//                   <div className="hidden md:block">
//                     <p className="text-sm text-muted-foreground">
//                       Welcome, <span className="font-medium text-foreground">{user?.username}</span>
//                     </p>
//                   </div>
//                   <Button
//                     variant="outline"
//                     className="rounded-full border-potato-200 text-potato-700 hover:bg-potato-50"
//                     onClick={logout}
//                   >
//                     Logout
//                   </Button>
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-2">
//                   {/* Log in button removed */}
//                   <Button
//                     className="rounded-full bg-potato-600 text-white hover:bg-potato-700"
//                     onClick={openSignup}
//                   >
//                     Sign up
//                   </Button>
//                 </div>
//               )}
//
//               {/* Mobile Navigation - Positioned at the far right */}
//               {isMobile && (
//                 <Sheet>
//                   <SheetTrigger asChild>
//                     <Button variant="ghost" size="icon" className="md:hidden ml-2">
//                       <Menu className="h-5 w-5" />
//                       <span className="sr-only">Toggle menu</span>
//                     </Button>
//                   </SheetTrigger>
//                   <SheetContent side="right" className="w-[250px] sm:w-[300px]">
//                     <nav className="flex flex-col gap-4 mt-8">
//                       <NavLinks />
//                     </nav>
//                   </SheetContent>
//                 </Sheet>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
//
//       {showAuthModal && (
//         <AuthModal
//           isOpen={showAuthModal}
//           onClose={closeModal}
//           initialMode={authMode}
//         />
//       )}
//     </>
//   );
// };
//
// export default Navbar;


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, History, Info, MessageSquare, Search, Bell, LogIn, LogOut, UserPlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthModal from './AuthModal';


const buttonAnimation = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 }
};

const Navbar = () => {
    const { isLoggedIn, user, logout } = useAuth();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

      const openLogin = () => {
        setAuthMode('login');
        setShowAuthModal(true);
      };

      const openSignup = () => {
        setAuthMode('signup');
        setShowAuthModal(true);
      };

    const closeModal = () => {
        setShowAuthModal(false);
    };


    return (
        <div className="sticky top-0 z-40 w-full flex justify-center items-center  py-4 bg-transparent">
            <motion.nav
                className="max-w-4xl w-full mx-4  rounded-xl backdrop-blur-md bg-white bg-opacity-60 border border-white border-opacity-40 shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="px-4 py-2">
                    <div className="flex justify-self-center justify-between items-center gap-4 h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <motion.span
                                className="font-bold text-xl text-indigo-900 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                DermAI Detect
                            </motion.span>
                        </div>

                        {/* Navigation */}
                        <div className="hidden lg:flex lg:space-x-6">
                            <NavItem to="/" icon={<Home size={18} />} label="Home" active={isActive("/")} />
                            <NavItem to="/about" icon={<Info size={18} />} label="About" active={isActive("/about")} />
                            <NavItem to="/upload" icon={<Search size={18} />} label="Detection" active={isActive("/upload")} />
                            <NavItem to="/feedback" icon={<MessageSquare size={18} />} label="Feedback" active={isActive("/feedback")} />
                            {isLoggedIn ?  <NavItem to="/history" icon={<History size={18} />} label="History" active={isActive("/history")} /> : <></>}
                        </div>

                        {/* User Section */}
                        <div className="flex items-center space-x-2">
                            <motion.button
                                className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50"
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            </motion.button>


                        </div>

                    </div>
                </div>
            </motion.nav>
            <div className="absolute right-4">
                {isLoggedIn ? (
                    <div className="flex items-center space-x-3">
                        <motion.button
                            className="flex items-center text-sm px-6 py-4 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                            onClick={logout}
                            whileHover={buttonAnimation?.hover}
                            whileTap={buttonAnimation?.tap}
                        >
                            <LogOut size={16} className="mr-1" /> Sign out
                        </motion.button>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2 gap-2"   >
                        <motion.button
                            className="flex items-center text-sm px-6 py-4 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200 transition-colors"
                            whileHover={buttonAnimation?.hover}
                            whileTap={buttonAnimation?.tap}
                            onClick={openLogin}
                        >
                            <LogIn size={16} className="mr-1" /> Login
                        </motion.button>
                        <motion.button
                            className="flex items-center text-sm px-6 py-4 bg-amber-400 text-[#222] rounded-md hover:bg-[#FDEAD1] transition-colors "
                            whileHover={buttonAnimation?.hover}
                            whileTap={buttonAnimation?.tap}
                            onClick={openSignup}
                        >
                            <UserPlus size={16} className="mr-1" /> Sign up
                        </motion.button>
                    </div>
                )}
            </div>
            {showAuthModal && (
                <AuthModal
                  isOpen={showAuthModal}
                  onClose={closeModal}
                  initialMode={authMode}
                />
              )}
        </div>
    );
};
const NavItem = ({
                     to,
                     icon,
                     label,
                     active,
                 }: {
    to: string;
    icon: React.ReactNode;
    label: string;
    active: boolean;
}) => (
    <motion.div
        whileHover={buttonAnimation?.hover}
        whileTap={buttonAnimation?.tap}
    >
        <Link
            to={to}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                active
                    ? "bg-indigo-100 text-indigo-700 font-semibold shadow-sm"
                    : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
            }`}
        >
            {icon}
            {label}
        </Link>
    </motion.div>
);


export default Navbar;
