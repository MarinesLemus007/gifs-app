import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSlideMenu } from '../../components/gifs-side-menu/gifs-slide-menu'

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSlideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
