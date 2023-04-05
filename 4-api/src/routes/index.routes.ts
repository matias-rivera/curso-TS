import { Request, Response, Router } from "express";

class IndexRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', this.helloWorld)
  }

  helloWorld(req: Request, res: Response) {
    res.send("Hello World");
  }
}

const indexRouter = new IndexRouter();

export default indexRouter.router;