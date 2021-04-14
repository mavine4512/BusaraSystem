import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { primaryFonts } from '../../constants/theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minHeight: 400,
    },
    button: {
      marginRight: theme.spacing(1),
      fontSize: 12,
      fontFamily: primaryFonts.rubik,
    },
    instructions: {
      marginBottom: theme.spacing(1),
      fontFamily: primaryFonts.rubik,
    },
    title: {
      fontFamily: primaryFonts.rubik,
    },
    divider: {
      marginBottom: 10,
    },
    subSectionTitle: {
      marginTop: 15,
      fontFamily: primaryFonts.rubik,
    },
  })
);

export default useStyles;
