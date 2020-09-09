import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
// import router
import articleRouter from './routers/articles'
import testRouter from './routers/test'

const app = express();
const port = process.env.PORT || 8000
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('home')
  res.end()
})
app.use('/articles', articleRouter)
app.use('/test', testRouter)

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})