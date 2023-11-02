import Img from "../../../../public/Placeholder.jpg";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  imageSrc: string;
  // Add other properties here if needed
}

export const productsData: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      category: 'Category A',
      price: 10,
      imageSrc: Img.src,
    },
    {
      id: 2,
      title: 'Product 2',
      category: 'Category B',
      price: 20,
      imageSrc: Img.src,
      
    },
    {
      id: 3,
      title: 'Product 3',
      category: 'Category C',
      price: 30,
      imageSrc: Img.src,
    },
    {
      id: 4,
      title: 'Product 4',
      category: 'Category D',
      price: 40,
      imageSrc: Img.src,
    },
    {
      id: 5,
      title: 'Product 5',
      category: 'Category A',
      price: 50,
      imageSrc: Img.src,
    },
    {
      id: 6,
      title: 'Product 6',
      category: 'Category B',
      price: 60,
      imageSrc: Img.src,
    },
    {
      id: 7,
      title: 'Product 7',
      category: 'Category C',
      price: 70,
      imageSrc: Img.src,
    },
    {
      id: 8,
      title: 'Product 8',
      category: 'Category D',
      price: 80,
      imageSrc: Img.src,
    },
    {
      id: 9,
      title: 'Product 9',
      category: 'Category A',
      price: 90,
      imageSrc: Img.src,
    },
    {
      id: 10,
      title: 'Product 10',
      category: 'Category B',
      price: 100,
      imageSrc: Img.src,
    },
    {
      id: 11,
      title: 'Product 11',
      category: 'Category C',
      price: 110,
      imageSrc: Img.src,
    },
    {
      id: 12,
      title: 'Product 12',
      category: 'Category D',
      price: 120,
      imageSrc: Img.src,
    },

  ];
  
  export const categoriesData: string[] = ['Category A', 'Category B', 'Category C', 'Category D'];