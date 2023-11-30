import express, { Request, Response } from 'express';
import TaskRoutes from './routes/TaskRoutes';

var app = express()
var port = process.env.PORT || 3000

app.use(express.json());
app.use('/tasks', TaskRoutes);

app.get('/', function (req, res) {
  console.log('[' + new Date().toISOString() + '] Request for homepage')
  res.send('Hello Worlds!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});