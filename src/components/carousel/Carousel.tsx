// "use client";

// import {
//   MouseEvent,
//   ReactElement,
//   TouchEvent,
//   cloneElement,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// import styles from "@/styles/carousel/Carousel.module.scss";

// import { CarouselType, CarouselTypeUser } from "@/_types/carouselType";

// interface PropsType {
//   carouselConfig: CarouselTypeUser;
//   children: ReactElement[];
// }

// export default function Carousel(props: PropsType) {
//   const { carouselConfig, children } = props;

//   const configBase = {
//     animationTime: 250,
//     parentWidth: '1200px',
//     childWidth: "calc(100% - 200px)",
//     margin: 5,
//     buttons: true,
//     slide: true,
//     autoSlide: false,
//   };

//   const [config, setConfig] = useState<CarouselType>({
//     ...configBase,
//     ...carouselConfig,
//   });

//   const [current, setCurrent] = useState(2);
//   const parent = useRef<HTMLDivElement>(null);
//   const wrapper = useRef<HTMLDivElement>(null);
//   const allowShift = useRef(false);
//   const dragging = useRef(false);
//   const initial = useRef(0);
//   const translate = useRef(0);
//   const initialTimeClick = useRef(0);
//   const interval = useRef<NodeJS.Timeout>();
//   const intervalAnimation = useRef<NodeJS.Timeout>();

//   //It'll fix the size on first loading
//   useEffect(() => {
//     const move = nextMove(current);
//     makeMove(move);
//   }, []);

//   //Always the user resize the page, it'll fix the carousel
//   useEffect(() => {
//     function resize() {
//       const move = nextMove(current);
//       makeMove(move);
//     }

//     window.addEventListener("resize", resize);

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, [current]);

//   useEffect(() => {
//     if (!config.autoSlide) return;

//     if (interval.current) {
//       clearTimeout(interval.current);
//     }

//     interval.current = setTimeout(() => {
//       changeItem(1);
//     }, 8000);

//     return () => {
//       clearTimeout(interval.current);
//     };
//   }, [current]);

//   //This calculate exactly the next move
//   function nextMove(current: number) {
//     const par = parent.current;
//     const child = wrapper.current;
//     if (!par || !child) return 0;

//     const width = child.children[0].clientWidth;

//     return (
//       (width + 2 * config.margin) * current -
//       (par.clientWidth / 2 - width / 2 - config.margin)
//     );
//   }

//   //Solve this "gambiarra" later
//   function makeMove(to: number) {
//     if (!wrapper.current) return;
//     if (to < 0) {
//       wrapper.current.style.transform = `translate3d(${Math.abs(to)}px, 0, 0)`;
//       return;
//     }
//     wrapper.current.style.transform = `translate3d(-${to}px, 0, 0)`;
//   }

//   //This make the carousel infinite
//   function infiniteCarousel(num: 1 | -1) {
//     if (!wrapper.current) return;
//     const children = wrapper.current.childNodes.length;
//     const initialItem = 2;
//     const lastItem = children - 3;

//     addAnimation(true);
//     if (num === 1) {
//       makeMove(nextMove(1));
//     } else if (num === -1) {
//       makeMove(nextMove(children - 2));
//     }

//     setTimeout(() => {
//       addAnimation(false);
//       if (num === 1) {
//         const moveTo = nextMove(lastItem);
//         makeMove(moveTo);
//         setCurrent(lastItem);
//       } else if (num === -1) {
//         const moveTo = nextMove(initialItem);
//         makeMove(moveTo);
//         setCurrent(initialItem);
//       }
//     }, config.animationTime);
//     clearShift();
//   }

//   //this is the core function
//   function changeItem(num: 1 | 0 | -1) {
//     if (!wrapper.current || dragging.current || allowShift.current) return;

//     const nextItem = current + num;
//     const moveTo = nextMove(nextItem);
//     const children = wrapper.current.childNodes.length - 1;
//     allowShift.current = true;

//     if (nextItem <= 1) {
//       infiniteCarousel(1);
//       return;
//     }
//     if (nextItem >= children - 1) {
//       infiniteCarousel(-1);
//       return;
//     }

//     addAnimation(true);
//     makeMove(moveTo);
//     clearAnimation();
//     clearShift();
//     setCurrent(nextItem);
//   }

