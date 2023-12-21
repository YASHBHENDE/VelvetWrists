
import { atom } from "recoil";
import { productdetail_array } from "../productsDetails";

export const CartProducts = atom<productdetail_array>({
    key: 'CartProducts', 
    default: [], 
});