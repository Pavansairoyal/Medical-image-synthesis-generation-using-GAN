// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Shield, Leaf, FileText } from 'lucide-react';
// import TestimonialSection from '@/components/TestimonialSection';
// import { ChatDialog } from '@/components/chat/ChatDialog';
//
// const Index = () => {
//   return (
//     <div className="flex flex-col min-h-[calc(100vh-4rem)]">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-b from-white to-potato-50 py-16 lg:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <div className="inline-flex items-center rounded-full border border-potato-200 bg-potato-100/50 px-3 py-1 text-sm font-medium text-potato-700">
//                   Advanced Plant Health Technology
//                 </div>
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-potato-900">
//                   Protect Your Potato Crops with Smart Disease Detection
//                 </h1>
//                 <p className="max-w-[600px] text-balance text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Upload images of your potato plants and get instant AI-powered disease detection to keep your crops healthy and maximize yield.
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <Link to="/upload">
//                   <Button className="potato-btn-primary group">
//                     Start Detection
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                 </Link>
//                 <Button variant="outline" className="potato-btn-secondary">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//             <div className="mx-auto w-full max-w-[500px] lg:mx-0 overflow-hidden rounded-2xl shadow-potato">
//               <img
//                 alt="Potato plant with disease detection overlay"
//                 className="aspect-video object-cover w-full rounded-2xl"
//                 src="public/Image1.jpg"
//                 width={500}
//                 height={500}
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//
//       {/* Features Section */}
//       <section className="bg-white py-16">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <div className="inline-flex items-center rounded-full border border-potato-200 bg-potato-100/50 px-3 py-1 text-sm font-medium text-potato-700">
//                 Key Features
//               </div>
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                 How PotatoScaner Works
//               </h2>
//               <p className="max-w-[700px] text-balance text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Our advanced AI technology helps you identify and manage potato diseases before they spread
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
//             {/* Feature 1 */}
//             <div className="flex flex-col items-center space-y-4 rounded-lg border border-border p-6 shadow-sm transition-all duration-200 hover:shadow-md">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-potato-100">
//                 <Shield className="h-8 w-8 text-potato-600" />
//               </div>
//               <h3 className="text-xl font-bold">Early Detection</h3>
//               <p className="text-center text-muted-foreground">
//                 Identify diseases at their earliest stages, before visible symptoms appear, giving you time to take preventive action.
//               </p>
//             </div>
//
//             {/* Feature 2 */}
//             <div className="flex flex-col items-center space-y-4 rounded-lg border border-border p-6 shadow-sm transition-all duration-200 hover:shadow-md">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-potato-100">
//                 <Leaf className="h-8 w-8 text-potato-600" />
//               </div>
//               <h3 className="text-xl font-bold">Smart Analysis</h3>
//               <p className="text-center text-muted-foreground">
//                 Our AI analyzes potato plant images to identify common diseases like Late Blight, Early Blight, and other pathogens.
//               </p>
//             </div>
//
//             {/* Feature 3 */}
//             <div className="flex flex-col items-center space-y-4 rounded-lg border border-border p-6 shadow-sm transition-all duration-200 hover:shadow-md">
//               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-potato-100">
//                 <FileText className="h-8 w-8 text-potato-600" />
//               </div>
//               <h3 className="text-xl font-bold">Treatment Guidance</h3>
//               <p className="text-center text-muted-foreground">
//                 Receive personalized recommendations for treating detected diseases, helping you maintain healthy crops.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//
//       {/* Testimonial Section */}
//       <TestimonialSection />
//
//       {/* Call to Action */}
//       <section className="bg-potato-600 py-16">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
//                 Ready to Protect Your Potato Crops?
//               </h2>
//               <p className="max-w-[600px] text-balance text-potato-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Start using our advanced disease detection technology today. No registration required.
//               </p>
//             </div>
//             <Link to="/upload">
//               <Button className="bg-white text-potato-600 hover:bg-potato-50">
//                 Start Free Detection
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//
//       {/* Footer */}
//       <footer className="bg-muted/30 border-t border-border">
//         <div className="container flex flex-col gap-2 py-10 md:h-24 md:flex-row md:items-center md:justify-between md:py-0">
//           <div className="flex items-center gap-4 text-sm text-muted-foreground">
//             <div className="text-sm text-muted-foreground">
//               © 2025 PotatoGuard. All rights reserved.
//             </div>
//           </div>
//           <div className="flex items-center gap-4 text-sm text-muted-foreground">
//             <Link to="#" className="hover:underline hover:text-foreground transition-colors">
//               Terms
//             </Link>
//             <Link to="#" className="hover:underline hover:text-foreground transition-colors">
//               Privacy
//             </Link>
//             <Link to="#" className="hover:underline hover:text-foreground transition-colors">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </footer>
//
//       <ChatDialog />
//     </div>
//   );
// };
//
// export default Index;
//
// import React, { useState } from 'react';
// import { Bell, Menu, X, LogOut, LogIn, UserPlus, Home, History, Search, Info, MessageSquare, ChevronRight } from 'lucide-react';
//
// export default function Index() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for demo purposes
//   const userName = "Pavan";
//
//   // Features and advantages data
//   const features = [
//     {
//       title: "AI-Powered Analysis",
//       description: "Advanced machine learning algorithms for accurate skin condition detection",
//       icon: <div className="bg-blue-100 p-3 rounded-full"><Search className="text-blue-600" size={24} /></div>
//     },
//     {
//       title: "Quick Diagnosis",
//       description: "Get preliminary results within seconds after uploading your skin image",
//       icon: <div className="bg-green-100 p-3 rounded-full"><ChevronRight className="text-green-600" size={24} /></div>
//     },
//     {
//       title: "Medical History",
//       description: "Securely store and track your skin condition progression over time",
//       icon: <div className="bg-purple-100 p-3 rounded-full"><History className="text-purple-600" size={24} /></div>
//     },
//     {
//       title: "Expert Validation",
//       description: "Our AI models are trained and validated by experienced dermatologists",
//       icon: <div className="bg-orange-100 p-3 rounded-full"><Info className="text-orange-600" size={24} /></div>
//     }
//   ];
//
//   const advantages = [
//     "Early detection of potential skin diseases",
//     "Reduced need for unnecessary in-person visits",
//     "Accessible healthcare for remote locations",
//     "Continuous improvement through machine learning"
//   ];
//
//   return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         {/* Mobile menu overlay */}
//         {isMenuOpen && (
//             <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
//               <div className="h-full w-64 bg-white bg-opacity-80 backdrop-blur-md p-6 shadow-xl">
//                 <div className="flex justify-between items-center mb-8">
//                   <span className="font-bold text-lg text-indigo-900">DermAI Detect</span>
//                   <button onClick={() => setIsMenuOpen(false)} className="text-gray-600">
//                     <X size={24} />
//                   </button>
//                 </div>
//                 <div className="flex flex-col space-y-4">
//                   <Link icon={<Home size={18} />} text="Home" active />
//                   <Link icon={<History size={18} />} text="History" />
//                   <Link icon={<Search size={18} />} text="Detection" />
//                   <Link icon={<Info size={18} />} text="About" />
//                   <Link icon={<MessageSquare size={18} />} text="Feedback" />
//                 </div>
//               </div>
//             </div>
//         )}
//
//         {/* Navbar */}
//         <nav className="sticky top-0 z-40 backdrop-blur-md bg-white bg-opacity-70 border-b border-gray-200 shadow-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               {/* Logo & Mobile Menu Button */}
//               <div className="flex items-center">
//                 <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-gray-600 mr-3">
//                   <Menu size={24} />
//                 </button>
//                 <span className="font-bold text-xl text-indigo-900">DermAI Detect</span>
//               </div>
//
//               {/* Desktop Navigation */}
//               <div className="hidden lg:flex lg:space-x-8">
//                 <Link icon={<Home size={18} />} text="Home" active />
//                 <Link icon={<History size={18} />} text="History" />
//                 <Link icon={<Search size={18} />} text="Detection" />
//                 <Link icon={<Info size={18} />} text="About" />
//                 <Link icon={<MessageSquare size={18} />} text="Feedback" />
//               </div>
//
//               {/* User section */}
//               <div className="flex items-center space-x-2">
//                 <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-indigo-50">
//                   <Bell size={20} />
//                 </button>
//
//                 {isLoggedIn ? (
//                     <div className="flex items-center space-x-3">
//                       <span className="text-sm font-medium text-gray-700">Welcome, {userName}</span>
//                       <button className="flex items-center text-sm px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
//                         <LogOut size={16} className="mr-1" /> Sign out
//                       </button>
//                     </div>
//                 ) : (
//                     <div className="flex items-center space-x-2">
//                       <button className="flex items-center text-sm px-3 py-2 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200 transition-colors">
//                         <LogIn size={16} className="mr-1" /> Login
//                       </button>
//                       <button className="flex items-center text-sm px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
//                         <UserPlus size={16} className="mr-1" /> Sign up
//                       </button>
//                     </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </nav>
//
//         {/* Hero Section */}
//         <div className="relative overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//             <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
//               <div>
//                 <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//                   <span className="block">AI-Powered</span>
//                   <span className="block text-indigo-600">Skin Disease Detection</span>
//                 </h1>
//                 <p className="mt-3 max-w-md text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//                   Early detection is crucial for effective treatment. Our AI platform helps identify potential skin conditions with advanced machine learning algorithms.
//                 </p>
//                 <div className="mt-8 sm:flex">
//                   <div className="rounded-md shadow">
//                     <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
//                       Try Detection
//                     </button>
//                   </div>
//                   <div className="mt-3 sm:mt-0 sm:ml-3">
//                     <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-12 lg:mt-0 flex justify-center">
//                 <div className="rounded-xl bg-gradient-to-r from-indigo-100 to-blue-200 p-1 shadow-2xl">
//                   <div className="w-full h-64 md:h-80 lg:h-96 bg-indigo-50 rounded-lg overflow-hidden">
//                     <img
//                         src="/api/placeholder/640/480"
//                         alt="Skin disease detection illustration"
//                         className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//
//         {/* Features section */}
//         <div className="bg-white bg-opacity-70 backdrop-blur-sm py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
//               <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                 Advanced Skin Disease Detection
//               </p>
//               <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
//                 Our AI-powered platform provides accurate and timely detection of potential skin conditions.
//               </p>
//             </div>
//
//             <div className="mt-10">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {features.map((feature, index) => (
//                     <div key={index} className="flex">
//                       <div className="flex-shrink-0">
//                         {feature.icon}
//                       </div>
//                       <div className="ml-4">
//                         <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
//                         <p className="mt-2 text-base text-gray-600">{feature.description}</p>
//                       </div>
//                     </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//
//         {/* Advantages section */}
//         <div className="bg-indigo-700 py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
//               <span className="block">Why Choose DermAI Detect?</span>
//             </h2>
//             <div className="mt-8 flex flex-wrap">
//               <div className="w-full lg:w-1/2">
//                 <ul className="space-y-4">
//                   {advantages.map((advantage, index) => (
//                       <li key={index} className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
//                             <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                         </div>
//                         <p className="ml-3 text-base font-medium text-white">{advantage}</p>
//                       </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
//                 <div className="bg-indigo-800 rounded-lg shadow-xl p-6">
//                   <h3 className="text-xl font-medium text-white mb-4">Trusted by Professionals</h3>
//                   <p className="text-indigo-200">
//                     Our platform is developed in collaboration with leading dermatologists and has been validated through extensive clinical testing to ensure accuracy and reliability.
//                   </p>
//                   <button className="mt-6 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50">
//                     Read testimonials
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//
//         {/* Call to action */}
//         <div className="bg-gray-50 py-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 Ready to get started?
//               </h2>
//               <p className="mt-4 text-lg text-gray-600">
//                 Try our AI-powered skin disease detection today and take a proactive step towards better skin health.
//               </p>
//               <div className="mt-8 flex justify-center">
//                 <button className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//                   Start detection now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//
//         {/* Footer */}
//         <footer className="bg-gray-900">
//           <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Skin Analysis</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Condition Tracking</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Professional Consultation</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
//                 <ul className="mt-4 space-y-4">
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
//                   <li><a href="#" className="text-base text-gray-300 hover:text-white">Data Processing</a></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
//               <div className="flex space-x-6 md:order-2">
//                 <a href="#" className="text-gray-400 hover:text-gray-300">
//                   <span className="sr-only">Facebook</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-gray-300">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-gray-300">
//                   <span className="sr-only">Instagram</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//               <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
//                 &copy; 2025 DermAI Detect. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </footer>
//       </div>
//   );
// }
//
// // Navigation link component
// function Link({ icon, text, active = false }) {
//   return (
//       <a
//           href="#"
//           className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
//               active
//                   ? 'bg-indigo-100 text-indigo-700'
//                   : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
//           }`}
//       >
//         <span className="mr-2">{icon}</span>
//         {text}
//       </a>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Bell, Menu, X, LogOut, LogIn, UserPlus, Home, History, Search, Info, MessageSquare, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import  HomepageImg1 from "../assets/HomepageImg1.png"

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface LinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const Index: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // Set to true for demo purposes
  const [currentFeature, setCurrentFeature] = useState<number>(0);
  const userName = "Pavan";

  // Features and advantages data
  const features: Feature[] = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms for accurate skin condition detection",
      icon: <div className="bg-blue-100 p-3 rounded-full"><Search className="text-blue-600" size={24} /></div>
    },
    {
      title: "Quick Diagnosis",
      description: "Get preliminary results within seconds after uploading your skin image",
      icon: <div className="bg-green-100 p-3 rounded-full"><ChevronRight className="text-green-600" size={24} /></div>
    },
    {
      title: "Medical History",
      description: "Securely store and track your skin condition progression over time",
      icon: <div className="bg-purple-100 p-3 rounded-full"><History className="text-purple-600" size={24} /></div>
    },
    {
      title: "Expert Validation",
      description: "Our AI models are trained and validated by experienced dermatologists",
      icon: <div className="bg-orange-100 p-3 rounded-full"><Info className="text-orange-600" size={24} /></div>
    }
  ];

  const advantages: string[] = [
    "Early detection of potential skin diseases",
    "Reduced need for unnecessary in-person visits",
    "Accessible healthcare for remote locations",
    "Continuous improvement through machine learning"
  ];

  // Feature carousel controls
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  // Text reveal animation variants
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Button animation variants
  const buttonAnimation = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 }
  };

  // Image animation variants
  const imageAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    }
  };

  // Link component with animation
  const LinkCustom: React.FC<LinkProps> = ({ icon, text, active = false }) => {
    return (
        <motion.a
            href="#"
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                active
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">{icon}</span>
          {text}
        </motion.a>
    );
  };

  return (
      // bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100
      <div className="min-h-screen  text-white ">
        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >
                <motion.div
                    className="h-full w-64 bg-white bg-opacity-80 backdrop-blur-md p-6 shadow-xl"
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-bold text-lg text-indigo-900">DermAI Detect</span>
                    <motion.button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-600"
                        whileTap={{ scale: 0.9 }}
                    >
                      <X size={24} />
                    </motion.button>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <LinkCustom to="/" icon={<Home size={18} />} text="Home" active />
                    <LinkCustom to="/history"  icon={<History size={18} />} text="History" />
                    <LinkCustom to="/upload"  icon={<Search size={18} />} text="Detection" />
                    <LinkCustom to="/about"  icon={<Info size={18} />} text="About" />
                    <LinkCustom to="/feedback" icon={<MessageSquare size={18} />} text="Feedback" />
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>


        {/* Hero Section with gradient background */}
        <div className="h-[100vh] relative overflow-hidden text-white">
          {/*<div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>*/}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <motion.h1
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={textReveal}
                >
                  <span className="block">AI-Powered</span>
                  <span className="block text-indigo-100">Skin Disease Detection</span>
                </motion.h1>
                <motion.p
                    className="mt-3 max-w-md text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={textReveal}
                >
                  Early detection is crucial for effective treatment. Our AI platform helps identify potential skin conditions with advanced machine learning algorithms.
                </motion.p>
                <motion.div
                    className="mt-8 sm:flex"
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={textReveal}
                >
                  <div className="rounded-md shadow">
                    <motion.button
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
                        whileHover={buttonAnimation.hover}
                        whileTap={buttonAnimation.tap}
                    >
                    <Link to="/upload">  Try Detection </Link>
                    </motion.button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <motion.button
                        className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:bg-opacity-10 md:py-4 md:text-lg md:px-10"
                        whileHover={buttonAnimation.hover}
                        whileTap={buttonAnimation.tap}
                    >
                      <Link to="/about">  Learn More </Link>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                  className="mt-0 lg:mt-0 flex flex-col justify-center items-center"
                  variants={imageAnimation}
                  initial="hidden"
                  animate="visible"
              >
                <motion.div
                    className=" mr-[-8vmin]  "
                    animate={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                >
                  <div className="w-full  h-64 md:h-80 lg:h-96  overflow-hidden">
                    <img
                        src={HomepageImg1}
                        alt="Skin "
                        className="w-full h-full object-cover drop-shadow-md  "
                    />

                  </div>
                </motion.div>
                <div className="mt-[-10vmin] mr-[-6vmin] bg-amber-500 w-[450px] h-[180px] rounded-[50%] shadow-amber-700 shadow-2xl ">

                </div>
              </motion.div>

            </div>
          </div>

          {/* Wave separator */}
          {/*<div className="absolute bottom-0 left-0 right-0">*/}
          {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">*/}
          {/*    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>*/}
          {/*  </svg>*/}
          {/*</div>*/}
        </div>

        {/* Features section - Carousel */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Advanced Skin Disease Detection
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                Our AI-powered platform provides accurate and timely detection of potential skin conditions.
              </p>
            </motion.div>

            {/* Feature Carousel */}
            <div className="mt-16 relative">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                      key={currentFeature}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {features[currentFeature].icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{features[currentFeature].title}</h3>
                        <p className="mt-2 text-base text-gray-600">{features[currentFeature].description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="mt-8 flex justify-center space-x-2">
                <motion.button
                    onClick={prevFeature}
                    className="p-2 rounded-full bg-indigo-100 text-indigo-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft size={20} />
                </motion.button>

                <div className="flex space-x-2 items-center">
                  {features.map((_, index) => (
                      <motion.button
                          key={index}
                          onClick={() => setCurrentFeature(index)}
                          className={`w-3 h-3 rounded-full ${
                              currentFeature === index ? 'bg-indigo-600' : 'bg-indigo-200'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                      />
                  ))}
                </div>

                <motion.button
                    onClick={nextFeature}
                    className="p-2 rounded-full bg-indigo-100 text-indigo-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages section with animations */}
        <div className="bg-[#7CBFBF] p-[7vmin] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <motion.h2
                className="text-3xl font-extrabold text-white sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <span className="block">Why Choose DermAI Detect?</span>
            </motion.h2>
            <div className="mt-8 flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <ul className="space-y-4">
                  {advantages.map((advantage, index) => (
                      <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-3 text-base font-medium text-white">{advantage}</p>
                      </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                  className="w-full lg:w-1/2 mt-6 lg:mt-0"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                    className="bg-indigo-800 rounded-lg shadow-xl p-6 backdrop-blur-md bg-opacity-60 border border-indigo-700"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-medium text-white mb-4">Trusted by Professionals</h3>
                  <p className="text-indigo-200">
                    Our platform is developed in collaboration with leading dermatologists and has been validated through extensive clinical testing to ensure accuracy and reliability.
                  </p>
                  <motion.button
                      className="mt-6 bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-50"
                      whileHover={buttonAnimation.hover}
                      whileTap={buttonAnimation.tap}
                  >
                    Read testimonials
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to action with animations */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <motion.h2
                  className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
              >
                Ready to get started?
              </motion.h2>
              <motion.p
                  className="mt-4 text-lg text-gray-600"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
              >
                Try our AI-powered skin disease detection today and take a proactive step towards better skin health.
              </motion.p>
              <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button
                    className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                >
                <Link to="/upload">  Start detection now </Link>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
  )}

export default Index;
