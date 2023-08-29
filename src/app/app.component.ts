import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'cdk-drag-drop-nested-lists-example',
  templateUrl: 'app.html',
  styleUrls: ['app.scss']
})
export class CdkDragDropNestedListsExample {
  public root: Human;

  public get connectedTo(): string[] {
    return this.getIdsRecursive(this.root).reverse();
  }

  constructor() {
    this.root = new Human('Simon', '123', DEMO_DATA);
  }

  onDragDrop = (event: CdkDragDrop<Array<Human>>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  };

  private getIdsRecursive(item: Human | Apple): string[] {
    const id = (item instanceof Human) ? item.humanId : (item as Apple).appleId;
    let ids = [id];
    item.children.forEach(childItem => {
      ids = ids.concat(this.getIdsRecursive(childItem));
    });
    return ids;
  }
}

export class Apple {
  public type = 'apple';
  constructor(public sorte: string,
    public appleId: string,
    public children: Array<Human | Apple>) {}
}

export class Human {
  public type = 'human';
  constructor(public name: string,
    public humanId: string,
    public children: Array<Human | Apple>) {}
}

export const DEMO_DATA: Array<Human | Apple> = [
  new Apple('Apfel', '456', [new Human('Simon', '123', [])])
];
