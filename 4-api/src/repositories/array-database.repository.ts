interface item {
  id: string;
}

class ArrayDatabaseRepository<T extends item> {
  private items: T[];

  constructor() {
    this.items = [];

  }
  public create(item: T): T {
    this.items.push(item);
    return item;
  }

  public findAll(): T[] {
    return this.items;
  }

  public findOne(id: string): T {
    const item = this.items.find(item => item.id === id);
    if(!item) {
      throw new Error("no se encontró");
    }
    return item;
  }

  public update(newItem: T): T {
    const index = this.items.findIndex(item => item.id === newItem.id);
    this.items[index] = newItem;
    return this.items[index];
  }

  public remove(id: string): void {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1)
  }
}

export default ArrayDatabaseRepository;