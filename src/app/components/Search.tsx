import { Input } from "@nextui-org/react";

export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <Input
        className="flex w-full flex-wrap gap-4 md:flex-nowrap"
        label="Search"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
