import { ReactNode } from "react";

export interface MovieDataType {
    id: string;
    title: string;
    thumbnail: {
      trending?: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }
  
export interface LayoutProps {
    children: ReactNode;
}