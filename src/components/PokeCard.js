import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    '& .MuiTypography-h5':{
      width: "150px",
      margin: "50% 0 0 10%"
    }
  },
  cover: {
    width: 200,
    height:200
  },
}));

const PokeCard = ({image, title}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={image}
        title={title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h1" variant="h5">
          {title}
          </Typography>
        </CardContent>       
      </div>
    
    </Card>
  );
}

export default PokeCard