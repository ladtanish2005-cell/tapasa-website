export interface Product {
  id: number;
  name: string;
  material: string;
  price: string;
  type: string;
  image: string;
  images?: string[];
  specs?: { label: string; value: string }[];
  specifications?: {
    overall?: {
      width: string;
      depth: string;
      height: string;
      unit: string;
      note?: string;
    };
    components?: {
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
      "/images/veda-1-2.jpg"
    ],
    specifications: {
      overall: {
        width: "1800",
        depth: "700",
        height: "750",
        unit: "mm"
      },
      components: [
        { label: "Seating section width", value: "1000 mm" },
        { label: "Bookshelf section width", value: "800 mm" },
        { label: "Seat height from floor", value: "420 mm" },
        { label: "Seat depth", value: "500–550 mm" },
        { label: "Backrest height above seat", value: "300–330 mm" },
        { label: "Wooden frame thickness", value: "35–50 mm" },
        { label: "Leg height", value: "150 mm" }
      ]
    }
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
    specifications: {
      overall: {
        width: "850",
        depth: "850",
        height: "850",
        unit: "mm",
        note: "Overall size: 850 W x 850 D x 850 H mm, including the side table and legs."
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
        { label: "Backrest thickness", value: "80-100 mm" },
        { label: "Armrest height from floor", value: "600-650 mm" },
        { label: "Armrest / side-table width", value: "250-280 mm" },
        { label: "Side-table top thickness", value: "25-30 mm" },
        { label: "Bookshelf opening width", value: "220-250 mm" },
        { label: "Bookshelf opening height", value: "300-350 mm" },
        { label: "Side panel thickness", value: "18-25 mm" },
        { label: "Leg height", value: "180-200 mm" },
        { label: "Leg thickness", value: "35-45 mm" }
      ]
    }
overall: {
      width: "850",
      depth: "850",
      height: "850",
      unit: "mm",
      note: "Overall size: 850 W x 850 D x 850 H mm, including the side table and legs."
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
      { label: "Backrest thickness", value: "80-100 mm" },
      { label: "Armrest height from floor", value: "600-650 mm" },
      { label: "Armrest / side-table width", value: "250-280 mm" },
      { label: "Side-table top thickness", value: "25-30 mm" },
      { label: "Bookshelf opening width", value: "220-250 mm" },
      { label: "Bookshelf opening height", value: "300-350 mm" },
      { label: "Side panel thickness", value: "18-25 mm" },
      { label: "Leg height", value: "180-200 mm" },
      { label: "Leg thickness", value: "35-45 mm" }
    ]
  }
  },
{
  id: 4,
    name: "Setu Study Desk (Oak)",
      material: "Oak Wood · Powder Coated Steel",
        price: "Rs 18,000",
          type: "tables",
            image: "/images/setu-desk.jpg",

              specifications: {
    components: [
      { label: "Tabletop thickness", value: "25-30 mm" },
      { label: "Left curved support thickness", value: "30-35 mm" },
      { label: "Main tabletop usable width", value: "1400 mm" },
      { label: "Right drawer cabinet width", value: "380 mm" },
      { label: "Drawer cabinet depth", value: "500 mm" },
      { label: "Drawer cabinet height", value: "500 mm" },
      { label: "Number of drawers", value: "3" },
      { label: "Individual drawer front height", value: "145-155 mm" },
      { label: "Drawer depth", value: "400-450 mm" },
      { label: "Under-table drawer width", value: "350 mm" },
      { label: "Under-table drawer height", value: "70-90 mm" },
      { label: "Leg clearance from floor", value: "720 mm approximately" }
    ]
  }
},
{
  id: 5,
    name: "Jharna Study Table Set",
      material: "Walnut Wood",
        price: "Rs 20,000",
          type: "tables",
            image: "/p5.png",
              images: [
                "/p5.png",
                "/images/jharna-study-desk.jpg"
              ],
                specs: [
                  { label: "Overall desk footprint", value: "2000 W x 650 D x 750 H mm" },
                  { label: "Main working desk width", value: "1400 mm" },
                  { label: "Left storage cabinet width", value: "600 mm" },
                  { label: "Main desk depth", value: "650 mm" },
                  { label: "Storage cabinet depth", value: "550 mm" },
                  { label: "Main desk height", value: "750 mm" },
                  { label: "Tabletop thickness", value: "30 mm" },
                  { label: "Storage cabinet height", value: "620 mm" },
                  { label: "Number of cabinet drawers", value: "3" },
                  { label: "Individual drawer front height", value: "170-180 mm" },
                  { label: "Under-table drawer width", value: "450 mm" },
                  { label: "Under-table drawer height", value: "80 mm" },
                  { label: "Curved side support thickness", value: "30-40 mm" },
                  { label: "Knee clearance height", value: "650-680 mm" },
                  { label: "Bookshelf dimensions", value: "1200 W x 350 H x 250 D mm" },
                  { label: "Tabletop material", value: "Oak veneer plywood" },
                  { label: "Curved side panel material", value: "Bent plywood" },
                  { label: "Storage cabinet material", value: "Plywood with oak veneer" },
                  { label: "Drawer fronts", value: "MDF with matte laminate" },
                  { label: "Drawer channels", value: "Soft-close metal runners" },
                  { label: "Surface finish", value: "Matte PU wood polish" }
                ],
                  specifications: {
    components: [
      { label: "Overall desk footprint", value: "2000 W x 650 D x 750 H mm" },
      { label: "Main working desk width", value: "1400 mm" },
      { label: "Left storage cabinet width", value: "600 mm" },
      { label: "Main desk depth", value: "650 mm" },
      { label: "Storage cabinet depth", value: "550 mm" },
      { label: "Main desk height", value: "750 mm" },
      { label: "Tabletop thickness", value: "30 mm" },
      { label: "Storage cabinet height", value: "620 mm" },
      { label: "Number of cabinet drawers", value: "3" },
      { label: "Individual drawer front height", value: "170-180 mm" },
      { label: "Under-table drawer width", value: "450 mm" },
      { label: "Under-table drawer height", value: "80 mm" },
      { label: "Curved side support thickness", value: "30-40 mm" },
      { label: "Knee clearance height", value: "650-680 mm" },
      { label: "Bookshelf dimensions", value: "1200 W x 350 H x 250 D mm" },
      { label: "Tabletop material", value: "Oak veneer plywood" },
      { label: "Curved side panel material", value: "Bent plywood" },
      { label: "Storage cabinet material", value: "Plywood with oak veneer" },
      { label: "Drawer fronts", value: "MDF with matte laminate" },
      { label: "Drawer channels", value: "Soft-close metal runners" },
      { label: "Surface finish", value: "Matte PU wood polish" }
    ]
  }
},
{
  id: 6,
    name: "Setu Study Desk (Walnut)",
      material: "Walnut Wood",
        price: "Rs 18,000",
          type: "tables",
            image: "/images/setu-desk.jpg",
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
