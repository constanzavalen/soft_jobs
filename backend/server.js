import express from 'express';
import cors from 'cors';
//import { logger } from 'express-logger';
import userRoutes from './src/config/routes/user.routes.js';
import loginRoutes from './src/config/routes/login.routes.js';
import accessRoutes from './src/config/routes/access.routers.js';
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
//app.use(logger());

app.use('/api/v1', userRoutes);
app.use('/api/v1', loginRoutes);
app.use('/api/v1', accessRoutes);

app.listen(PORT, console.log(`server on http://localhost:${PORT}`));

