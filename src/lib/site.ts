export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';
export const asset = (path: string) => `${basePath}${path}`;
export const salon = {
  name: 'AVIRAY Unisex Salon',
  phone: '+91 99805 31469',
  telephone: 'tel:+919980531469',
  whatsapp: '919980531469',
  services: ['Hair', 'Skin', 'Nails', 'Bridal & occasions', 'Grooming', 'Help me choose'],
} as const;
