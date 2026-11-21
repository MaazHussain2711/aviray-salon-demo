export const gallery = [
  {
    "category": "hair",
    "caption": "Soft texture, effortless movement",
    "title": "Soft texture",
    "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
    "alt": "Soft texture and naturally flowing hair",
    "tall": true
  },
  {
    "category": "beauty",
    "caption": "A polished detail that makes it yours",
    "title": "The finer details",
    "src": "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=85",
    "alt": "Manicure inspiration",
    "tall": false
  },
  {
    "category": "grooming",
    "caption": "A fresh cut, a sharper everyday",
    "title": "A fresh perspective",
    "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    "alt": "Barber creating a fresh haircut",
    "tall": true
  }
] as const;
export type GalleryItem = typeof gallery[number];
