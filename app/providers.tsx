"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import QueryProvider from "@/lib/query/QueryProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryProvider>{children}</QueryProvider>
    </Provider>
  );
}
