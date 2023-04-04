const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3003;




const app = express();
app.use(bodyParser.json())
app.use(cors());

const database = {
    food: [
        {
            carbs: '10',
            protein: '15',
            fat: '20',
            name: 'pasta'
        },
        {
            carbs: '10',
            protein: '15',
            fat: '20',
            name: 'pizza'
        },
    ]
}

app.get('/', (req, res)=>{
    res.send(database.food);
})

app.post('/', (req, res)=>{
/*    if(req.body){
        res.json('succes');
    } else {
        res.status(400).json('error loggin in');
    }*/
    const {name, carbs,  protein, fat} = req.body;
    database.food.push({
        name: name,
        carbs: carbs,
        protein: protein,
        fat: fat

    })
    res.json(database.food[database.food.length-1]);
    
})
// your code

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

/*app.listen(3003, ()=>{
    console.log('app is running on port 3003');
})
/*
server.listen(3003, 'localhost'); // or server.listen(3001, '0.0.0.0'); for all interfaces
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});*/