import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal, effect } from "@angular/core";
import { environment } from "@environments/environment";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifService{

    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);

    // searchHistory = signal<Record<string, Gif[]>>({});
    searchHistory = signal<Record<string, Gif[]>>(
        JSON.parse(localStorage.getItem('gifsHistory') ?? '{}')
    );
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor(){
        this.loadTrendingGifs();
        
        effect(() => {
            localStorage.setItem(
                'gifsHistory',
                JSON.stringify(this.searchHistory())
            );
        });
    }

    loadTrendingGifs(){
        this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
            params:{
                api_key: environment.giphyApikey,
                limit:20,
            }
        }).subscribe( (resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
            console.log(gifs);
        });
    }

    searchGifs(query:string){
        return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
            params:{
                api_key: environment.giphyApikey,
                q: query,
                limit:20,
            }
        }).pipe(
            map( ({ data }) => data),
            map( (items ) => GifMapper.mapGiphyItemsToGifArray(items)),

            tap(items => {
                this.searchHistory.update((history) => ({ 
                    ...history,
                    [query.toLocaleLowerCase()]: items,
                }));
            })
        );
        // .subscribe( (resp)=>{
        //     const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     console.log({ search: gifs });
        // });
    }

    getHistoryGifs(query:string):Gif[]{
        return this.searchHistory()[query] ?? [];
    }
}