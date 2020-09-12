import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, CardModule],
  exports: [BoardComponent],
})
export class BoardModule {}
