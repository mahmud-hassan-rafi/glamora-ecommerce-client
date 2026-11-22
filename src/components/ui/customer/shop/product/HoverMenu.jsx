import React from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { IoShuffleOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@components/ui/shadcn/tooltip";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "@features/cart/cartSlice";
import { animateToCart } from "@utils/animateToCart";
import { useAppContext } from "@context/AppContext";

const menuItems = [
  {
    id: 1,
    name: "cart",
    icon: BsCart2,
    tooltipText: "Add to Cart",
    handleClick: (product, dispatch, imageRef, cartIconRef) => {
      animateToCart(imageRef.current, cartIconRef.current);
      setTimeout(() => {
        dispatch(ADD_TO_CART(product));
      }, 800);
    },
  },
  {
    id: 2,
    name: "quickView",
    icon: IoIosSearch,
    tooltipText: "Quick view",
  },
  {
    id: 3,
    icon: IoShuffleOutline,
    tooltipText: "compare",
  },
  {
    id: 4,
    icon: IoIosHeartEmpty,
    tooltipText: "Add to wishlist",
  },
];

const HoverMenu = ({ product }) => {
  const dispatch = useDispatch();
  const { cartIconRef, imageRef } = useAppContext();

  return (
    <div className="absolute top-5 right-5 flex flex-col items-center justify-center bg-emerald-950/80 p-2 h-37.5 w-10 text-[22px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-5 group-hover:translate-x-0 ">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            className="w-full h-1/4 flex items-center justify-center text-white"
            onClick={(e) => {
              e.stopPropagation();
              item.handleClick
                ? item.handleClick(product, dispatch, imageRef, cartIconRef)
                : null;
            }}
          >
            <Tooltip>
              <TooltipContent side="left" sideOffset={5}>
                <p>{item.tooltipText}</p>
              </TooltipContent>
              <TooltipTrigger>
                <Icon />
              </TooltipTrigger>
            </Tooltip>
          </a>
        );
      })}
    </div>
  );
};

export default HoverMenu;
