import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [{name: "task1" , type: "cook food"}];

    getAllTasks() {
        return this.tasks;
    }
}
