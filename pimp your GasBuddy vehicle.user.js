// ==UserScript==
// @name         pimp your GasBuddy vehicle
// @icon 		 http://i62.tinypic.com/102npew.jpg
// 		blue gas pump http://i61.tinypic.com/1zbrmdg.jpg
// 		green gas pump http://i59.tinypic.com/a0vujk.jpg
// 		red gas pump http://i62.tinypic.com/102npew.jpg
//		orange gas pump http://i60.tinypic.com/21e45yd.jpg
// 		yellow gas pump http://i60.tinypic.com/2gw9uoo.jpg
// @namespace    https://github.com/hsapions/pimp-gasbuddy-vehicle
// @version      0.4
// @description  pimp your ride: change gasbuddy cars to something else - this works on *gasbuddy.com and *gasprices.com.
// All this does is look for the specified image and replace with an alternate hosted on tinypics.
// @author       Homer Sapions
// no initial match needed - otherwise put: @match        http://*/*
// @grant        none
// @include http*://gasbuddy.com/*
// @include http*://*gasprices.com/*


/*
Usage rights - free forever. Nobody should ever pay anything for this.

Warranties - none. There is no code to touch anything on your computer or interfere with anything in your browsing.
This is a simple inline HTML image replacement only, and that only for the specified vehicles, and only on gasbuddy sites.

Tested with:
	Google Chrome 37.0.2062.94 m / TamperMonkey v 3.9.202
    Firefox 35.0 / GreaseMonkey v 2.3
    Opera 12.17 / ViolentMonkey v 1.6.8
This only watches for http*://gasbuddy.com and http*://*gasprices.com and replaces a standard image with a different image
NOTE: This only affects your display. It can not, and will not ever change any gasbuddy data, change your points or ranking.
Do not depend on this and the images it displays to remind you of your consecutive days 'speed stripes'. You should verify for
yourself that your points are appropriately awarded each day and that you have your consecutive days speed stripes.
Provided you use my images which have both stripes and no stripes, this should correctly replace a gasbuddy car with a 
different car, with or without stripes depending on your status. But as the warranty line above states, there are no guarantees.

To verify for yourself, turn this script off by clicking the GreaseMonkey (Firefox) / TamperMonkey (Chrome) / ViolentMonkey (Opera) icon,
then click the installed scripts tab, and click the green status button on the left next to the name 'pimp your GasBuddy vehicle'
The status button should turn red indicating that the script is disabled. Refresh your display and you should see standard gasbuddy
vehicles again.

http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif
http://www.virginiabeachgasprices.com/images/art/redtruckspeed.gif
*/

// ==/UserScript==
// This fetches all of the <img> tags from the loaded web page and stores them in "tags".
var tags = document.getElementsByTagName('img')
//var regex = /http:\/\/www\..*com\/images\/art\/redcar\.gif/ig
//tags[i].src = tags[i].src.replace(regex, myvehicle)


// Try to detect what my current car is so we can dynamically detect and replace, and not have
// to hard code the car as e.g. redcarspeed.gif
// THIS IS THE SRC FOR MY CAR - <img id="ctl00_TB_imgCar" src="images/art/redcarspeed.gif"
var myCar = tags[0].src
// alert ("my car is " + myCar)
myCar = myCar.replace('http://www.virginiabeachgasprices.com/images/art/', '')
// myCar = myCar.replace('.gif', '')
// alert ("now my car is " + myCar)



/*
// try to block the stupid video
var video = document.getElementsByTagName('player.')
for (var i = 0; i < video.length; i++) {
  	// This replaces the src attribute of the tag with the modified one
  	video[i].src = video[i].src.replace(new RegExp(".*",""))
}
*/

var randomize = 1   // make this 0 to always use the same vehicle, or 1 to randomly choose from availale vehicles

