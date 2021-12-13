import React from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 20,
    "& .Mui-focused": {
      boderColor: "black !important",
    },
  },
}));

const InputSearch = ({ value, onClear, onChange }) => {
  const classes = useStyles();

  return (
    <>
      <OutlinedInput
        className={classes.input}
        type={"text"}
        value={value}
        onChange={onChange}
        fullWidth={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              edge="end"
              onClick={value.length > 0 ? onClear : undefined}
            >
              {value.length > 0 ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
};

export default InputSearch;
