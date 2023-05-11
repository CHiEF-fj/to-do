import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AddNewTaskPage} from "../add-new-task/add-new-task.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    todoList = [{
      itemName: 'Coding',
      itemDueDate: '01-11-23',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Coding',
      itemDueDate: '01-11-23',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Coding',
      itemDueDate: '01-11-23',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Coding',
      itemDueDate: '01-11-23',
      itemPriority: 'high',
      itemCategory: 'work'
    }
    ]

  today: number = Date.now()
  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data)
      this.todoList.push(newTaskObj.data)

    })

    return await modal.present()
  }
}
