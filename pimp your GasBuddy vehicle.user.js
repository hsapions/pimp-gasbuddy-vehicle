// ==UserScript==
// @name         pimp your GasBuddy vehicle
// @icon 		 http://i62.tinypic.com/102npew.jpg
// 		blue gas pump http://i61.tinypic.com/1zbrmdg.jpg
// 		green gas pump http://i59.tinypic.com/a0vujk.jpg
// 		red gas pump http://i62.tinypic.com/102npew.jpg
//		orange gas pump http://i60.tinypic.com/21e45yd.jpg
// 		yellow gas pump http://i60.tinypic.com/2gw9uoo.jpg
// @namespace    http://your.homepage/
// @version      0.3
// @description  pimp your ride: change gasbuddy cars to something else - this works on *gasbuddy.com and *gasprices.com.
// All this does is look for the specified image and replace with an alternate hosted on tinypics.
// @author       Homer Sapions
// no initial match needed - otherwise put: @match        http://*/*
// @grant        none
// @include http*://gasbuddy.com/*
// @include http*://*gasprices.com/*


/*
Usage rights - free forever. Nobody should ever pay anything for this.

Warranties - none. There is no code to touch anything on your computer or interfere with anything in your browsing. This is a simple inline HTML
image replacement only, and that only for the specified vehicles, and only on gasbuddy sites.

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
//var video = document.getElementsByTagName("<script src='//player.ooyala.com/")
//var regex = /http:\/\/www\..*com\/images\/art\/redcar\.gif/ig
//tags[i].src = tags[i].src.replace(regex, myvehicle)

/*
// try to block the stupid video
var video = document.getElementsByTagName('player.')
for (var i = 0; i < video.length; i++) {
  	// This replaces the src attribute of the tag with the modified one
  	video[i].src = video[i].src.replace(new RegExp(".*",""))
}
*/

var randomize = 1   // make this 0 to always use the same vehicle, or 1 to randomly choose from availale vehicles

var redTruck = 'http://i61.tinypic.com/2jdf3fq.jpg'
var orangeTruck = 'http://i61.tinypic.com/1070513.jpg'
var yellowTruck = 'http://i58.tinypic.com/2gxjj34.jpg'
var greenTruck = 'http://i59.tinypic.com/27ywfsx.jpg'
var blueTruck = 'http://i61.tinypic.com/30tnn83.jpg'
var indigoTruck = 'http://i57.tinypic.com/r8uxcj.jpg'
var violetTruck = 'http://i57.tinypic.com/2zgdu36.jpg'
var aquaTruck = 'http://i59.tinypic.com/2yubk3l.jpg'
var ambulance = 'http://i57.tinypic.com/25fpq9k.jpg'
var blueBike = 'http://i60.tinypic.com/167nk1j.jpg'
var greenBike = 'http://i58.tinypic.com/20pao9l.jpg'
var orangeBike = 'http://i61.tinypic.com/30vylvr.jpg'
var redPolice = 'http://i59.tinypic.com/258q814.jpg'
var blueJeep = 'http://i59.tinypic.com/24l05s3.jpg'
var camoJeep = 'http://i59.tinypic.com/s4qsmg.jpg'
var orangeJeep = 'http://i62.tinypic.com/2v9ub1j.jpg'
var pinkJeep = 'http://i61.tinypic.com/omdqc.jpg'
var purpleJeep = 'http://i60.tinypic.com/jru34x.jpg'
var redJeep = 'http://i57.tinypic.com/2qb90zm.jpg'
var yellowJeep = 'http://i58.tinypic.com/6xsr9c.jpg'

image = new ImageArray(20)
image[0] = redTruck
image[1] = orangeTruck
image[2] = yellowTruck
image[3] = greenTruck
image[4] = blueTruck
image[5] = indigoTruck
image[6] = violetTruck
image[7] = aquaTruck
image[8] = ambulance
image[9] = blueBike
image[10] = greenBike
image[11] = orangeBike
image[12] = redPolice
image[13] = blueJeep
image[14] = camoJeep
image[15] = orangeJeep
image[16] = pinkJeep
image[17] = purpleJeep
image[18] = redJeep
image[19] = yellowJeep

