import app from './app';
import { createConnection, getConnectionOptions } from 'typeorm';

createConnection();

// getConnectionOptions().then((options) => {
//   console.log(options);
// });

console.log(process.env.JWT_SECRET_KEY);

app.listen(3333, () => {
  console.log('🚀 Server runing on http://localhost:3333/');
});
