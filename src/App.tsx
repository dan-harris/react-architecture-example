import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>🚀 Ultimate Awesome App</h1>
        <div>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};
