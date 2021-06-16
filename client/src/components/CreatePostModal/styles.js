import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    top: "50%",
    left: "50%",
    width: 400,
    transform: "translate(-50%, -50%)",
    position: "absolute",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: { display: "flex", flexDirection: "column" },
  header: { margin: "0 0 10px 0" },
  title: { marginBottom: "10px" },
  textarea: { padding: "10px", marginBottom: "10px" },
  footer: { marginTop: "10px" },
}));
