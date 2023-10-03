import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CountryCard = (props) => {
    return (
        <Card className="country_card">
          <CardMedia
            component="img"
            alt={props.name}
            height="140"
            width="200"
            image={props.flagUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
           {props.capital} | {props.population}
            </Typography>
          </CardContent>
        
        </Card>
      );
}

export default CountryCard


