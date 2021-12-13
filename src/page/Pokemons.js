import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import InputSearch from "../components/InputSearch";
import PokeCard from "../components/PokeCard";
import { Grid, Container, Divider, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LoadingPage from "../components/LoadingPage";
import emptyPika from "./../components/pngwing.com.png";
import {useStyles} from "./pokemons_style"
import { getData } from "../utils/getData";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [qtyPokemons, setQtyPokemons] = useState(12);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();

  useEffect(() => {
    getData()
    .then(({ data }) => {
      if (data.length) {
        setPokemons(data);
        setDataTable(data);
      }
      setLoading(false);
    });
  }, []);

  const handleChangeSearch = (e) => {
    if (e.target.value.length) {
      setSearchValue(e.target.value);
      const dataFilter = pokemons.filter((item) =>
        item.name.includes(e.target.value)
      );
      setDataTable(dataFilter);
      setQtyPokemons(12);
    } else {
      setSearchValue("");
      setDataTable(pokemons);
      setQtyPokemons(12);
    }
  };

  const handleClear = () => {
    setSearchValue("");
    setDataTable(pokemons);
    setQtyPokemons(12);
  };

  const addPokemons = (e) => {
    if (dataTable.length) {
      if (qtyPokemons > dataTable.length) return undefined;
      setQtyPokemons(qtyPokemons + 6);
    }
  };

  const handleClickGitHub = () => {
    window.open("https://github.com/rramirezgit/flydevs", '_blank', 'noopener,noreferrer')
  }
  return (
    <>
      <div className={classes.container}>
        <Container>
          <div className={classes.title}> Pokemon Finder</div>
          <div className={classes.subtitle}>
            {" "}
            El que quiere Pokemons, que los busque
          </div>
          <InputSearch
            value={searchValue}
            onChange={handleChangeSearch}
            onClear={handleClear}
          />
          <div className={classes.grid}>
            {!loading && (
              <PerfectScrollbar onYReachEnd={addPokemons}>
                <Grid container justifyContent="center" xs={12} spacing={2}>
                  {dataTable.slice(0, qtyPokemons).map((value, i) => (
                    <Grid key={i} item>
                      <PokeCard image={value.img} title={value.name} />
                    </Grid>
                  ))}
                  {dataTable.length === 0 && (
                    <>
                      <div className={classes.emptyContainer}>
                        <img
                          src={emptyPika}
                          alt="pokemon no encontrado"
                          className={classes.empty}
                        />
                        <div> {"No logramos identificar este Pokemon..."}</div>
                      </div>
                    </>
                  )}
                </Grid>
              </PerfectScrollbar>
            )}
            {loading && (
              <div className={classes.loading}>
                <LoadingPage />
              </div>
            )}
          </div>
        </Container>
        <Divider />
        <Container>
          <div className={classes.foter}>
            <div className={classes.by}>Hecho por Ricardo Ramirez</div>

            <IconButton className={classes.github} onClick={handleClickGitHub} title="Repo GitHub">
              <GitHubIcon fontSize="largue" />
            </IconButton>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Pokemons;
