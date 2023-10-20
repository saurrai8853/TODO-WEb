import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo = new Todo;
  @Input () i:number | undefined;
  @Output()todoDelete:EventEmitter<Todo>= new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter();

 
  constructor(){}

ngOnInit(): void {
  
}
onClick(todo: Todo){
  this.todoDelete.emit(todo);
  console.log("onclick is trigged")
}
onCheckboxClick(todo:any){
  this.todoCheckbox.emit(todo);
}

}
