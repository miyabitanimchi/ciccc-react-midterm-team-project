import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export { useStyles };
