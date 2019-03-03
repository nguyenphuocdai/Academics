import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    // (function ($) {
    //   "use strict";
    //   //---------------------------------------------

    //   //Nivo slider

    //   //---------------------------------------------
    //   $('#ensign-nivoslider-3').nivoSlider({

    //     effect: 'fade',

    //     slices: 15,

    //     boxCols: 8,

    //     boxRows: 4,

    //     animSpeed: 500,

    //     pauseTime: 5000,

    //     startSlide: 0,

    //     directionNav: true,

    //     controlNavThumbs: true,

    //     pauseOnHover: true,

    //     manualAdvance: true

    //   });

    // })(jQuery);

  }
}
