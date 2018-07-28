export default class Schedule {
    constructor() {
        'ngInject';

        var DOTA = "dota";
        var HS = "hs";
        var HOTS = "hots";
        var LOL = "lol";
        var OW = "ow";
        var RL = "rl";
        var OTHER = "other";

        var DOTA_LOGO = "images/dota_logo.png";
        var HS_LOGO = "images/hs_logo.png";
        var HOTS_LOGO = "images/hots_logo.png";
        var LOL_LOGO = "images/lol_logo.png";
        var OW_LOGO = "images/ow_logo.png";
        var RL_LOGO = "images/rl_logo.jpg";
        var OTHER_LOGO = "images/power.jpg";

        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        // LIST OF UPCOMING EVENTS
        // - Only future events will be displayed on the main page.  Past dates will be filtered out.
        // - Games will only be displayed on the page with the proper game labels.
        this.events = [
            {
                "game": HOTS,
                "label": "HOTS Tryouts",
                "date": new Date(2017, 8, 7),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hots_logo.png",
                "description": "Heroes of the Storm competitive team tryouts.",
                "signupLink": ""
            },
            {
                "game": HS,
                "label": "Hearthstone Tryouts",
                "date": new Date(2017, 8, 16),
                "time": "",
                "location": "Goldy's Gameroom",
                "imgPath": "images/hs_logo.png",
                "description": "Hearthstone competitive team tryouts.",
                "signupLink": ""
            },
            {
                "game": HS,
                "label": "Hearthstone Sealed Event",
                "date": new Date(2017, 8, 21),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hs_logo.png",
                "description": "",
                "signupLink": ""
            },
            {
                "game": HOTS,
                "label": "HOTS Randomized Teams Event",
                "date": new Date(2017, 9, 5),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hots_logo.png",
                "description": "Heroes of the Storm Randomized Teams Event.",
                "signupLink": ""
            },
            {
                "game": OTHER,
                "label": "Paint the Bridge",
                "date": new Date(2017, 9, 5),
                "time": "",
                "location": "Washington Ave. Bridge",
                "imgPath": "images/power.jpg",
                "description": "Bridge painting for the U's Tespa organization!",
                "signupLink": ""
            },
            {
                "game": HS,
                "label": "Hearthstone Wild Tournament",
                "date": new Date(2017, 9, 19),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hs_logo.png",
                "description": "",
                "signupLink": ""
            },
            {
                "game": OTHER,
                "label": "NBA 2K and/or Madden",
                "date": new Date(2017, 10, 2),
                "time": "",
                "location": "Goldy's Gameroom",
                "imgPath": "images/power.jpg",
                "description": "",
                "signupLink": ""
            },
            {
                "game": OW,
                "label": "Overwatch",
                "date": new Date(2017, 10, 16),
                "time": "",
                "location": "Cofman Memorial Union rm 324",
                "imgPath": "images/ow_logo.png",
                "description": "",
                "signupLink": ""
            },
            {
                "game": RL,
                "label": "Rocket League",
                "date": new Date(2017, 10, 30),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/rl_logo.jpg",
                "description": "",
                "signupLink": ""
            },
            {
                "game": HS,
                "label": "Hearthstone Standard Tournament",
                "date": new Date(2017, 11, 14),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hs_logo.png",
                "description": "",
                "signupLink": ""
            }
        ]

        this.eventsFiltered = function (game = "") {
            var today = new Date();
            var yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            return game === "" ? this.events.filter(event => event.date > yesterday) :
                this.events.filter(event => event.game === game && event.date > yesterday);
        }
    }
}