var ambulance = 'http://i60.tinypic.com/biowm.jpg'
var aquaTruck = 'http://i61.tinypic.com/vfi7pf.jpg'
var blueBike = 'http://i60.tinypic.com/2qajo2e.jpg'
var blueJeep = 'http://i58.tinypic.com/27xo4dw.jpg'
var blueTruck = 'http://i57.tinypic.com/1q3h3a.jpg'
var camoJeep = 'http://i58.tinypic.com/vzdao4.jpg'
var greenBike = 'http://i58.tinypic.com/2vllgkz.jpg'
var greenTruck = 'http://i58.tinypic.com/mvrz2q.jpg'
var indigoTruck = 'http://i57.tinypic.com/29xdrpx.jpg'
var orangeBike = 'http://i59.tinypic.com/fe3r81.jpg'
var orangeJeep = 'http://i59.tinypic.com/261enmu.jpg'
var orangeTruck = 'http://i57.tinypic.com/jf92mc.jpg'
var pinkJeep = 'http://i61.tinypic.com/15558nk.jpg'
var purpleJeep = 'http://i60.tinypic.com/o9guqh.jpg'
var rainbowJeep = 'http://i57.tinypic.com/16gii4h.jpg'
var rainbowTruck = 'http://i57.tinypic.com/315odjb.jpg'
var redBike = 'http://i62.tinypic.com/v3f0uu.jpg'
var redJeep = 'http://i61.tinypic.com/effgir.jpg'
var redPolice = 'http://i62.tinypic.com/2hzk2n4.jpg'
var redTruck = 'http://i59.tinypic.com/29em8ti.jpg'
var violetTruck = 'http://i62.tinypic.com/r0bb6d.jpg'
var yellowJeep = 'http://i58.tinypic.com/24muqfn.jpg'
var yellowTruck = 'http://i59.tinypic.com/5nyjb.jpg'

image = new ImageArray(23)
image[0] = ambulance
image[1] = aquaTruck
image[2] = blueBike
image[3] = blueJeep
image[4] = blueTruck
image[5] = camoJeep
image[6] = greenBike
image[7] = greenTruck
image[8] = indigoTruck
image[9] = orangeBike
image[10] = orangeJeep
image[11] = orangeTruck
image[12] = pinkJeep
image[13] = purpleJeep
image[14] = rainbowJeep
image[15] = rainbowTruck
image[16] = redBike
image[17] = redJeep
image[18] = redPolice
image[19] = redTruck
image[20] = violetTruck
image[21] = yellowJeep
image[22] = yellowTruck

var ambulanceSpeed = 'http://i60.tinypic.com/670bhu.jpg'
var aquaTruckSpeed = 'http://i60.tinypic.com/r9r3nm.jpg'
var blueBikeSpeed = 'http://i62.tinypic.com/fp2pop.jpg'
var blueJeepSpeed = 'http://i62.tinypic.com/246j7sz.jpg'
var blueTruckSpeed = 'http://i59.tinypic.com/2m4d204.jpg'
var camoJeepSpeed = 'http://i58.tinypic.com/2rnxwts.jpg'
var greenBikeSpeed = 'http://i61.tinypic.com/mlldag.jpg'
var greenTruckSpeed = 'http://i60.tinypic.com/244z429.jpg'
var indigoTruckSpeed = 'http://i59.tinypic.com/2n24en9.jpg'
var orangeBikeSpeed = 'http://i62.tinypic.com/2hrfodj.jpg'
var orangeJeepSpeed = 'http://i61.tinypic.com/65bh9x.jpg'
var orangeTruckSpeed = 'http://i57.tinypic.com/r1zhg6.jpg'
var pinkJeepSpeed = 'http://i58.tinypic.com/332m9uc.jpg'
var purpleJeepSpeed = 'http://i58.tinypic.com/vicxt0.jpg'
var rainbowJeepSpeed = 'http://i58.tinypic.com/foolso.jpg'
var rainbowTruckSpeed = 'http://i57.tinypic.com/x44093.jpg'
var redBikeSpeed = 'http://i58.tinypic.com/2uggkls.jpg'
var redJeepSpeed = 'http://i57.tinypic.com/21kch0l.jpg'
var redPoliceSpeed = 'http://i61.tinypic.com/33lf1ut.jpg'
var redTruckSpeed = 'http://i59.tinypic.com/30di59x.jpg'
var violetTruckSpeed = 'http://i62.tinypic.com/280nj8n.jpg'
var yellowJeepSpeed = 'http://i62.tinypic.com/1475p5.jpg'
var yellowTruckSpeed = 'http://i58.tinypic.com/24gk2h1.jpg'

