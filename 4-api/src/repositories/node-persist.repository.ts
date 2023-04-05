import storage from 'node-persist';

interface item {
  id: string;
}

class NodePersistRepository<T extends item> {
  public async create(item: T): Promise<T> {
    await storage.setItem(item.id, item);
    return item;
  }

  public async findAll(): Promise<T[]> {
    const items = await storage.values() as T[];
    return items;
  }

  public async findOne(id: string): Promise<T> {
    const item = await storage.getItem(id);
    return item;
  }

  public async update(newItem: T): Promise<T> {
    await storage.updateItem(newItem.id, newItem);
    const item = await storage.getItem(newItem.id) as T;
    return item; 
  }

  public async remove(id: string): Promise<void> {
    await storage.removeItem(id);
  }
}

export default NodePersistRepository;