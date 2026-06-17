import { Component, input } from '@angular/core';
import { GifsListItem } from '../../components/gifs-list/gifs-list-item/gifs-list-item'
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  gifs = input.required<Gif[]>();
}
