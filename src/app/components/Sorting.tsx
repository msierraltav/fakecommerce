import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { setOrder } from "@/redux/features/paginationSlice";
import { Chip } from "@nextui-org/react";

export default function Sorting() {
  const sort = useAppSelector((state) => state.paginationReducer.sort);
  const dispatch = useAppDispatch();

  interface ChipButtonProps{
    children: any;
    value: string;
  }

  const ChipButton = ({children, value} : ChipButtonProps) => {
    const orderHandler = () =>{
        dispatch(setOrder(value));
    }
    const variant = sort === value ? "solid" : "flat";

    return(
        <Chip variant={variant}  color="default" className="cursor-pointer" onClick={orderHandler}> {children} </Chip>
    )
  }

  return (
    <div className="flex flex-row justify-items-start">
      <ChipButton value="-price">
        🪙⬆️
      </ChipButton>
      <ChipButton value="price">
        🪙⬇️
      </ChipButton>
      <ChipButton value="-rating">
        ⭐⬆️
      </ChipButton>
      <ChipButton value="rating">
        ⭐⬇️
      </ChipButton>
      <ChipButton value="id">
        🆔⬆️
      </ChipButton>
      <ChipButton value="-id">
        🆔⬇️
      </ChipButton>
    </div>
  );
}
