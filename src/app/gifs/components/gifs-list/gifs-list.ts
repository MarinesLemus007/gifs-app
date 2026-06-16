import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsListItem } from '../../components/gifs-list/gifs-list-item/gifs-list-item'

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {}
