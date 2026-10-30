export interface Product {
  id: number;
  name: string;
  material: string;
  price: string;
  type: string;
  image: string;
  images?: string[];
  specifications?: {
    overall: {
      width: string;
      depth: string;
      height: string;
      unit: string;
      note?: string;
    };
    components: {
      label: string;
      value: string;
    }[];
  };
}
export const products: Product[] = [
  {
    id: 1,
    name: "Veda 1 Sectioned Sofa",
    material: "Figured Walnut · Brass Hardware",
    price: "Rs 28,000",
    type: "seating",
    image: "/images/veda-1-1.jpg",
    images: [
      "/images/veda-1-1.jpg",
      "/images/veda-1-2.jpg",
      "/images/veda-1-3.jpg",
      "/images/veda-1-4.jpg"
    ],
  },
  {
    id: 2,
    name: "Veda 2 Sectioned Sofa",
    material: "Figured Walnut · Brass Hardware",
    price: "Rs 28,000",
    type: "seating",
    image: "/p2.png",
    images: [
      "/p2.png",
      "/images/veda-2-2.jpg"
    ]
  },
  {
    id: 3,
    name: "TPS Signature Armchair",
    material: "Oak Wood · Grey Linen",
    price: "Rs 25,000",
    type: "seating",
    image: "/images/armchair1.jpg",
    images: [
      "/images/armchair1.jpg",
      "/images/armchair2.jpg"
    ],
    overall: {
      width: "850",
      depth: "850",
      height: "850",
      unit: "mm",
      note: "Overall size: 850 W × 850 D × 850 H mm, including the side table and legs."
    },
    components: [
      { label: "Overall width", value: "850 mm" },
      { label: "Overall depth", value: "850 mm" },
      { label: "Overall height", value: "850 mm" },
      { label: "Clear seating width", value: "520 mm" },
      { label: "Seat depth", value: "520 mm" },
      { label: "Seat height from floor", value: "430 mm" },
      { label: "Seat cushion thickness", value: "120 mm" },
      { label: "Backrest height above seat", value: "400–420 mm" },
      { label: "Backrest thickness", value: "80–100 mm" },
      { label: "Armrest height from floor", value: "600–650 mm" },
      { label: "Armrest / side-table width", value: "250–280 mm" },
      { label: "Side-table top thickness", value: "25–30 mm" },
      { label: "Bookshelf opening width", value: "220–250 mm" },
      { label: "Bookshelf opening height", value: "300–350 mm" },
      { label: "Side panel thickness", value: "18–25 mm" },
      { label: "Leg height", value: "180–200 mm" },
      { label: "Leg thickness", value: "35–45 mm" }
    ]
  }
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
    name: "Setu Study Desk",
      material: "Walnut Wood · Brass Hardware",
        price: "Rs 18,000",
          type: "tables",
            image: "/images/setu-desk.jpg",
              images: [
                "/images/setu-desk.jpg"
              ],
                overall: {
    width: "1400",
      depth: "600",
        height: "750",
          unit: "mm",
            note: "Overall size: 1400 W × 600 D × 750 H mm."
  },
  components: [
    { label: "Overall desk width", value: "1400 mm" },
    { label: "Overall desk depth", value: "600 mm" },
    { label: "Overall height", value: "750 mm" },
    { label: "Tabletop thickness", value: "25–30 mm" },
    { label: "Left curved support thickness", value: "30–35 mm" },
    { label: "Main tabletop usable width", value: "1400 mm" },
    { label: "Right drawer cabinet width", value: "380 mm" },
    { label: "Drawer cabinet depth", value: "500 mm" },
    { label: "Drawer cabinet height", value: "500 mm" },
    { label: "Number of drawers", value: "3" },
    { label: "Individual drawer front height", value: "145–155 mm" },
    { label: "Drawer depth", value: "400–450 mm" },
    { label: "Under-table drawer width", value: "350 mm" },
    { label: "Under-table drawer height", value: "70-90 mm" },
    { label: "Leg clearance from floor", value: "720 mm approximately" }
  ]
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
