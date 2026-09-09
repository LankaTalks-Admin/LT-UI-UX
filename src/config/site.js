import {
  AppleIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from '@/components/ui/BrandIcons'

export const siteConfig = {
  name: 'LankaTalks',
  tagline: 'Sri Lanka Business Intelligence',
  topTagline: "Sri Lanka's Premier Business Intelligence Platform",
  description:
    "LankaTalks — Sri Lanka's premier business intelligence platform. Market data, sector briefs, tenders, careers and insights.",
  socials: [
    { label: 'Twitter', handle: '@LankaTalks', icon: XIcon },
    { label: 'LinkedIn', handle: 'LankaTalks', icon: LinkedinIcon },
    { label: 'YouTube', handle: 'LankaTalks', icon: YoutubeIcon },
    { label: 'Instagram', handle: '@lankatalks', icon: InstagramIcon },
    { label: 'Facebook', handle: 'LankaTalks', icon: FacebookIcon },
  ],
  apps: [
    { label: 'App Store', icon: AppleIcon },
    { label: 'Google Play', icon: GooglePlayIcon },
  ],
}

export const navItems = [
  { label: 'Stories', href: '/stories' },
  { label: 'Intelligence', href: '/intelligence' },
  { label: 'Tenders', href: '/tenders' },
  { label: 'Careers', href: '/careers' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Sectors', hasDropdown: true, right: true },
  { label: 'Archive', href: '/archive', right: true },
  { label: 'aA', action: 'fontSize', right: true },
]

export const footerLinks = [
  {
    title: 'LankaTalks',
    links: ['About Us', 'Our Team', 'Advertise', 'Partner With Us', 'Press Room', 'Careers at LankaTalks'],
  },
  {
    title: 'News Categories',
    links: ['Business', 'Economy', 'Finance', 'Entrepreneurship', 'Industry', 'Technology', 'Tourism', 'Sports'],
  },
  {
    title: 'Intelligence',
    links: ['Sector Briefs', 'Business Briefs', 'Data Reports', 'LK Knowledge Hub', 'Tenders Database', 'Jobs & Careers'],
  },
]
