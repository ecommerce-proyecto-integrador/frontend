import Img from '../public/Placeholder.jpg'

export const product = {
    id: "3",
    name: "Mono en mesa redonda",
    description: "mono en mesa redonda",
    price: 100,
    brand: "Monobrand",
    category: "Category C",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:Img.src,
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image:Img.src,
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:Img.src,
      },
    ],
    reviews: [
      {
        id: "2",
        userId: "2",
        productId: "3",
        rating: 4,
        comment:
          "mono en mesa redonda bottom text",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "2",
          name: "Carlosweed",
          email: "example1@gmail.com",
          emailVerified: null,
          image:Img.src,
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "3",
        userId: "1",
        productId: "3",
        rating: 4,
        comment: "top text mono mesa redonda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "1",
          name: "ElMatoi",
          email: "example@gmail.com",
          emailVerified: null,
          image:Img.src,
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  };