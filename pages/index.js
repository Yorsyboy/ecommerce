import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ FeaturedProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={FeaturedProduct} />
      <NewProducts products={newProducts}/>
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch the total number of products in the collection
  const totalProducts = await Product.countDocuments();

  // Generate a random index within the range of total products
  const randomIndex = Math.floor(Math.random() * totalProducts);

  // Fetch a random product using skip and limit
  const FeaturedProduct = await Product.findOne().skip(randomIndex).lean();

  // fetch 10 new products in descending order
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10})

  return {
    props: { 
      FeaturedProduct: JSON.parse(JSON.stringify(FeaturedProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  };
}
