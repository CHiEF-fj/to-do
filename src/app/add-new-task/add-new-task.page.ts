import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal', 'home'];

  taskName: any;
  taskDate: any;
  taskPriority: any;
  taskCategory: any;

  taskObject: any;
  constructor(public modalCtrt:ModalController) { }

  ngOnInit() {
  }

  async dismis(){
    await this.modalCtrt.dismiss(this.taskObject)
  }

  selectedCategory(index: number){
    this.taskCategory = this.categories[index]
  }

  AddTask(){
    this.taskObject = ({taskName:this.taskName,
                        itemDueDate:this.taskDate,
                        itemPriority:this.taskPriority,
                        itemCategory:this.taskCategory})

    this.dismis()
  }
}
