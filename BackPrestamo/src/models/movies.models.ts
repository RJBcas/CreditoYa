import mongoose, {Schema , model} from 'mongoose';



export interface Movie  extends mongoose.Document{
    title: String,
    author: String,
    type : String,
    quality : String
}

const MoviesSchema = new Schema ({
    title: String,
    author: String,
    type : String,
    quality : String
})
export default model<Movie>('Movies', MoviesSchema)