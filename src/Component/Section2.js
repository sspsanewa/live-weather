import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import temp from '../Assets/temp.jpg'
import wind from '../Assets/wind.jpg'
import visibility from '../Assets/visibility.jpg'
import locations from '../Assets/locations.png'
import conditions from '../Assets/conditions.jpg'
const Address = (props) => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [error, setError] = useState('');
    const [helperText, setHelperText] = useState('');
    const [location, setLocation] = useState('')
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDcSU4Nf_aUoxxAann6-x4gemQWbdxWj0Q',
        libraries: ['places'],
    });
    const [data, setData] = useState([])

    const handleSearch = () => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=QYPTY88YF87E3DAXSUUTS6AFG&locations=${location}`)
            .then(response => {
                setData(response.data);
                console.log('responce', response)
            })
            .catch(error => {
                console.log(error);
            });
    }




    const handleChange = async (value) => {
        setSelectedPlace(value);
        console.log('Selected Place:', value.label);
        setLocation(value.label);

    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }


    return (
        <div className='pt-12 mb-12 pb-12 bg-black'>
            <div className=' flex  justify-center'>
                <div className='w-84 '>
                    <GooglePlacesAutocomplete
                        apiKey="AIzaSyDcSU4Nf_aUoxxAann6-x4gemQWbdxWj0Q"

                        selectProps={{
                            onChange: handleChange,
                            placeholder: 'Search Location',
                            noOptionsMessage: () => null,
                            loadingMessage: () => null,
                        }}
                    />
                    <Button sx={{ marginY: 2 }} className='h-7' onClick={handleSearch} variant='contained'>search</Button>

                </div>
            </div>
            {
                !data ? <Typography>Loading..</Typography> :
                    <div className='flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-16'>                        <Card >
                        <CardActionArea >
                            <CardMedia
                                sx={{ width: { xs: '300px', md: '200px' }, height: { xs: '300px', md: '200px' } }}
                                component="img"
                                image={locations}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Location
                                </Typography>
                                <Typography width={'100px'} variant="body2" color="text.secondary">
                                    {console.log('ggg', data.length)}
                                    {data.length !== 0 ? data.address : <LinearProgress />
                                    }
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ width: { xs: '300px', md: '200px' }, height: { xs: '300px', md: '200px' } }}
                                    component="img"
                                    image={temp}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Temp
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {console.log('ggg', data.length)}
                                        {data.length !== 0 ? data.days[0].temp : <LinearProgress />
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ width: { xs: '300px', md: '200px' }, height: { xs: '300px', md: '200px' } }}
                                    component="img"
                                    image={wind}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Wind Speed
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {console.log('ggg', data.length)}
                                        {data.length !== 0 ? data.days[0].windspeed : <LinearProgress />
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ width: { xs: '300px', md: '200px' }, height: { xs: '300px', md: '200px' } }}
                                    component="img"
                                    image={conditions}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                        Conditions

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {console.log('ggg', data.length)}
                                        {data.length !== 0 ? data.days[0].conditions : <LinearProgress />
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    sx={{ width: { xs: '300px', md: '200px' }, height: { xs: '300px', md: '200px' } }}
                                    component="img"
                                    image={visibility}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">

                                        Visibility

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {console.log('ggg', data.length)}
                                        {data.length !== 0 ? data.days[0].visibility : <LinearProgress />
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
            }
        </div>
    );
};

export default Address;
