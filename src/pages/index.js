import React from "react";
import { NoSsr } from '@material-ui/core';
import Board from "../components/Board";
import { AuthProvider, CoursesProvider, DiscussionsProvider, CommentsProvider} from "../context";

const Index = () => {

  return (
    <NoSsr>
      <AuthProvider>
        <CoursesProvider>
          <DiscussionsProvider>
            <CommentsProvider>
              <Board />
            </CommentsProvider>
          </DiscussionsProvider>
        </CoursesProvider>
      </AuthProvider>
    </NoSsr>
  )
}

export default Index;