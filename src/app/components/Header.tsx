import Cart from "@/app/components/Cart";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-between bg-gray-500 px-5 py-5">
      <div className="text-2xl font-bold">Fake Store</div>
      <Cart />
    </div>
  );
}
