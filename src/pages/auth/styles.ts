import { makeStyles } from '@material-ui/core';
import { primaryColor } from '../../constants/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: 250,
    height: 'auto',
    position: 'relative',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    marginTop: 15,
    textTransform: 'none',
  },
  errorText: {
    color: primaryColor.danger,
    fontSize: 10,
    marginTop: 10,
  },
}));

export default useStyles;
