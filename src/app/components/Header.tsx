import Cart from "@/app/components/Cart";

export default function Header() {
  return (
    <div className="flex w-full justify-between px-5 bg-gray-500 py-5 sticky top-0 z-50">
      <div className="text-2xl font-bold">Fake Store</div>
      <Cart />
    </div>
  );
}
