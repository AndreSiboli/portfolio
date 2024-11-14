export interface CarouselType {
  animationTime: number;
  parentWidth: string;
  childWidth: string;
  margin: number;
  buttons: boolean;
  slide: boolean;
  autoSlide: boolean;
}

export interface CarouselTypeUser {
  animationTime?: number;
  parentWidth?: string;
  childWidth?: string;
  margin?: number;
  buttons?: boolean;
  slide?: boolean;
  autoSlide?: boolean;
}
