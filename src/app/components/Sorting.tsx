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
    const isSelected = sort.includes(value) ? "solid" : "flat";
    const currentOrderdirectionDesc = sort.startsWith('-')? true : false
    const orderIcon = currentOrderdirectionDesc ? "⬆️" : "⬇️";
    // change to oposite direction
    const prefix = currentOrderdirectionDesc? '' : '-';

    const orderHandler = () =>{
        dispatch(setOrder(`${prefix}${value}`));
    }
    return(
        <Chip variant={isSelected}  color="default" className="cursor-pointer" onClick={orderHandler}> {children} {orderIcon}</Chip>
    )
  }

  return (
    <div className="flex w-full flex-row justify-end gap-2">
      <ChipButton value="price">
        🪙
      </ChipButton>
      <ChipButton value="rating">
        ⭐
      </ChipButton>
      <ChipButton value="id">
        🆔
      </ChipButton>
    </div>
  );
}
