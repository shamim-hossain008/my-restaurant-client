import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import "./index.css";
import AuthProviders from "./providers/AuthProviders.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      {/* Provide the client to your App QueryClientProvider   */}
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
            <Toaster />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
