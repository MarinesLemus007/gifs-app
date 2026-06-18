import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from "../../services/gifs.service";
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'app-gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {

  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map( params => params['query'])
    )
  );

  gifByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
  
}
