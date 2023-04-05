import { Request, Response, Router } from "express";
import UserService from "../services/user.service";
import UserRepository from "../repositories/user.repository";
import { CreateUserDto } from "../models/dtos/create-user.dto";
import { UpdateUserDto } from "../models/dtos/update-user.dto";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

class UserRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/users', this.getUsers);
    this.router.post('/users', this.createUser);
    this.router.get('/users/:id', this.getUser);
    this.router.put('/users/:id', this.updateUser);
    this.router.delete('/users/:id', this.removeUser);
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch(error) {
      res.status(500).send({message: "Error"})
    }
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await userService.getUser(id);
      res.json(user);
    } catch(error) {
      res.status(500).send({message: "Error"})
    }
  }

  async createUser(req: Request, res: Response) {
    const userDto: CreateUserDto = req.body;
    try {
      const user = await userService.createUser(userDto);
      res.json(user);
    } catch(error) {
      res.status(500).send({message: "Error"});
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserDto: UpdateUserDto = req.body;
    try {
      const user = await userService.updateUser(id, updateUserDto);
      res.json(user);
    } catch(error) {
      res.status(500).send({message: "Error"});
    }
  }

  async removeUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await userService.removeUser(id);
      res.json({message: 'User deleted!'});
    } catch(error) {
      res.status(500).send({message: "Error"});
    }
  }
}

const userRouter = new UserRouter();

export default userRouter.router;