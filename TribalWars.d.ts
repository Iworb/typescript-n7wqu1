export {};

declare global {
  interface Window {
    Dialog: {
      show: (id: string, content: string) => void;
    };
  }
}
