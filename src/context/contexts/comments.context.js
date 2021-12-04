import React, { createContext, useContext, useReducer } from 'react';
import { CommentsReducer, initialState } from '../reducers/comments.reducer';

// Create context
const CommentStateContext = createContext();
const CommentDispatchContext = createContext();

// Hooks
export function useCommentState() {
  const context = useContext(CommentStateContext);
  if (context === undefined) {
    throw new Error("useCommentState must be used within a CommentsProvider.");
  }

  return context;
}

export function useCommentDispatch() {
  const context = useContext(CommentDispatchContext);
  if (context === undefined) {
    throw new Error("useCommentDispatch must be used within a CommentsProvider.");
  }

  return context;
}

// Comments Provider
export const CommentsProvider = ({ children }) => {
  const [comments, dispatch] = useReducer(CommentsReducer, initialState);
 
  return (
    <CommentStateContext.Provider value={comments}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};