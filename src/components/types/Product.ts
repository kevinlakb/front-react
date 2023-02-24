export type Product = {
  sku: string;
  name: string;
  stockQuantity: number;
  description: string;
  price: number;
  title: string;
  permalink: string;
  barcode: string;
  reviewRate: any;
  virtual: any;
  downloadable: any;
  productByBranchOffice: {
    isActive: number;
    isVisible: number;
    showWithoutStock: number;
    catalogListing: number;
    featured: number;
    onSale: number;
    purchasable: number;
    soldIndividually: number;
    backordersAllowed: number;
  };
  image: { url: string };
  provider: { name: string; description: string };
  brand: { name: string; description: string };
  productType: { name: string };
  productStatus: { name: string };
  skuProducts: any;
  category: {
    name: string;
    title: string;
    description: string;
    isActive: boolean;
    subcategories: { name: string }[];
  };
  keywords: { name: string; description: string }[];
};
