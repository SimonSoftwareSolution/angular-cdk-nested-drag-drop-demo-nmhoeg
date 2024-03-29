import { BrowserModule } from '@angular/platform-browser';
import { CdkDragDropNestedListsExample } from './app.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [BrowserModule, CommonModule, DragDropModule],
  entryComponents: [CdkDragDropNestedListsExample],
  declarations: [CdkDragDropNestedListsExample],
  bootstrap: [CdkDragDropNestedListsExample],
  providers: []
})
export class AppModule {}
