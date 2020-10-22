import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexFlow: 'row',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

export const CardTemplate = props => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={require(`../assets/img/${props.img}`)}
          title='Avatar'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.name} {bull} {props.surname}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardTemplate;
