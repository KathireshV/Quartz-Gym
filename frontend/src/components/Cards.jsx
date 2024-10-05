import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from '../assets/fat-loss-1.jpg';
import img2 from '../assets/backworkouts.jpg';
import img3 from '../assets/athome.jpg';
import img4 from '../assets/fullbody.jpg';
import img5 from '../assets/beginner_0.jpg';
import img6 from '../assets/musclebuilding.jpg';
import './Cards.css';
import { useNavigate } from 'react-router-dom';


function Cards() {

    const nav=useNavigate();

  return (
    <div className="cards-container" id='carddd'>


    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/fat-loss'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image={img1} 
          alt="green iguana"
          />
        <CardContent>
          <p className='card-word'>
            Fat Loss
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/back-workout'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image={img2}
          alt="green iguana"
          />
        <CardContent>
          <p className='card-word'>
            Back Workout
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/home-exercise'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image={img3}
          alt="green iguana"
          />
        <CardContent>
          <p className='card-word'>
            At Home
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/full-body'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image={img4}
          alt="green iguana"
          />
        <CardContent>
        <p className='card-word'>
            Full Body
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/beginner'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image={img5}
          alt="green iguana"
          />
        <CardContent>
            <p className='card-word'>
            Beginner
            </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/muscle-building'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image={img6}
          alt="green iguana"
          />
        <CardContent>
            <p className='card-word'>
            Muscle Building
            </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    
    

    </div>
  );
}

export default Cards;