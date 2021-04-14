import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    sectionTwo: {
      padding: 1,
    },
    queryImg: {
      marginBottom: 15,
      width: 70,
    },
  })
);

export default useStyles;
