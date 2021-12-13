import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    grid: {
      marginTop: 50,
      height: "63vh",
      marginBottom: 30,
      "& .MuiGrid-container": {
        maxHeight: "65vh",
      },
    },
    title: {
      fontFamily: "cursive",
      fontSize: 50,
    },
    subtitle: {
      fontFamily: "cursive",
    },
    container: {
      height: "100vh",
      backgroundColor: "#FFFFFF",
      backgroundImage:
        "linear-gradient(180deg, #FFFFFF 23%, #ffffff 80%, #cdd3ff 100%)",
    },
    foter: {
      fontFamily: "cursive",
      display: "inline-flex",
    },
    github: {
      position: "absolute",
      right: "19%",
    },
    by: {
      marginTop: 10,
    },
    loading: {
      height: "63vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
    },
    empty: {
      height: "40vh",
    },
    emptyContainer:{
      display: "inline-grid",
      fontFamily: "cursive",
      fontSize: 25,
  
     }
  }));