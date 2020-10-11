import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { createReduxStore } from "./store/root";
import { Provider as ReduxProvider } from "react-redux";

export const App: FunctionComponent = () => {
  const store = createReduxStore();
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <div className="dio-stack dio-height--fill dio-align--center">
          <h1>🚀 Ultimate Awesome App</h1>
          <div>
            <AppRoutes />
          </div>
        </div>
      </ReduxProvider>
    </BrowserRouter>
  );
};
