import { Component, computed, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list'
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(GifService);
}

