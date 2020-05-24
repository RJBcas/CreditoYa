import { Request, Response} from 'express'
import movie,{ Movie} from '../models/movies.models';

// Para mandar informacion puede ser en el siguiente formato 
// month-day-year o year-month-day

// Configuraciones para la fecha
// en-US == month-day-year , en-GB == day-month-year,
// ko-KR == year-month-day(2012. 12. 20.), zh-Hans-CN ==  year-month-day(2012/12/20)

class moviesCtrl{
async getMovies(req : Request,res : Response){
    const moviesEnd = new Array();
    const movies = await movie.find();
    // movies.forEach(element => {
    // const  GetMovies = {
    //     title : element.title ,
    //      author  : element.author,
    //       type : element.type, 
    //       quality : element.year.toLocaleDateString('en-US') }     
    //     moviesEnd.push(GetMovies)
    // });

    res.json(movies);
}
async getMovie(req : Request,res : Response){
    const { id } = req.params;
    const movies = await movie.findById( id);
    
    res.json(movies);
}
async  createMovie( req : Request, res:Response){
    const { title, author, quality, type } = req.body

    const newMovie : Movie = new movie({
        title,
        author,
        type,
        quality 
    });
    await newMovie.save()
    .then(
        ()=>{
            res.json({
                status:'Save success'
            })
        }
       
    ).catch(
     
        err => {
            console.error('esto es el error :=>', err)
            res.json({
            status:" error Explotar "
            })}
    )

   


}

async putMovie(req : Request, res:Response){
    const { title , author , year, quality} = req.body;
    const {id } = req.params;
    console.log('req body',req.body)
    console.log(id)
 

    
    await movie.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(
        ()=>{
            res.json({
                status:'Update success'
            })
        }
       
    ).catch(
     
        err => {
            console.error('esto es el error :=>', err)
            res.json({
            status:" error Explotar "
            })}
    );
}

async deleteMovie(req : Request, res : Response){
 const { id } = req.params;
 await movie.findByIdAndDelete(id)
.then(
    ()=>{
        res.json({
            status:'delete success'
        })
    }
   
).catch(
 
    err => {
        console.error('esto es el error :=>', err)
        res.json({
        status:" error Explotar "
        })}
);; 
}

}
export const moviesControllers = new moviesCtrl();