
import { Input } from "@nextui-org/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import {setStringQuery} from"@/redux/features/paginationSlice"

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  const dispatch = useAppDispatch();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    term ? params.set("query", term) : params.delete("query");
    replace(`${pathName}?${params.toString()}`)
    dispatch(setStringQuery(term));
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
        // todo: change to value when have state
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
