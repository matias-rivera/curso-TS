import express, { Application } from "express";
import indexRouter from "./routes/index.routes";
import storage from 'node-persist';
import userRouter from "./routes/user.routes";

class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(){
    storage.init({
      dir: "database"
    }).then(() => console.log("storage is running..."));
    this.app.use(express.json());
  };

  private routes(){
    this.app.use(indexRouter);
    this.app.use(userRouter)
  };
  
  start(port: number) {
    this.app.listen(port, () => {
      console.log("listen on port: ", port)
    })
  }
}

export default Server;