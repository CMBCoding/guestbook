//Import from express
import express from 'express'

const app = express();
const PORT = 3007;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => 
     console.log(`Server stared in port http://localhost:${PORT}`)
);