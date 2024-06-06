import { Product } from "../../types";
import { ProductCard } from "./product-card";

interface ProductListProps {
  items: Product[];
}

export const ProductList = ({ items }: ProductListProps) => (
  <div className="grid grid-cols-3 gap-2">
    {items.map((item) => (
      <ProductCard key={item.id} {...item} />
    ))}
  </div>
);
