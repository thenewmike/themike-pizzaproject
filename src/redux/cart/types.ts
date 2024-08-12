export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageURL: string;
  type: string;
  size: number;
  count: number;
};

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  imageURL: string;
  type: string;
  size: number;
  count: number;
};
export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
