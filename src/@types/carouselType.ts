export interface CarouselType {
  animationTime: number;
  parentWidth: number;
  childWidth: string;
  margin: number;
  buttons: boolean;
  slide: boolean;
  autoSlide: boolean;
}

export interface CarouselTypeUser {
  animationTime?: number;
  parentWidth?: number;
  childWidth?: string;
  margin?: number;
  buttons?: boolean;
  slide?: boolean;
  autoSlide?: boolean;
}
