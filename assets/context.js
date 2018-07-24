import { createContext } from 'react'

const NavContext = createContext({});

export const NavProvider = NavContext.Provider;
export const NavConsumer = NavContext.Consumer;
