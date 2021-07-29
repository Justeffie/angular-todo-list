export class Todo {
  public id: number;
  public action: string;
  public tachado = false;
  public important = false;

  constructor(id: number, action: string) {
    this.id = id;
    this.action = action;
  }
}

