import { makeStyles } from '@material-ui/core';
import { primaryColor, primaryFonts } from '../../constants/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: 800,
    margin: 'auto',
  },
  sideMenu: {
    border: `thin solid ${primaryColor.borderGray}`,
    padding: 15,
    width: '100%',
    minHeight: 400,

    '& > li': {
      listStyle: 'none',
      marginBottom: 15,
      textAlign: 'right',
    },
  },
  values: {
    color: primaryColor.lightBlue,
    fontFamily: primaryFonts.rubik,
  },
  pageTitle: {
    fontFamily: primaryFonts.rubik,
  },
  horizontalLine: {
    borderBottom: `thin solid ${primaryColor.borderGray}`,
    width: 50,
  },
  logoutWrapper: {
    width: '100%',
    padding: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: primaryFonts.rubik,
    cursor: 'pointer',
    border: `thin solid ${primaryColor.borderGray}`,
    backgroundColor: primaryColor.lightGray,

    '&:hover': {
      backgroundColor: primaryColor.borderGray,
      opacity: 0.7,
    },
  },
}));

export default useStyles;
