import express from 'express'
import routes from './routes/v1'

const app = express();
routes(app);

app.listen(4000);