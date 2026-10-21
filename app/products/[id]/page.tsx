import { notFound } from "next/navigation";
import products from "@/data/products.json";
import ProductDetailView from "@/components/product-detail-view";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
