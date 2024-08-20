import Products from "./components/Products";
import Cart from "./components/Cart";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-normal gap-5 p-24">
        <Cart/>
        <Products />
      </main>
  );
}
