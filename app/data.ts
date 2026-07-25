export interface Bouquet {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export const BOUQUET_DATA: Bouquet[] = [
  {
    id: '1',
    name: 'Pink Graduation Teddy Bouquet',
    category: 'Graduation',
    image: '/images/bouquets/graduation-bouquet-1.png',
    description: 'Bouquet kelulusan bernuansa pink lembut dengan boneka wisuda lucu dan mawar pink.'
  },
  {
    id: '2',
    name: 'Royal Blue Butterfly Money Bouquet',
    category: 'Money',
    image: '/images/bouquets/money-bouquet-1.png',
    description: 'Bouquet uang kertas bernuansa biru-pink elegan dengan aksen kupu-kupu cantik.'
  },
  {
    id: '3',
    name: 'Chocolate Luxury Ferrero & SilverQueen',
    category: 'Snack',
    image: '/images/bouquets/snack-bouquet-2.png',
    description: 'Bouquet cokelat premium berisi SilverQueen, Ferrero Rocher, dan mawar maroon.'
  },
  {
    id: '4',
    name: 'Romantic Cream Rose & Ring Box',
    category: 'Flower',
    image: '/images/bouquets/flower-bouquet-3.png',
    description: 'Bouquet mawar krem elegan lengkap dengan kotak cincin di tengahnya.'
  },
  {
    id: '5',
    name: 'Fuchsia Bloom Joyful Ring Bouquet',
    category: 'Flower',
    image: '/images/bouquets/flower-bouquet-2.png',
    description: 'Bouquet bunga warna-warni cerah dengan wrapping fuchsia dan tempat cincin.'
  },
  {
    id: '6',
    name: 'Sweet Heart Yopi & Chocolate Delight',
    category: 'Snack',
    image: '/images/bouquets/snack-bouquet-1.png',
    description: 'Bouquet bentuk hati berisi permen Yopi berlimpah dan aneka cokelat manis.'
  },
  {
    id: '7',
    name: 'Elegant Pastel Sage & Ring Box',
    category: 'Flower',
    image: '/images/bouquets/flower-bouquet-1.png',
    description: 'Bouquet bunga pastel dengan wrapping warna sage green yang sangat estetik.'
  }
];