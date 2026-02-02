import { SectionData } from '@/types';

export const RELATED_SECTION: SectionData = {
  id: 'related-projects',
  subTitle: 'DETAILED',
  title: 'PROJECTS',
  desc: '',
};

export type RelatedProject = {
  id: number;
  title: string;
  tech: string;
  description: string;
  features: string[];
  impact: string;
  github?: string;
  liveDemo?: string;
};

export const RELATED_PROJECTS: RelatedProject[] = [
  {
    id: 1,
    title: 'BBA-AJAIB Payment Portal',
    tech: 'Next.js, React, Ant Design, Redux, Jest, React Testing Library',
    description:
      'Frontend development for secure financial portal bridging investment platform and banking institution with complex transaction workflows.',
    features: [
      'Transaction Interface System – Built frontend for 5+ financial transaction types with secure data handling',
      'Approval Workflow UI – Developed 10+ UI modules for multi-level approval processes and account management',
      'Responsive Financial Dashboard – Created 20+ enterprise-grade pages with pixel-perfect Ant Design components',
      'Reliable State Management – Implemented Redux reducing form data inconsistencies by 40% across complex workflows',
    ],
    impact:
      'Delivered highly reliable financial interfaces with 90%+ test coverage, improved data accuracy in transaction forms, and provided seamless user experience for sensitive banking operations.',
    // Private project - no public links
  },
  {
    id: 2,
    title: 'Library App',
    tech: 'React, TypeScript, Tailwind CSS, Redux Toolkit, React Query, React Router, Vite, Framer Motion, Zod, shadcn/ui',
    description:
      'A modern library management system that solves the complexity of digital book borrowing and collection management with a responsive interface and high performance.',
    features: [
      'Book Management & Search – Book search with category filters, browsing 100+ book collections, and complete information details',
      'Multi-book Loan System – Borrowing system with cart functionality for multiple books and real-time stock tracking',
      'User Dashboard & Reviews – Personalized borrowing statistics dashboard and rating/review system for borrowed books',
      'Admin Panel – Complete admin controls for user management (10+ features), books, and loans with full CRUD operations',
    ],
    impact:
      'Reduced book borrowing time by 60% with optimistic UI, increased user engagement with rating/review system, and simplified library administration with centralized admin panel.',
    github: 'https://github.com/hanssav/wph-library-app',
    liveDemo: 'https://wph-library-app.vercel.app',
  },
  {
    id: 3,
    title: 'Social App',
    tech: 'Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Redux Toolkit + React Query',
    description:
      'Full-featured social media platform with modern architecture and optimized user experience.',
    features: [
      'Social Interactions – Post creation, likes, comments, follows with optimistic UI and real-time updates',
      'User Management – Complete profile system with edit capabilities and social connection tracking',
      'Content Discovery – Search users, infinite-scroll feed, and responsive content display',
      'Robust Validation – Form handling with React Hook Form + Zod ensuring type-safe inputs',
    ],
    impact:
      'Delivered seamless mobile-first experience with instant feedback, improved form completion rates by 50% with client-side validation, and enhanced content discoverability with efficient search and infinite scroll.',
    github: 'https://github.com/hanssav/wph-social-app',
    liveDemo: 'https://wph-social-app.vercel.app/login',
  },
  {
    id: 4,
    title: 'Restaurant App',
    tech: 'Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + React Query + Redux',
    description:
      'Feature-rich food delivery platform with complete ordering workflow and restaurant management.',
    features: [
      'Restaurant Browsing – Advanced filtering, search, and category-based restaurant discovery',
      'Order Management System – Dynamic cart, multi-step checkout, and order tracking with history',
      'User Experience Suite – Profile management, review system, and responsive design across devices',
      'Performance Optimizations – Optimistic UI updates, efficient state management, and smooth animations',
    ],
    impact:
      'Delivered pixel-perfect responsive experience across all devices, reduced checkout completion time by 40% with streamlined flows, and increased user retention through intuitive restaurant discovery.',
    github: 'https://github.com/hanssav/wph-restaurant-app',
    liveDemo: 'https://wph-restaurant-app.vercel.app/home',
  },
  {
    id: 5,
    title: 'Holly Ways – Crowdfunding Platform',
    tech: 'React.js, Node.js, Express.js, MySQL, Bootstrap, Axios',
    description:
      'A full-stack crowdfunding platform that enables users to discover social campaigns, make secure donations, and launch their own fundraising initiatives—connecting donors with meaningful causes.',
    features: [
      'Campaign Discovery & Browsing – Browse and filter social campaigns by category, progress, and urgency',
      'Secure Donation System – Make donations with payment integration and real-time progress tracking',
      'Fundraiser Creation – User-friendly interface to create and manage fundraising campaigns',
      'Dashboard & Analytics – Campaign creators track donations, progress, and engagement metrics',
    ],
    impact:
      'Facilitated community funding for social causes, provided transparent donation tracking, and empowered individuals to launch initiatives with intuitive campaign management tools.',
    github: 'https://github.com/hanssav/FS-Holy-Ways',
  },
  {
    id: 6,
    title: 'RN Movie App',
    tech: 'React Native, Expo, TypeScript, NativeWind, React Query',
    description:
      'Cross-platform mobile app for discovering movies, watching trailers, and managing favorites.',
    features: [
      'Movie Exploration – Browse trending films with carousels, categories, and infinite scrolling',
      'Search & Trailer Viewing – Find movies instantly and watch trailers directly in the app',
      'Personal Library – Save favorites and manage watchlist with user profile',
      'Cross-platform UI/UX – Smooth animations, consistent design across iOS and Android, and modern visual styling',
    ],
    impact:
      'Built performant movie discovery app for both mobile platforms, improved content access with in-app trailers, and delivered polished user experience with modern mobile design patterns.',
    github: 'https://github.com/hanssav/rn-movie-app',
  },
  {
    id: 7,
    title: 'Movie Explorer Website',
    tech: 'Next.js, TypeScript, Tailwind CSS, React Query, TMDB API, Vercel',
    description:
      'A responsive movie discovery website built from Figma design, featuring real-time search, infinite scroll, and modern web development practices.',
    features: [
      'Movie Discovery – Browse trending films with categories and infinite scroll using React Query',
      'Real-time Search – Instant movie search with debouncing and TMDB API integration',
      'Design Implementation – Pixel-perfect translation of Figma design to responsive web interface',
      'Performance Focus – Next.js optimizations including image optimization and efficient data fetching',
    ],
    impact:
      'Successfully delivered production-ready website meeting all technical requirements, demonstrated proficiency in modern frontend development, and implemented complex UI interactions from design specifications.',
    github: 'https://github.com/hanssav/streaming-tmdb-api',
    liveDemo: 'https://streaming-tmdb-api.vercel.app/home',
  },
  {
    id: 8,
    title: 'Animated Portfolio Showcase',
    tech: 'Next.js, Framer Motion, Tailwind CSS, Lucide React',
    description:
      'A technically advanced portfolio website focusing on performance-optimized animations, featuring complex motion sequences and smooth user interactions.',
    features: [
      'Advanced Animation System – 10+ custom motion sequences with scroll-triggered and staggered animations',
      'Performance-First Architecture – Engineered animations maintaining under 100ms lag across all device types',
      'Interactive Motion Design – 8+ complex animation sequences with precise timing and easing functions',
      'Responsive Visual Framework – Tailwind CSS implementation supporting seamless animation integration',
    ],
    impact:
      'Delivered high-performance animated experience with 60fps smoothness, demonstrated expertise in modern web animation techniques, and created engaging visual storytelling through motion.',
    github: 'https://github.com/hanssav/wph-portofolio-8',
    liveDemo: 'https://wph-portofolio-8.vercel.app',
  },
];
