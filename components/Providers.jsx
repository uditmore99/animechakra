"use client";

//for the errors which says you need to warp it inside providers

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
