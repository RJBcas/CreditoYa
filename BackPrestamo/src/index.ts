import express from "express";
import morgan from "morgan";
import cors  from "cors";


//importing Routes
import IndexRoutes from './routes/movies.routes';

// initalizations

const app = express();

import  "./database";


// setting
app.set('port', process.env.PORT || 3003);

//middlewares
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin:'http://localhost:4200'}))
//Routes
app.use('/api/movies', IndexRoutes);

//Static files

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})
