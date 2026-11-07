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
const bookings  = [
{
    fname: "John",
    lname: "Doe",
    number: "555-0101",
    email: "john.doe@example.com",
    checkinDate: "2026-11-10",
    checkOutDate: "2026-11-15",
    comments: "Excited for our stay! Please arrange a crib if possible.",
    timestamp: "2026-11-07T08:30:00Z"
  },
  {
    fname: "Jane",
    lname: "Smith",
    number: "555-0102",
    email: "jane.smith@example.com",
    checkinDate: "2026-11-18",
    checkOutDate: "2026-11-20",
    comments: "Arriving late, around 9 PM.",
    timestamp: "2026-11-07T10:15:22Z"
  },
  {
    fname: "Marcus",
    lname: "Johnson",
    number: "555-0103",
    email: "mjohnson88@example.com",
    checkinDate: "2026-12-01",
    checkOutDate: "2026-12-05",
    comments: "Allergic to down pillows. Feather-free room requested.",
    timestamp: "2026-11-07T11:42:10Z"
  },
  {
    fname: "Sarah",
    lname: "Williams",
    number: "555-0104",
    email: "swilliams.business@example.com",
    checkinDate: "2026-12-10",
    checkOutDate: "2026-12-12",
    comments: "Need a parking space for a rental car.",
    timestamp: "2026-11-07T13:05:45Z"
  },
  {
    fname: "David",
    lname: "Chen",
    number: "555-0105",
    email: "dchen_travels@example.com",
    checkinDate: "2026-12-24",
    checkOutDate: "2026-12-28",
    comments: "",
    timestamp: "2026-11-07T14:50:00Z"
  }

];

//Add default route, take you to home
app.get('/', (req, res) => {
    res.render('home');
});
//Add route for the confirm page
app.get('/confirm', (req, res) => {
    res.render('confirm');
})
//Add route for the admit paqge
app.get('/admin', (req, res) => {
    //Send the booking information to the admin page.
    res.render('admin', {bookings});
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