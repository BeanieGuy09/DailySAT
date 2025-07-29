import { DesmosCalculator } from "./types/practice/desmos";
//t
declare global {
    interface Window {
      Desmos: {
        GraphingCalculator: (element: HTMLElement) => DesmosCalculator;
      };
    }
  }
  
export {};  