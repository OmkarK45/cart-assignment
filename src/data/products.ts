import { Product } from '@/types';

export const productsDb: Array<Product> = [
  {
    id: 1,
    brand: 'Louis Vuitton',
    ideal_for: 'men',
    title: 'Oversize Puffer',
    imageUrl:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-oversize-puffer-ready-to-wear--HMB93EL19MU1_PM2_Front%20view.png?wid=656&hei=656',
    price: 599,
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    brand: 'Louis Vuitton',
    ideal_for: 'men',
    title: 'Mouline Monogram Regular Shirt',
    imageUrl:
      'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mouline-monogram-regular-shirt-ready-to-wear--HNFS6WH13640_PM2_Front%20view.png?wid=656&hei=656',
    price: 699,
    size: ['S', 'M', 'L'],
  },
  {
    id: 3,
    brand: 'Nike',
    ideal_for: 'women',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/754852ef-d44a-40d1-855e-a8050c23765f/air-jordan-crew-sweatshirt-bltvmR.png',
    title: "Women's Crew Sweatshirt 1 Color",
    price: 899,
    size: ['S', 'M', 'L'],
  },
  {
    id: 4,
    brand: 'Nike',
    imageUrl:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d18f2119-b264-4973-ae17-990171f8932a/sportswear-tech-fleece-windrunner-hoodie-4mNtRs.png',
    title: 'Nike Sportswear Tech Fleece Windrunner',
    price: 1099,
    size: ['S', 'M', 'L', 'XL'],
    ideal_for: 'women',
  },
  {
    id: 5,
    brand: 'GUCCI',
    imageUrl:
      'https://media.gucci.com/style/HEXEAF2DC_Center_0_0_800x800/1643238955/646953_XJD7O_9095_001_100_0000_Light-Cotton-Gucci-Firenze-1921-hooded-sweatshirt.jpg',
    title: 'Cotton Gucci Firenze 1921 Hooded Sweatshirt',
    price: 1300,
    size: ['S', 'M', 'L'],
    ideal_for: 'men',
  },
  {
    id: 6,
    brand: 'GUCCI',
    ideal_for: 'women',
    imageUrl:
      'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1606326303/644582_XJC3T_2102_001_100_0000_Light-The-North-Face-x-Gucci-GG-canvas-and-shearling-jacket.jpg',
    title: 'The North Face x Gucci GG canvas and shearling jacket',
    price: 1800,
    size: ['L', 'XL'],
  },
  {
    id: 7,
    brand: 'H&M',
    ideal_for: 'men',
    imageUrl:
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2Fa5%2F6da5dc60d7a7daca22e973f3a909adb7a99c8825.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    title: 'Relaxed Fit Casual Shirt',
    price: 1999,
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    brand: 'H&M',
    ideal_for: 'women',
    imageUrl:
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2F20%2Fbc20e9bb6e50ccaaceaa180f156ba384c249ea23.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    title: 'Print-motif T-Shirt',
    price: 799,
    size: ['S', 'M', 'L', 'XL'],
  },
];