speedimage = new ImageArray(23)
speedimage[0] = ambulanceSpeed
speedimage[1] = aquaTruckSpeed
speedimage[2] = blueBikeSpeed
speedimage[3] = blueJeepSpeed
speedimage[4] = blueTruckSpeed
speedimage[5] = camoJeepSpeed
speedimage[6] = greenBikeSpeed
speedimage[7] = greenTruckSpeed
speedimage[8] = indigoTruckSpeed
speedimage[9] = orangeBikeSpeed
speedimage[10] = orangeJeepSpeed
speedimage[11] = orangeTruckSpeed
speedimage[12] = pinkJeepSpeed
speedimage[13] = purpleJeepSpeed
speedimage[14] = rainbowJeepSpeed
speedimage[15] = rainbowTruckSpeed
speedimage[16] = redBikeSpeed
speedimage[17] = redJeepSpeed
speedimage[18] = redPoliceSpeed
speedimage[19] = redTruckSpeed
speedimage[20] = violetTruckSpeed
speedimage[21] = yellowJeepSpeed
speedimage[22] = yellowTruckSpeed

/* photoreal images
army_hammer.png  http://i59.tinypic.com/2uxwkk9.jpg
BlueCamaro.png  http://i59.tinypic.com/2j344xz.jpg
CabrioletRed.png  http://i62.tinypic.com/34zkjzt.jpg
destroyer.png  http://i58.tinypic.com/hst69x.jpg
dumper.png  http://i57.tinypic.com/abrxud.jpg
Excavator.png  http://i61.tinypic.com/sqp5qh.jpg
FireEscape.png  http://i62.tinypic.com/21a9ac.jpg
front_loader.png  http://i59.tinypic.com/30bdx50.jpg
helicopter.png  http://i57.tinypic.com/2yjq3wn.jpg
HelicopterMedical.png  http://i62.tinypic.com/qrnqmw.jpg
humvee.png  http://i58.tinypic.com/2q1uwm0.jpg
Motorcycle-icon.png  http://i58.tinypic.com/34rvrdv.jpg
muscle_car.png  http://i60.tinypic.com/i26nvb.jpg
pickup-icon.png  http://i58.tinypic.com/25iynmb.jpg
plane.png  http://i58.tinypic.com/deviv8.jpg
Police.png  http://i60.tinypic.com/16iwnip.jpg
QuadBikeBlue.png  http://i61.tinypic.com/xmo6rn.jpg
RedFerrari_512.png  http://i57.tinypic.com/f2kcah.jpg
roller_skates.png  http://i61.tinypic.com/2yzk2mt.jpg
school_bus.png  http://i62.tinypic.com/a2w12d.jpg
Sportscar-car-2-icon.png  http://i58.tinypic.com/ilwvfo.jpg
TowTruckYellow.png  http://i57.tinypic.com/34e8dc2.jpg
Yellow4Wheeler.png  http://i59.tinypic.com/2hrq32w.jpg
*/

var Army_hammer = 'http://i57.tinypic.com/xppy4n.jpg'
var BlueCamaro = 'http://i61.tinypic.com/1zfl9uo.jpg'
var CabrioletRed = 'http://i60.tinypic.com/of848g.jpg'
var Destroyer = 'http://i58.tinypic.com/2mrbczr.jpg'
var Dumper = 'http://i59.tinypic.com/23h0r40.jpg'
var Excavator = 'http://i61.tinypic.com/sopjxu.jpg'
var FireTruck = 'http://i59.tinypic.com/atslyf.jpg'
var FrontLoader = 'http://i57.tinypic.com/2craxwh.jpg'
var Helicopter = 'http://i60.tinypic.com/2ng95oh.jpg'
var HelicopterMedical = 'http://i61.tinypic.com/ig9qgh.jpg'
var Humvee = 'http://i61.tinypic.com/2emznt0.jpg'
var Motorcycle = 'http://i58.tinypic.com/2ch9f14.jpg'
var MuscleCar = 'http://i58.tinypic.com/2iubzva.jpg'
var Pickup = 'http://i58.tinypic.com/2q15eg6.jpg'
var Plane = 'http://i61.tinypic.com/28800ad.jpg'
var Police = 'http://i59.tinypic.com/2mwbbpi.jpg'
var QuadBikeBlue = 'http://i59.tinypic.com/hss0nm.jpg'
var RedFerrari = 'http://i57.tinypic.com/25filj5.jpg'
var RollerSkates = 'http://i60.tinypic.com/2duz1hg.jpg'
var SchoolBus = 'http://i61.tinypic.com/iyld8x.jpg'
var SportsCar = 'http://i57.tinypic.com/28rmf5k.jpg'
var TowTruckYellow = 'http://i62.tinypic.com/jj4c40.jpg'
var Yellow4Wheeler = 'http://i60.tinypic.com/63ruyu.jpg'
var YellowChevyTruck = 'http://i61.tinypic.com/27ybtrq.jpg'

