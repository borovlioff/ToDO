
import { TodoRepository } from '../repositories';

export class DeleteTodo {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(id: string): Promise<void|Error> {
    await this.todoRepository.delete(id);
  }
}