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
    cta: {
      marginTop: '10%',
      justifyContent: 'flex-end',
    },
  })
);

export default useStyles;
