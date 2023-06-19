import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import figlet from "figlet";
import UserRoutes from "./src/routes/eleve.route.js";
import AssignementRoutes from "./src/routes/assignements.route.js";
import SubjectRoutes from "./src/routes/subjects.route.js";
import {connectToMongoDB} from "./src/utils/mongoose.js";

// .env init
dotenv.config()

// CONST VARS
const port = process.env.PORT || 6750

// Set up App server
const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Set up middlewares
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.json({
    extend: true,
    limit: 1024 ** 1024
}))
app.use(cookieParser())

// Set up routes
app.get('/', (req, res) => {

    res.json('Hello world!')

})

app.use(UserRoutes.path, UserRoutes.router)
app.use(AssignementRoutes.path, AssignementRoutes.router)
app.use(SubjectRoutes.path, SubjectRoutes.router)

app.listen(port, async () => {

    const asciiArt = figlet.textSync('m2-mbds-buffa running!', {
        font: 'Calvin S'
    })

    console.log('\n')
    console.log(asciiArt)
    console.log('\n')

    await connectToMongoDB()

})