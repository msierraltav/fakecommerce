"use client";
import Products from "./components/Products";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-normal gap-5 p-24">
        <Products />
      </main>
  );
}