photoimage = new ImageArray(24)
photoimage[0] = Army_hammer
photoimage[1] = BlueCamaro
photoimage[2] = CabrioletRed
photoimage[3] = Destroyer
photoimage[4] = Dumper
photoimage[5] = Excavator
photoimage[6] = FireTruck
photoimage[7] = FrontLoader
photoimage[8] = Helicopter
photoimage[9] = HelicopterMedical
photoimage[10] = Humvee
photoimage[11] = Motorcycle
photoimage[12] = MuscleCar
photoimage[13] = Pickup
photoimage[14] = Plane
photoimage[15] = Police
photoimage[16] = QuadBikeBlue
photoimage[17] = RedFerrari
photoimage[18] = RollerSkates
photoimage[19] = SchoolBus
photoimage[20] = SportsCar
photoimage[21] = TowTruckYellow
photoimage[22] = Yellow4Wheeler
photoimage[23] = YellowChevyTruck

    
// ----------------------------------------------------------------------------------------
// Only change the lines below, and then only if you want something other than defaults
var randomize = 1  // make this 0 to always use the same vehicle, or 1 to randomly choose from available vehicles
// var myspeedcar = redSpeedPolice
// var mycar = redPolice
// var gasbuddycarspeed = 'redcarspeed.gif'
// var gasbuddycar = 'redcar.gif'
// ----------------------------------------------------------------------------------------


// Functions
// ---------------------- random image setup
// this randomizing code found posted somewhere as an example
function ImageArray (n) {
	this.length = n
	for (var i =1; i <= n; i++) {
		this[i] = ' '
	}
}
 
var rand = 60/image.length
function randomimage() {
 	currentdate = new Date()
 	image_number = currentdate.getSeconds()
 	image_number = Math.floor(image_number/rand)
 	return(image[image_number])
}

function randomspeedimage() {
 	currentdate = new Date()
 	speedimage_number = currentdate.getSeconds()
 	speedimage_number = Math.floor(speedimage_number/rand)
 	return(speedimage[speedimage_number])
}

function randomphotoimage() {
 	currentdate = new Date()
 	photoimage_number = currentdate.getSeconds()
 	photoimage_number = Math.floor(photoimage_number/rand)
 	return(photoimage[photoimage_number])
}
// ---------------------- random image setup

// NOW CHANGE THIS REGEX TO DYNAMICALLY REPLACE CONTENTS OF myCar
var speedregex = /http:\/\/www\..*com\/images\/art\/redcarspeed\.gif/ig
var regex = /http:\/\/www\..*com\/images\/art\/redcar\.gif/ig
var siteregex = /http:\/\/www\..*com\/images\/art\//ig
var carregex = new RegExp(myCar,"ig");

// This loops over all of the <img> tags.
for (var i = 0; i < tags.length; i++) {
	// This replaces the src attribute of the tag with the modified one
	if (randomize < 1) {
		tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', redPoliceSpeed)
        tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcar.gif', redPolice)
	}
	else {
        // following is an attempt to randomize speed vehicles on any gasbuddy sites, not just virginiabeach
		// var myspeedvehicle = randomphotoimage()
        var myspeedvehicle = randomspeedimage()
        tags[i].src = tags[i].src.replace(speedregex, myspeedvehicle)  // THIS WORKS
        tags[i].src = tags[i].src.replace('vertical-align: middle','vertical-align: bottom')
        //tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', myspeedvehicle)
        
        // following is an attempt to randomize non speed vehicles on any gasbuddy sites, not just virginiabeach
        var myvehicle = randomimage()
        tags[i].src = tags[i].src.replace(regex, myvehicle)  // THIS WORKS
        //tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcar.gif', myvehicle)       
	}
}
