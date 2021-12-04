import React, { createContext, useContext, useReducer } from 'react';
import { DiscussionsReducer, initialState } from '../reducers/discussions.reducer';

// Create context
const DiscussionStateContext = createContext();
const DiscussionDispatchContext = createContext();

// Hooks
export function useDiscussionState() {
  const context = useContext(DiscussionStateContext);
  if (context === undefined) {
    throw new Error("useDiscussionState must be used within a DiscussionProvider.");
  }

  return context;
}

export function useDiscussionDispatch() {
  const context = useContext(DiscussionDispatchContext);
  if (context === undefined) {
    throw new Error("useDiscussionDispatch must be used within a DiscussionProvider.");
  }

  return context;
}

// Discussions Provider
export const DiscussionProvider = ({ children }) => {
  const [discussions, dispatch] = useReducer(DiscussionsReducer, initialState);
 
  return (
    <DiscussionStateContext.Provider value={discussions}>
      <DiscussionDispatchContext.Provider value={dispatch}>
        {children}
      </DiscussionDispatchContext.Provider>
    </DiscussionStateContext.Provider>
  );
};