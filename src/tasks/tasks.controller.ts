import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id:string): Task {
    return this.tasksService.getTaskById(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id:string): void {
    return this.tasksService.deleteTask(id)
  }
  @Patch('/:id/status')
  updateTask(@Param('id') id:string, @Body('status') status: TaskStatus): Task {
    return this.tasksService.updateTaskStatus(id, status)
  }
}
