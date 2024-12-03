export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Image Compressor',
  description: 'Fast and easy way to compress your images without losing quality.',
  navItems: [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Помощь',
      href: '/help',
    },
    {
      label: 'Связаться с нами',
      href: '/contact-us',
    },
    {
      label: 'Инструкция',
      href: '/instruction',
    },
  ],
  navItemsMobile: [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Помощь',
      href: '/help',
    },
    {
      label: 'Связаться с нами',
      href: '/contact-us',
    },
    {
      label: 'Инструкция',
      href: '/instruction',
    },
  ],
  links: {
    sponsor: 'https://google.com/',
  },
};
