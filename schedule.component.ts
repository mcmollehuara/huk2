import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScheduleService } from './../services/schedule.service'
import { Schedule, ShiftScheduleFilter } from './../model/shift-schedule.model';

declare var jQuery: any;
declare var vis: any;

@Component({
    moduleId: module.id,
    selector: 'shift-schedule',
    templateUrl: './shift-schedule.component.html',
    styleUrls: ['./../../../../node_modules/vis/dist/vis.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ScheduleService]
})
export class ShiftScheduleComponent implements OnInit {
    filters: ShiftScheduleFilter = new ShiftScheduleFilter();
    date: Date = new Date(2016, 5, 10);
    el: ElementRef;
    items: Array<any> = [];
    container: any;
    name: string = "Miguel Condori";
    constructor(el: ElementRef, private scheduleService: ScheduleService) {
        this.el = el;
    }

    ngOnInit(): void {
        this.filters.availabilityID = [];
        this.filters.activeWork = [];
        this.filters.skillID = [];
        this.filters.tierID = [];
        this.filters.clearanceID = [];
        this.filters.startDate = new Date();
        this.filters.endDate = new Date();
        this.filters.directReport = true;
        this.filters.vzManager = "";

        //this.scheduleService.getShiftResources(this.filters);


        let $el = jQuery(this.el.nativeElement);
        this.container = $el.find('#visualization')[0];

        // var groups = new vis.DataSet([
        //     { "content": "<section class='widget'>            <header>                <h6> Workload vs Availability                </h6>                </header>            <divclass='widget-body'>                <h6> Network: <span class='circle bg-warning text-white'>2</span>                    <span class='circle bg-danger text-white'>5</span>                    <span class='pull-right'>                        <i class='fa fa-user'aria-hidden='true'></i>5                    </span>                </h6>            </div>        </section>", "id": "LVA", "value": 3, className: 'motorcycle' },
        //     { "content": "<section class='widget'>            <header>                <h6>                    <img class='img-circle' src='assets/img/people/unknown.jpg' alt='...' style='height: 30px;'> Yadira Benites                </h6>                <div class='widget-controls'>                    <i class='fa fa-circle text-success' aria-hidden='true'></i>Available                </div>            </header>            <div class='widget-body'>                <h6>Skills:</h6>                <div>                          <i class='fa fa-windows' aria-hidden='true'></i>                    <i class='fa fa-database' aria-hidden='true'></i>                </div>                <h6>                    Active Work:                </h6>                <div>                    <label for='' class='label label-warning'>3 TK</label>                    <label for='' class='label label-danger'>2 CO</label>                    <label for='' class='label label-success'>4 WO</label>           </div>                          </div>                    </section>", "id": "Formula E", "value": 1, className: 'openwheel' },
        //     { "content": "<section class='widget'>            <header>                <h6>                    <img class='img-circle' src='assets/img/people/unknown.jpg' alt='...' style='height: 30px;'> Miguel  Condori                </h6>                <div class='widget-controls'>                    <i class='fa fa-circle text-danger' aria-hidden='true'></i>Away                </div>            </header>            <div class='widget-body'>                <h6>Skills:</h6>                <div>                    <i class='fa fa-linux' aria-hidden='true'></i>                    <i class='fa fa-windows' aria-hidden='true'></i>                    <i class='fa fa-database' aria-hidden='true'></i>                </div>                <h6>                    Active Work:                </h6>                <div>                    <label for='' class='label label-warning'>3 TK</label>                    <label for='' class='label label-danger'>2 CO</label>                    <label for='' class='label label-success'>4 WO</label>           </div>                </div>                    </section>", "id": "WRC", "value": 2, className: 'rally' },
        //     { "content": "V8SC", "id": "V8SC", "value": 4, className: 'touringcars' },
        //     { "content": "WTCC", "id": "WTCC", "value": 5, className: 'touringcars' },
        //     { "content": "F1", "id": "F1", "value": 6, className: 'openwheel' },
        //     { "content": "SBK", "id": "SBK", "value": 7, className: 'motorcycle' },
        //     { "content": "IndyCar", "id": "IndyCar", "value": 8, className: 'openwheel' },
        //     { "content": "MotoAmerica", "id": "MotoAmerica", "value": 9, className: 'motorcycle' },
        //     { "content": "SGP", "id": "SGP", "value": 10, className: 'rally' },
        //     { "content": "EWC", "id": "EWC", "value": 11, className: 'endurance' },
        //     { "content": "BSB", "id": "BSB", "value": 12, className: 'motorcycle' },
        //     { "content": "DTM", "id": "DTM", "value": 13, className: 'touringcars' },
        //     { "content": "BTCC", "id": "BTCC", "value": 14, className: 'touringcars' },
        //     { "content": "WorldRX", "id": "WorldRX", "value": 15, className: 'rally' },
        //     { "content": "WSR", "id": "WSR", "value": 16, className: 'openwheel' },
        //     { "content": "Roads", "id": "Roads", "value": 17, className: 'motorcycle' },
        //     { "content": "WEC", "id": "WEC", "value": 18, className: 'endurance' },
        //     { "content": "GP2", "id": "GP2", "value": 19, className: 'openwheel' }
        // ]);

        // var items = new vis.DataSet([
        //     { start: new Date(2015, 0, 10), end: new Date(2015, 0, 11), group: "LVA", className: "openwheel", content: "Argentina", id: "5319@motocal.net" },
        //     { start: new Date(2015, 0, 11), end: new Date(2015, 0, 12), group: "LVA", className: "openwheel", content: "Argentina", id: "5318@motocal.net" },
        //     { start: new Date(2015, 0, 12), end: new Date(2015, 0, 13), group: "LVA", className: "openwheel", content: "Argentina", id: "5317@motocal.net" },
        //     { start: new Date(2015, 0, 22), end: new Date(2015, 0, 26), group: "WRC", className: "rally", content: "Rallye Monte-Carlo", id: "591@motocal.net" },
        //     { start: new Date(2015, 1, 4), end: new Date(2015, 1, 8), group: "MotoGP", className: "motorcycle", content: "Sepang MotoGP Test 1", id: "578@motocal.net" },
        //     { start: new Date(2015, 1, 12), end: new Date(2015, 1, 16), group: "WRC", className: "rally", content: "Rally Sweden", id: "592@motocal.net" },
        //     { start: new Date(2015, 1, 20), end: new Date(2015, 1, 23), group: "SBK", className: "motorcycle", content: "Australia", id: "616@motocal.net" },
        //     { start: new Date(2015, 1, 23), end: new Date(2015, 1, 27), group: "MotoGP", className: "motorcycle", content: "Sepang MotoGP Test 2", id: "579@motocal.net" },
        //     { start: new Date(2015, 1, 26), end: new Date(2015, 2, 2), group: "V8SC", className: "touringcar", content: "Clipsal 500 Adelaide", id: "659@motocal.net" },
        //     { start: new Date(2015, 2, 5), end: new Date(2015, 2, 9), group: "WRC", className: "rally", content: "Rally Guanajuato Mexico", id: "593@motocal.net" },
        //     { start: new Date(2015, 2, 6), end: new Date(2015, 2, 9), group: "WTCC", className: "touringcar", content: "Argentina", id: "717@motocal.net" },
        //     { start: new Date(2015, 2, 12), end: new Date(2015, 2, 16), group: "V8SC", className: "touringcar", content: "Australian Grand Prix", id: "660@motocal.net" },
        //     { start: new Date(2015, 2, 13), end: new Date(2015, 2, 16), group: "F1", className: "openwheel", content: "Australia", id: "630@motocal.net" },
        //     { start: new Date(2015, 2, 14), end: new Date(2015, 2, 15), group: "Formula E", className: "openwheel", content: "Miami, USA", id: "534@motocal.net" },
        //     { start: new Date(2015, 2, 14), end: new Date(2015, 2, 17), group: "MotoGP", className: "motorcycle", content: "Qatar MotoGP Test", id: "577@motocal.net" },
        //     { start: new Date(2015, 2, 20), end: new Date(2015, 2, 23), group: "SBK", className: "motorcycle", content: "Thailand", id: "617@motocal.net" },
        //     { start: new Date(2015, 2, 27), end: new Date(2015, 2, 30), group: "F1", className: "openwheel", content: "Malaysia", id: "631@motocal.net" },
        //     { start: new Date(2015, 2, 27), end: new Date(2015, 2, 30), group: "V8SC", className: "touringcar", content: "Tasmania SuperSprint", id: "661@motocal.net" },
        //     { start: new Date(2015, 2, 27), end: new Date(2015, 2, 30), group: "IndyCar", className: "openwheel", content: "Grand Prix of St. Petersburg", id: "752@motocal.net" },
        //     { start: new Date(2015, 3, 4), end: new Date(2015, 3, 7), group: "BSB", className: "motorcycle", content: "Round 1", id: "604@motocal.net" },
        //     { start: new Date(2015, 3, 4), end: new Date(2015, 3, 6), group: "BTCC", className: "touringcar", content: "Rounds 1, 2 & 3", id: "581@motocal.net" },
        //     { start: new Date(2015, 3, 4), end: new Date(2015, 3, 5), group: "Formula E", className: "openwheel", content: "Long Beach, USA", id: "535@motocal.net" },
        //     { start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group: "IndyCar", className: "openwheel", content: "Indy Grand Prix of Louisiana", id: "753@motocal.net" },
        //     { start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group: "MotoAmerica", className: "motorcycle", content: "COTA", id: "705@motocal.net" },
        //     { start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group: "SBK", className: "motorcycle", content: "Aragon", id: "618@motocal.net" },
        //     { start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group: "MotoGP", className: "motorcycle", content: "Americas", id: "540@motocal.net" },
        //     { start: new Date(2015, 3, 10), end: new Date(2015, 3, 13), group: "F1", className: "openwheel", content: "China", id: "632@motocal.net" },
        //     { start: new Date(2015, 3, 12), end: new Date(2015, 3, 13), group: "WEC", className: "endurance", content: "6 Hours of Silverstone", id: "674@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "BSB", className: "motorcycle", content: "Round 2", id: "605@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "F1", className: "openwheel", content: "Bahrain", id: "633@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "IndyCar", className: "openwheel", content: "Grand Prix of Long Beach", id: "754@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "MotoAmerica", className: "motorcycle", content: "Road Atlanta", id: "706@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "SBK", className: "motorcycle", content: "Netherlands", id: "619@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "WTCC", className: "touringcar", content: "Morocco", id: "718@motocal.net" },
        //     { start: new Date(2015, 3, 17), end: new Date(2015, 3, 20), group: "MotoGP", className: "motorcycle", content: "Argentina", id: "559@motocal.net" },
        //     { start: new Date(2015, 3, 18), end: new Date(2015, 3, 19), group: "SGP", className: "rally", content: "Warsaw", id: "729@motocal.net" },
        //     { start: new Date(2015, 3, 18), end: new Date(2015, 3, 20), group: "EWC", className: "endurance", content: "24 Heures Moto Le Mans", id: "701@motocal.net" },
        //     { start: new Date(2015, 3, 18), end: new Date(2015, 3, 20), group: "BTCC", className: "touringcar", content: "Rounds 4, 5 & 6", id: "582@motocal.net" },
        //     { start: new Date(2015, 3, 23), end: new Date(2015, 3, 27), group: "WRC", className: "rally", content: "Rally Argentina", id: "595@motocal.net" },
        //     { start: new Date(2015, 3, 24), end: new Date(2015, 3, 27), group: "WorldRX", className: "rally", content: "Portugal", id: "686@motocal.net" },
        //     { start: new Date(2015, 3, 24), end: new Date(2015, 3, 27), group: "IndyCar", className: "openwheel", content: "Indy Grand Prix of Alabama", id: "755@motocal.net" },
        //     { start: new Date(2015, 3, 25), end: new Date(2015, 3, 27), group: "WSR", className: "openwheel", content: "Spain", id: "742@motocal.net" },
        //     { start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group: "MotoGP", className: "motorcycle", content: "Spain", id: "542@motocal.net" },
        //     { start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group: "WorldRX", className: "rally", content: "Hockenheim", id: "768@motocal.net" },
        //     { start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group: "DTM", className: "touringcar", content: "Hockenheim", id: "650@motocal.net" },
        //     { start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group: "WTCC", className: "touringcar", content: "Hungary", id: "719@motocal.net" },
        //     { start: new Date(2015, 4, 1), end: new Date(2015, 4, 4), group: "V8SC", className: "touringcar", content: "Perth SuperSprint", id: "662@motocal.net" },
        //     { start: new Date(2015, 4, 2), end: new Date(2015, 4, 5), group: "BSB", className: "motorcycle", content: "Round 3", id: "606@motocal.net" },
        //     { start: new Date(2015, 4, 2), end: new Date(2015, 4, 3), group: "WEC", className: "endurance", content: "6 Hours of Spa-Francorchamps", id: "675@motocal.net" },
        //     { start: new Date(2015, 4, 7), end: new Date(2015, 4, 10), group: "IndyCar", className: "openwheel", content: "Grand Prix of Indianapolis", id: "756@motocal.net" },
        //     { start: new Date(2015, 4, 8), end: new Date(2015, 4, 11), group: "F1", className: "openwheel", content: "Spain", id: "634@motocal.net" },
        //     { start: new Date(2015, 4, 8), end: new Date(2015, 4, 11), group: "SBK", className: "motorcycle", content: "Italy", id: "620@motocal.net" },
        //     { start: new Date(2015, 4, 9), end: new Date(2015, 4, 10), group: "Formula E", className: "openwheel", content: "Monaco", id: "536@motocal.net" },
        //     { start: new Date(2015, 4, 9), end: new Date(2015, 4, 11), group: "BTCC", className: "touringcar", content: "Rounds 7, 8 & 9", id: "583@motocal.net" },
        //     { start: new Date(2015, 4, 10), end: new Date(2015, 4, 17), group: "Roads", className: "motorcycle", content: "North West 200", id: "682@motocal.net" },
        //     { start: new Date(2015, 4, 15), end: new Date(2015, 4, 17), group: "WTCC", className: "touringcar", content: "Germany", id: "720@motocal.net" },
        //     { start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group: "WorldRX", className: "rally", content: "Belgium", id: "687@motocal.net" },
        //     { start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group: "V8SC", className: "touringcar", content: "Winton SuperSprint", id: "663@motocal.net" },
        //     { start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group: "MotoGP", className: "motorcycle", content: "France", id: "543@motocal.net" },
        //     { start: new Date(2015, 4, 15), end: new Date(2015, 4, 18), group: "MotoAmerica", className: "motorcycle", content: "VIR", id: "707@motocal.net" },
        //     { start: new Date(2015, 4, 16), end: new Date(2015, 4, 17), group: "SGP", className: "rally", content: "Tampere", id: "730@motocal.net" },
        //     { start: new Date(2015, 4, 21), end: new Date(2015, 4, 25), group: "WRC", className: "rally", content: "Rally de Portugal", id: "594@motocal.net" },
        //     { start: new Date(2015, 4, 21), end: new Date(2015, 4, 25), group: "F1", className: "openwheel", content: "Monaco", id: "635@motocal.net" },
        //     { start: new Date(2015, 4, 22), end: new Date(2015, 4, 25), group: "WorldRX", className: "rally", content: "Great Britain", id: "688@motocal.net" },
        //     { start: new Date(2015, 4, 22), end: new Date(2015, 4, 25), group: "SBK", className: "motorcycle", content: "UK", id: "621@motocal.net" },
        //     { start: new Date(2015, 4, 22), end: new Date(2015, 4, 25), group: "IndyCar", className: "openwheel", content: "Indianapolis 500", id: "757@motocal.net" },
        //     { start: new Date(2015, 4, 23), end: new Date(2015, 4, 24), group: "SGP", className: "rally", content: "Prague", id: "731@motocal.net" },
        //     { start: new Date(2015, 4, 23), end: new Date(2015, 4, 24), group: "Formula E", className: "openwheel", content: "Germany", id: "537@motocal.net" },
        //     { start: new Date(2015, 4, 24), end: new Date(2015, 4, 25), group: "WSR", className: "openwheel", content: "Monaco", id: "743@motocal.net" },
        //     { start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group: "MotoAmerica", className: "motorcycle", content: "Road America", id: "708@motocal.net" },
        //     { start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group: "IndyCar", className: "openwheel", content: "Dual in Detroit", id: "758@motocal.net" },
        //     { start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group: "MotoGP", className: "motorcycle", content: "Italy", id: "562@motocal.net" },
        //     { start: new Date(2015, 4, 29), end: new Date(2015, 5, 1), group: "DTM", className: "touringcar", content: "Lausitzring", id: "651@motocal.net" },
        //     { start: new Date(2015, 4, 30), end: new Date(2015, 5, 13), group: "Roads", className: "motorcycle", content: "Isle of Man TT", id: "683@motocal.net" },
        //     { start: new Date(2015, 4, 30), end: new Date(2015, 5, 1), group: "WSR", className: "openwheel", content: "Belgium", id: "745@motocal.net" },
        //     { start: new Date(2015, 5, 4), end: new Date(2015, 5, 7), group: "IndyCar", className: "openwheel", content: "Firestone 600", id: "759@motocal.net" },
        //     { start: new Date(2015, 5, 5), end: new Date(2015, 5, 8), group: "SBK", className: "motorcycle", content: "Portugal", id: "622@motocal.net" },
        //     { start: new Date(2015, 5, 5), end: new Date(2015, 5, 8), group: "F1", className: "openwheel", content: "Canada", id: "636@motocal.net" },
        //     { start: new Date(2015, 5, 5), end: new Date(2015, 5, 8), group: "WTCC", className: "touringcar", content: "Russia", id: "721@motocal.net" },
        //     { start: new Date(2015, 5, 6), end: new Date(2015, 5, 7), group: "Formula E", className: "openwheel", content: "Russia", id: "716@motocal.net" },
        //     { start: new Date(2015, 5, 6), end: new Date(2015, 5, 8), group: "BTCC", className: "touringcar", content: "Rounds 10, 11 & 12", id: "584@motocal.net" },
        //     { start: new Date(2015, 5, 11), end: new Date(2015, 5, 15), group: "WRC", className: "rally", content: "Rally d'Italia Sardegna", id: "596@motocal.net" },
        //     { start: new Date(2015, 5, 12), end: new Date(2015, 5, 15), group: "MotoGP", className: "motorcycle", content: "Catalunya", id: "545@motocal.net" },
        //     { start: new Date(2015, 5, 27), end: new Date(2015, 5, 29), group: "Formula E", className: "openwheel", content: "United Kingdom", id: "538@motocal.net" },
        //     { start: new Date(2015, 6, 2), end: new Date(2015, 6, 6), group: "WRC", className: "rally", content: "Rally Poland", id: "597@motocal.net" },
        //     { start: new Date(2015, 6, 3), end: new Date(2015, 6, 6), group: "F1", className: "openwheel", content: "Britain", id: "638@motocal.net" },
        //     { start: new Date(2015, 6, 3), end: new Date(2015, 6, 6), group: "WorldRX", className: "rally", content: "Sweden", id: "690@motocal.net" },
        //     { start: new Date(2015, 6, 3), end: new Date(2015, 6, 6), group: "BSB", className: "motorcycle", content: "Round 5", id: "608@motocal.net" },
        //     { start: new Date(2015, 6, 4), end: new Date(2015, 6, 5), group: "SGP", className: "rally", content: "Cardiff", id: "732@motocal.net" },
        //     { start: new Date(2015, 7, 21), end: new Date(2015, 7, 24), group: "V8SC", className: "touringcar", content: "Sydney Motorsport Park SuperSprint", id: "667@motocal.net" },
        //     { start: new Date(2015, 7, 22), end: new Date(2015, 7, 23), group: "EWC", className: "endurance", content: "Oschersleben 8 Hours", id: "703@motocal.net" },
        //     { start: new Date(2015, 7, 22), end: new Date(2015, 8, 5), group: "Roads", className: "motorcycle", content: "Classic TT & Manx GP", id: "715@motocal.net" },
        //     { start: new Date(2015, 7, 22), end: new Date(2015, 7, 24), group: "BTCC", className: "touringcar", content: "Rounds 19, 20 & 21", id: "587@motocal.net" },
        //     { start: new Date(2015, 7, 24), end: new Date(2015, 7, 26), group: "Formula E", className: "openwheel", content: "Pre-season test 3", id: "771@motocal.net" },
        //     { start: new Date(2015, 7, 28), end: new Date(2015, 7, 31), group: "DTM", className: "touringcar", content: "Moscow Raceway", id: "655@motocal.net" },
        //     { start: new Date(2015, 7, 28), end: new Date(2015, 7, 31), group: "IndyCar", className: "openwheel", content: "Grand Prix of Sonoma", id: "767@motocal.net" }
        // ])


        // // create visualization
        // var container = document.getElementById('visualization');
        // var options = {
        //     // option groupOrder can be a property name or a sort function
        //     // the sort function must compare two groups and return a value
        //     //     > 0 when a > b
        //     //     < 0 when a < b
        //     //       0 when a == b
        //     groupOrder: function (a, b) {
        //         return a.value - b.value;
        //     },
        //     groupOrderSwap: function (a, b, groups) {
        //         var v = a.value;
        //         a.value = b.value;
        //         b.value = v;
        //     },
        //     orientation: 'both',
        //     editable: false,
        //     groupEditable: false,
        //     start: new Date(2015, 6, 1),
        //     end: new Date(2015, 7, 1)
        // };

        // var timeline = new vis.Timeline(container);
        // timeline.setOptions(options);
        // timeline.setGroups(groups);
        // timeline.setItems(items);

        this.greateTimeLine();
    }

    public greateTimeLine() {
        var data = {
            "results": {
                "entities": [

                ],
                "skills": [
                    {
                        "skillId": 1,
                        "skillName": "Microsoft",
                        "entities": [

                        ],
                        "workForces": [

                        ],
                        "workloadAvailabilities": [

                        ],
                        "profiles": [
                            {
                                "profileID": 43,
                                "vzid": "KASNYPE",
                                "firstName": "Kasny",
                                "secondName": "Petr",
                                "jabberStatus": null,
                                "photoURL": null,
                                "skillName": null,
                                "clearanceName": null,
                                "activeWorks": [
                                    {
                                        "vzid": null,
                                        "entities": [

                                        ]
                                    }
                                ],
                                "availabilities": [
                                    {
                                        "id": 100,
                                        "vzid": "KASNYPE",
                                        "startDate": "2016-11-02T00:00:00",
                                        "endDate": "2016-11-03T00:00:00",
                                        "type": 4
                                    }
                                ]
                            },
                            {
                                "profileID": 42,
                                "vzid": "IONITCO",
                                "firstName": "Ionita",
                                "secondName": "Corina",
                                "jabberStatus": null,
                                "photoURL": null,
                                "skillName": null,
                                "clearanceName": null,
                                "activeWorks": [
                                    {
                                        "vzid": null,
                                        "entities": [

                                        ]
                                    }
                                ],
                                "availabilities": [
                                    {
                                        "id": 101,
                                        "vzid": "IONITCO",
                                        "startDate": "2016-10-24T00:00:00",
                                        "endDate": "2016-10-28T00:00:00",
                                        "type": 4
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
        var _skills = data.results.skills;
        // { "content": "V8SC", "id": "V8SC", "value": 4, className: 'touringcars' },
        var _date = new Date();
        var _groups = [];
        var _group = {};
        var _items = [];
        var _item = {};
        // { "content": "V8SC", "id": "V8SC", "value": 4, className: 'touringcars' },
        for (var x = 0; x < _skills.length; x++) {
            _group = { "content": _skills[x].skillName, "id": _skills[x].skillId, "value": "", className: 'touringcars' }
            _groups.push(_group);

            var _profiles = data.results.skills[x].profiles;
            for (var y = 0; y < _profiles.length; y++) {
                _group = { "content": _profiles[y].firstName, "id": _profiles[y].profileID, "value": "", className: '' }
                _groups.push(_group);
                // { start: new Date(2015, 0, 10), end: new Date(2015, 0, 11), group: "LVA", className: "openwheel", content: "Argentina", id: "5319@motocal.net" },
                for (var z = 0; z < _profiles[y].availabilities.length; z++) {
                    _item ={ start: _profiles[y].availabilities[z].startDate, end: _profiles[y].availabilities[z].endDate, group: _profiles[y].profileID, className: "openwheel", content: _profiles[y].availabilities[z].vzid, id: _profiles[y].availabilities[z].id }
                    _items.push(_item);
                }
            }
        }
        
        
        var items = new vis.DataSet(_items);
        var groups = new vis.DataSet(_groups);

        var container = document.getElementById('visualization');
        var options = {
            // option groupOrder can be a property name or a sort function
            // the sort function must compare two groups and return a value
            //     > 0 when a > b
            //     < 0 when a < b
            //       0 when a == b
            groupOrder: function (a, b) {
                return a.value - b.value;
            },
            groupOrderSwap: function (a, b, groups) {
                var v = a.value;
                a.value = b.value;
                b.value = v;
            },
            orientation: 'both',
            editable: false,
            groupEditable: false,
            start: new Date(_date.getUTCFullYear(), _date.getMonth(), _date.getDate(),1),
            end: new Date(_date.getUTCFullYear(), _date.getMonth(), _date.getDate(),24)
        };

        var timeline = new vis.Timeline(container);
        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);
    }

    // Functions
    private setProfileTemplate(item: any) {

    }

    private setSkillTemplate(item: any) {

    }

}