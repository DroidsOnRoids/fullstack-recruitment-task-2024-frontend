import { useState } from "react";
import { AppPagination } from "@/components/pagination";
import { ProductList } from "@/components/products-list";
import { Cart } from "./components/cart";

export default function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="container py-2">
      <div className="grid grid-cols-12 gap-2">
        <main className="col-span-8">
          <ProductList
            items={[
              {
                id: "92a0e3ed-653a-471e-b478-15bc1ec21c83",
                name: "Generic Rubber Ball",
                description:
                  "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                image: "https://picsum.photos/seed/wFTSL3a3/480/480",
                price: 12.34,
                quantity: 5,
              },
              {
                id: "69cffe66-517a-4cba-ad1c-f65985c0f511",
                name: "Fantastic Granite Chicken",
                description:
                  "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
                image: "https://loremflickr.com/480/480?lock=8351499732123648",
                price: 52.0,
                quantity: 2,
              },
            ]}
          />
          <AppPagination
            currentPage={page}
            onChangePage={setPage}
            totalPages={4}
          />
        </main>
        <aside className="col-span-4">
          <Cart
            items={[
              {
                id: "92a0e3ed-653a-471e-b478-15bc1ec21c83",
                name: "Generic Rubber Ball",
                image: "https://picsum.photos/seed/wFTSL3a3/480/480",
                price: 12.34,
                quantity: 2,
              },
            ]}
          />
        </aside>
      </div>
    </div>
  );
}