var redTruckSpeed = 'http://i58.tinypic.com/a1lobm.jpg'
var orangeTruckSpeed = 'http://i59.tinypic.com/117abf6.jpg'
var yellowTruckSpeed = 'http://i59.tinypic.com/2vblu95.jpg'
var greenTruckSpeed = 'http://i57.tinypic.com/ruqutl.jpg'
var blueTruckSpeed = 'http://i59.tinypic.com/w1p6yq.jpg'
var indigoTruckSpeed = 'http://i61.tinypic.com/20aqc2g.jpg'
var violetTruckSpeed = 'http://i59.tinypic.com/2cntoqd.jpg'
var aquaTruckSpeed = 'http://i57.tinypic.com/yl64o.jpg'
var ambulanceSpeed = 'http://i61.tinypic.com/igzzmc.jpg'
var blueBikeSpeed = 'http://i58.tinypic.com/2mpiquw.jpg'
var greenBikeSpeed = 'http://i58.tinypic.com/2s0ew.jpg'
var orangeBikeSpeed = 'http://i58.tinypic.com/2rr1bnp.jpg'
var redPoliceSpeed = 'http://i60.tinypic.com/x65mu.jpg'
var blueJeepSpeed = 'http://i62.tinypic.com/2qkurm9.jpg'
var camoJeepSpeed = 'http://i57.tinypic.com/20fp7xg.jpg'
var orangeJeepSpeed = 'http://i62.tinypic.com/116kuhl.jpg'
var pinkJeepSpeed = 'http://i58.tinypic.com/15cd6s0.jpg'
var purpleJeepSpeed = 'http://i59.tinypic.com/e8n404.jpg'
var redJeepSpeed = 'http://i60.tinypic.com/2rejwck.jpg'
var yellowJeepSpeed = 'http://i60.tinypic.com/qrn6m1.jpg'

speedimage = new ImageArray(20)
speedimage[0] = redTruckSpeed
speedimage[1] = orangeTruckSpeed
speedimage[2] = yellowTruckSpeed
speedimage[3] = greenTruckSpeed
speedimage[4] = blueTruckSpeed
speedimage[5] = indigoTruckSpeed
speedimage[6] = violetTruckSpeed
speedimage[7] = aquaTruckSpeed
speedimage[8] = ambulanceSpeed
speedimage[9] = blueBikeSpeed
speedimage[10] = greenBikeSpeed
speedimage[11] = orangeBikeSpeed
speedimage[12] = redPoliceSpeed
speedimage[13] = blueJeepSpeed
speedimage[14] = camoJeepSpeed
speedimage[15] = orangeJeepSpeed
speedimage[16] = pinkJeepSpeed
speedimage[17] = purpleJeepSpeed
speedimage[18] = redJeepSpeed
speedimage[19] = yellowJeepSpeed
    
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
// ---------------------- random image setup


// This loops over all of the <img> tags.
for (var i = 0; i < tags.length; i++) {
	// This replaces the src attribute of the tag with the modified one
	if (randomize < 1) {
		tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', redPoliceSpeed)
        tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcar.gif', redPolice)
	}
	else {
        // following is an attempt to randomize speed vehicles on any gasbuddy sites, not just virginiabeach
		var myspeedvehicle = randomspeedimage()
        var regex = /http:\/\/www\..*com\/images\/art\/redcarspeed\.gif/ig
        tags[i].src = tags[i].src.replace(regex, myspeedvehicle)
        //tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', myspeedvehicle)
        
        // following is an attempt to randomize non speed vehicles on any gasbuddy sites, not just virginiabeach
        var myvehicle = randomimage()
        var regex = /http:\/\/www\..*com\/images\/art\/redcar\.gif/ig
        tags[i].src = tags[i].src.replace(regex, myvehicle)
        //tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcar.gif', myvehicle)       
	}
}
