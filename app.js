//Import from express
import express from 'express'

const app = express(); //Set up app
const PORT = 3007; //Define port

//Set view engine
app.set('view engine', 'ejs');

//Enable static file serving
app.use(express.static('public'));

//Enable middleware with express to parse form data and store it in the req body
app.use(express.urlencoded({extended: true}));

//Array to hold the data from the form
const bookings  = [];

//Add default route, take you to home
app.get('/', (req, res) => {
    res.render('home');
});
//Add route for the confirm page
app.get('/confirm', (req, res) => {
    res.render('confirm');
})
//Add route for the admit paqge
app.get('admin', (req, res) => {
    res.render('admin');
});

app.post('/confirm', (req, res) => {
    console.log(req.body);

    //Create a JSON object to store data from each booking
    const booking = req.body;
    booking['timestamp'] = new Date(); //Get and store the timestamp.

    //Add the booking to the bookings array
    bookings.push(booking);

    //Send the booking information to the confirmation page, display the page
    res.render('confirm', {booking});
})

app.listen(PORT, () => 
     console.log(`Server stared in port http://localhost:${PORT}`)
);