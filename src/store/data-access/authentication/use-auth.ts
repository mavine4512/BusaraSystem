import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAccountState, selectLoginState, selectUser } from './slice';
import { currentUser, loginRequest as login } from './actions';
import { ProcessingStatus } from '../../../enums';
import { LoginForm, User } from '../../../interfaces';

interface UseAuth {
  user: User;
  loginState: ProcessingStatus;
  accountState: ProcessingStatus;
  loginRequest: (data: LoginForm) => void;
  fetchUser: () => void;
}

export function useAuth(): UseAuth {
  const dispatch = useDispatch();

  const loginState = useSelector(selectLoginState);
  const accountState = useSelector(selectAccountState);
  const user = useSelector(selectUser);

  const loginRequest = useCallback((data: LoginForm) => dispatch(login(data)), [
    dispatch,
  ]);

  const fetchUser = useCallback(() => dispatch(currentUser()), [dispatch]);

  return {
    user,
    loginState,
    accountState,
    loginRequest,
    fetchUser,
  };
}
