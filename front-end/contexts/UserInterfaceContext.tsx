import { createContext, useState } from "react";

interface UserInterfaceItems {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const UserInterfaceContext = createContext({} as UserInterfaceItems);

export function UserInterfaceProvider({ children, ...rest }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <UserInterfaceContext.Provider
      value={{
        isDrawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </UserInterfaceContext.Provider>
  );
}
