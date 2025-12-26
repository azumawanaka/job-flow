/**
 * Site Configuration
 * Centralized configuration for routes, navigation, and site settings
 */

// ==================== ROUTE CONFIGURATION ====================

/**
 * Authentication Routes
 * Pages where user authentication happens (login, register, etc.)
 */
export const AUTH_ROUTES = {
  LOGIN: '/',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
} as const;

/**
 * Public Routes
 * Accessible without authentication
 */
export const PUBLIC_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

/**
 * Protected Routes (App Routes)
 * Require authentication
 */
export const PROTECTED_ROUTES = {
  DASHBOARD: '/dashboard',
} as const;

/**
 * API Routes
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    VERIFY: '/api/auth/verify',
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE: '/api/user/update',
  },
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Check if a route is an authentication route
 */
export const isAuthRoute = (pathname: string): boolean => {
  return Object.values(AUTH_ROUTES).includes(pathname);
};

/**
 * Check if a route is a public route
 */
export const isPublicRoute = (pathname: string): boolean => {
  return Object.values(PUBLIC_ROUTES).includes(pathname);
};

/**
 * Check if a route is a protected route
 */
export const isProtectedRoute = (pathname: string): boolean => {
  return Object.values(PROTECTED_ROUTES).includes(pathname);
};

/**
 * Check if current route should show sidebar
 * Typically, sidebar is hidden on auth pages
 */
export const shouldShowSidebar = (pathname: string): boolean => {
  return !isAuthRoute(pathname);
};

/**
 * Check if current route should show header
 */
export const shouldShowHeader = (pathname: string): boolean => {
  return !isAuthRoute(pathname);
};

/**
 * Check if current route should show footer
 */
export const shouldShowFooter = (pathname: string): boolean => {
  return !isAuthRoute(pathname);
};

/**
 * Get the current page title based on route
 */
export const getPageTitle = (pathname: string): string => {
  const routeTitles: Record<string, string> = {
    [AUTH_ROUTES.LOGIN]: 'Login',
    [AUTH_ROUTES.REGISTER]: 'Register',
    [PROTECTED_ROUTES.DASHBOARD]: 'Dashboard',
    [PUBLIC_ROUTES.ABOUT]: 'About Us',
    [PUBLIC_ROUTES.CONTACT]: 'Contact Us',
  };

  return routeTitles[pathname] || 'My App';
};

/**
 * Check if route requires authentication
 */
export const requiresAuth = (pathname: string): boolean => {
  return isProtectedRoute(pathname);
};

/**
 * Get redirect URL after login based on user type or previous page
 */
export const getLoginRedirectUrl = (userType?: string): string => {
  // You can customize this based on user roles
  const userRedirects: Record<string, string> = {
    admin: PROTECTED_ROUTES.DASHBOARD,
    default: PROTECTED_ROUTES.DASHBOARD,
  };

  return userRedirects[userType || 'default'];
};

// ==================== NAVIGATION CONFIGURATION ====================

/**
 * Main navigation items for sidebar/menu
 */
export const MAIN_NAVIGATION = [
  {
    title: 'Dashboard',
    href: PROTECTED_ROUTES.DASHBOARD,
    icon: 'Dashboard',
    protected: true,
  },
] as const;

/**
 * Footer navigation
 */
export const FOOTER_NAVIGATION = [
  {
    title: 'About',
    links: [
      { title: 'About Us', href: PUBLIC_ROUTES.ABOUT },
      { title: 'Contact', href: PUBLIC_ROUTES.CONTACT },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: PUBLIC_ROUTES.PRIVACY },
      { title: 'Terms of Service', href: PUBLIC_ROUTES.TERMS },
    ],
  },
] as const;

// ==================== SITE METADATA ====================

export const SITE_METADATA = {
  title: 'My App',
  description: 'Best promotions and bonuses platform',
  keywords: ['promotions', 'bonuses', 'rewards', 'gaming'],
  author: 'My Company',
  ogImage: '/og-image.png',
  twitterHandle: '@myapp',
} as const;

// ==================== EXPORT TYPES ====================

export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
export type PublicRoute = (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
export type ProtectedRoute =
  (typeof PROTECTED_ROUTES)[keyof typeof PROTECTED_ROUTES];
export type ApiRoute =
  (typeof API_ROUTES)[keyof typeof API_ROUTES][keyof (typeof API_ROUTES)[keyof typeof API_ROUTES]];

// Type guard functions
export const isAuthRouteType = (route: string): route is AuthRoute =>
  Object.values(AUTH_ROUTES).includes(route as AuthRoute);