//   function addAnimation(current: boolean) {
//     if (!wrapper.current) return;

//     wrapper.current.className = `${styles.carousel_wrapper} ${
//       current && styles.animation
//     }`;
//   }

//   function clearAnimation() {
//     if (intervalAnimation.current) {
//       clearTimeout(intervalAnimation.current);
//     }

//     intervalAnimation.current = setTimeout(() => {
//       addAnimation(false);
//     }, config.animationTime);
//   }

//   function clearShift() {
//     setTimeout(() => {
//       allowShift.current = false;
//     }, config.animationTime);
//   }

//   function dragStart(e: MouseEvent | TouchEvent) {
//     if (!config.slide) return;
//     const main = parent.current;
//     const slider = wrapper.current;
//     if (!main || !slider || allowShift.current) return;

//     dragging.current = true;

//     const style = window.getComputedStyle(slider);
//     const matrix = new WebKitCSSMatrix(style.transform);
//     const currentTranslateX = matrix.m41;
//     translate.current = Number(currentTranslateX);
//     initialTimeClick.current = e.timeStamp;

//     if ("touches" in e) {
//       initial.current = -e.touches[0].pageX;
//     } else {
//       initial.current = -e.pageX;
//     }
//   }

//   function dragMove(e: MouseEvent | TouchEvent) {
//     if (!config.slide) return;

//     const main = parent.current;
//     const slider = wrapper.current;
//     if (!main || !slider || !dragging.current || allowShift.current) return;

//     if ("touches" in e) {
//       slider.style.transform = `translate3d(${
//         translate.current - (-e.touches[0].clientX - initial.current)
//       }px, 0px, 0px)`;
//     } else {
//       slider.style.transform = `translate3d(${
//         translate.current - (-e.pageX - initial.current)
//       }px, 0px, 0px)`;
//     }

//     main.style.cursor = "grabbing";
//   }

//   function dragEnd(e: MouseEvent | TouchEvent) {
//     if (!config.slide) return;

//     const main = parent.current;
//     const slider = wrapper.current;
//     if (!main || !slider) return;
//     dragging.current = false;
//     if (allowShift.current) return;

//     main.style.cursor = "auto";
//     const width = main.clientWidth - 300;
//     const howFast = e.timeStamp - initialTimeClick.current;

//     function movement(position: number) {
//       if (
//         initial.current < -position - width / 2 ||
//         (howFast <= 200 && initial.current < -position)
//       ) {
//         changeItem(1);
//         return;
//       }
//       if (
//         initial.current > -position + width / 2 ||
//         (howFast <= 200 && initial.current > -position)
//       ) {
//         changeItem(-1);
//         return;
//       }
//       changeItem(0);
//     }

//     if ("touches" in e) {
//       const pos = e.changedTouches[0].pageX;
//       movement(pos);
//     } else {
//       const pos = e.pageX;
//       movement(pos);
//     }
//   }

//   function dragOut(e: MouseEvent | TouchEvent) {
//     dragging.current = false;
//   }

//   return (
//     <div
//       className={styles.carousel}
//       ref={parent}
//       style={{ maxWidth: `${config.parentWidth}` }}
//     >
//       {config.buttons && (
//         <div className={styles.carousel_buttons}>
//           <button onClick={() => changeItem(-1)} aria-label="previous">
//             <FaAngleLeft />
//           </button>
//           <button onClick={() => changeItem(1)} aria-label="next">
//             <FaAngleRight />
//           </button>
//         </div>
//       )}

//       <div
//         className={`${styles.carousel_wrapper}`}
//         ref={wrapper}
//         style={{
//           transform: `translate3d(-${0}px, 0, 0)`,
//         }}
//         onMouseDown={(e) => dragStart(e)}
//         onMouseMove={(e) => dragMove(e)}
//         onMouseUp={(e) => dragEnd(e)}
//         onMouseOut={(e) => dragOut(e)}
//         onTouchStart={(e) => dragStart(e)}
//         onTouchMove={(e) => dragMove(e)}
//         onTouchEndCapture={(e) => dragEnd(e)}
//       >
//         {children.map((item) =>
//           cloneElement(item, {
//             style: {
//               margin: `0 ${config.margin}px`,
//             },
//           })
//         )}
//       </div>
//     </div>
//   );
// }
