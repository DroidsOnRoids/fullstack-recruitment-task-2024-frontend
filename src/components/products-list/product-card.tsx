import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "../../types";
import { priceFormatter } from "../../lib/utils";

interface ProductCardProps extends Product {}

export const ProductCard = ({
  name,
  description,
  image,
  price,
  quantity,
}: ProductCardProps) => (
  <Card>
    <img className="object-cover h-36 w-full rounded-t-lg" src={image} />
    <CardHeader>
      <CardTitle className="truncate">{name}</CardTitle>
      <CardDescription className="truncate">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{`Price: ${priceFormatter(price)}`}</p>
      <p>{`Quantity: ${quantity}`}</p>
    </CardContent>
    <CardFooter>
      <div className="flex w-full flex-col space-y-2 ">
        <Input type="number" max="10" placeholder="quantity" />
        <Button className="w-full" type="submit">
          Add to cart
        </Button>
      </div>
    </CardFooter>
  </Card>
);
