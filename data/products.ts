export interface Product {
  id: number;
  name: string;
  material: string;
  price: string;
  type: string;
  image: string;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Veda 1 Sectioned Sofa",
    material: "Figured Walnut · Brass Hardware",
    price: "Rs 28,000",
    type: "seating",
    image: "/images/VEDA 1  IMAGES/1ST IMAGE.jpg",
    images: [
      "/images/VEDA 1  IMAGES/1ST IMAGE.jpg",
      "/images/VEDA 1  IMAGES/IMAGE 2.jpg",
      "/images/VEDA 1  IMAGES/IMAGE 3.jpg",
      "/images/VEDA 1  IMAGES/IMAGE 4.jpg"
    ],
  },
  {
    id: 2,
    name: "Veda 2 Sectioned Sofa",
    material: "Figured Walnut · Brass Hardware",
    price: "Rs 28,000",
    type: "seating",
    image: "/p2.png",
  },
  {
    id: 3,
    name: "TPS Signature Armchair",
    material: "Oak Wood · Grey Linen",
    price: "Rs 25,000",
    type: "seating",
    image: "/p3.png",
  },
  {
    id: 4,
    name: "Setu Study Desk (Oak)",
    material: "Oak Wood · Powder Coated Steel",
    price: "Rs 18,000",
    type: "tables",
    image: "/p4.png",
  },
  {
    id: 5,
    name: "Jharna Study Table Set",
    material: "Walnut Wood",
    price: "Rs 20,000",
    type: "tables",
    image: "/p5.png",
  },
  {
    id: 6,
    name: "Setu Study Desk (Walnut)",
    material: "Walnut Wood",
    price: "Rs 18,000",
    type: "tables",
    image: "/p6.png",
  },
  {
    id: 7,
    name: "Krishana Side Table",
    material: "Walnut Wood · Brass Hardware",
    price: "Rs 15,000",
    type: "storage",
    image: "/p7.png",
  },
  {
    id: 8,
    name: "Kosha Cube Nightstand",
    material: "Walnut Wood · Brass",
    price: "Rs 15,000",
    type: "storage",
    image: "/p8.png",
  },
  {
    id: 9,
    name: "Mitra Pet Nightstand",
    material: "Walnut Wood · Brass",
    price: "Rs 15,000",
    type: "storage",
    image: "/p9.png",
  },
];

export default products;
