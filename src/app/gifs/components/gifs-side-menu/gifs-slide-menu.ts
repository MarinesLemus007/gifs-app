import { Component } from '@angular/core';
import { GifsSideMenuHeader } from './gifs-side-menu-header/gifs-side-menu-header'
import { GifsSideMenuOptions } from './gifs-side-menu-options/gifs-side-menu-options'

@Component({
  selector: 'app-gifs-slide-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './gifs-slide-menu.html',
})
export class GifsSlideMenu {}
