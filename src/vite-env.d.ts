/// <reference types="vite/client" />

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment | null): {
    render: (node: unknown) => void;
    unmount: () => void;
  };
}
