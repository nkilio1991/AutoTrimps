// ==UserScript==
// @name         AutoTrimps-Zek+local
// @version      1.0-Zek
// @namespace    https://nkilio1991.github.io/AutoTrimps
// @updateURL    https://nkilio1991.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps! local
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *nkilio1991.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Zek-local';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://nkilio1991.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
