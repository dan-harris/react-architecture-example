import React, {
  useContext,
  Provider,
  createContext,
  Context,
  FunctionComponent
} from "react";

type ViewContextData<D = {}, A = {}, P = {}, F = {}> = {
  // or maybe this is all a second level under 'entities'??
  data: D;
  actions: A;
  // custom calculations / names?
  permissions: P;
  // feature flags only? let release flags be wherever they are needed??
  flags: F;
  // internal flag
  _isInitialised: boolean;
};

const useView = (ViewContext: Context<ViewContextData>) => {
  const viewContext = useContext(ViewContext);
  if (!viewContext) {
    throw new Error("ViewContext is missing a Provider declaration");
  }
  return viewContext;
};

const UserListViewContext = createContext<ViewContextData>(undefined);

const UserListViewProvider: FunctionComponent = ({ children }) => {
  return (
    <UserListViewContext.Provider value={}>
      {children}
    </UserListViewContext.Provider>
  );
};
