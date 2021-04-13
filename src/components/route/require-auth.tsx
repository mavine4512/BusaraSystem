import React from 'react';

import { Paths } from '../../enums';
import { getStoredData } from '../../utils/store-auth-data';
import { auth_token } from '../../constants';
import Spinner from '../spinner/Spinner';
import { switchToPath } from '../../utils/redirect';

const RequireAuth = () => <Props extends {}>(
  Component: React.ComponentType<any>
) => {
  const HOC: React.FC = (props: any) => {
    const token = getStoredData(auth_token);

    React.useEffect(() => {
      if (!token) {
        switchToPath(Paths.AUTH);
      }
    }, [token]);

    return token ? <Component {...props} /> : <Spinner />;
  };
  return HOC;
};

export default RequireAuth;
