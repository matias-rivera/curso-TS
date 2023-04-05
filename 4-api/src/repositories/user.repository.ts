import { User } from "../models/entities/user";
import ArrayDatabaseRepository from "./array-database.repository";
import NodePersistRepository from "./node-persist.repository";

class UserRepository extends NodePersistRepository<User> {}

export default UserRepository;