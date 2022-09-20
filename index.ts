import express from 'express';
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/',(req, res, next)=>{
    res.status(200).send('Hello word!!')
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
});

export default app;