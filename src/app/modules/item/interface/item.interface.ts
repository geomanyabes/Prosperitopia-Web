import { Category } from "../../category/interface/category.interface";

export interface Item {
    id: number;
    name: string;
    description: string;
    price?: number;
    category: Category;
  }