import { loginUser, logout } from './actions/auth.actions';
import { getCourses, register, unregister } from './actions/courses.actions';
import { getComments, addComment, deleteComment } from './actions/comments.actions';
import { getDiscussions, addDiscussion } from './actions/discussions.actions';
import { AuthProvider, useAuthDispatch, useAuthState } from './contexts/auth.context';
import { CoursesProvider, useCourseDispatch, useCourseState } from './contexts/courses.context';
import { CommentsProvider, useCommentDispatch, useCommentState } from './contexts/comments.context';
import { DiscussionsProvider, useDiscussionDispatch, useDiscussionState } from './contexts/discussions.context';
 
export { AuthProvider, useAuthState, useAuthDispatch, loginUser, logout };
export { CoursesProvider, useCourseDispatch, useCourseState, getCourses, register, unregister };
export { CommentsProvider, useCommentDispatch, useCommentState, getComments, addComment, deleteComment };
export { DiscussionsProvider, useDiscussionDispatch, useDiscussionState, getDiscussions, addDiscussion };