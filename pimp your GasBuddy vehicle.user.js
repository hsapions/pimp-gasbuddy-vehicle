// ==UserScript==
// @name         pimp your GasBuddy vehicle 0.1
// @icon 		 http://i61.tinypic.com/1zbrmdg.jpg
// @namespace    http://your.homepage/
// @version      0.1
// @description  change gasbuddy cars to something else - this works on *gasbuddy.com and *gasprices.com. All this does is look for the specified image and replace with an alternate hosted on tinypics.
// @author       Homer Sapions
// no initial match needed - otherwise put: @match        http://*/*
// @grant        none
// @include http*://gasbuddy.com/*
// @include http*://*gasprices.com/*
// ==/UserScript==
//
// http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif
// http://www.virginiabeachgasprices.com/images/art/redtruckspeed.gif

// This fetches all of the <img> tags and stores them in "tags".
var tags = document.getElementsByTagName('img')
var randomize = 0   // make this 0 to always use the same vehicle, or 1 to randomly choose from availale vehicles

var redTruck = 'http://i61.tinypic.com/o8x5c0.jpg'
var orangeTruck = 'http://i59.tinypic.com/2a5xh6r.jpg'
var yellowTruck = 'http://i57.tinypic.com/23wpfs6.jpg'
var greenTruck = 'http://i60.tinypic.com/2572f43.jpg'
var blueTruck = 'http://i59.tinypic.com/2ztm2r4.jpg'
var indigoTruck = 'http://i60.tinypic.com/a4lu77.jpg'
var violetTruck = 'http://i58.tinypic.com/2lbol86.jpg'
var aquaTruck = 'http://i62.tinypic.com/2ah5noy.jpg'

// ---------------------- random image setup
function ImageArray (n) {
   this.length = n
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }

 image = new ImageArray(8)
 image[0] = redTruck
 image[1] = orangeTruck
 image[2] = yellowTruck
 image[3] = greenTruck
 image[4] = blueTruck
 image[5] = indigoTruck
 image[6] = violetTruck
 image[7] = aquatruck
 
 var rand = 60/image.length
 function randomimage() {
 	currentdate = new Date()
 	image_number = currentdate.getSeconds()
 	image_number = Math.floor(image_number/rand)
 	return(image[image_number])
 }
// ---------------------- random image setup


// This loops over all of the <img> tags.
for (var i = 0; i < tags.length; i++) {
  	// This replaces the src attribute of the tag with the modified one
  	// tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', 'http://i58.tinypic.com/2s832x0.gif')
    if (randomize < 1) {
    	tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', aquaTruck)
    }
    else {
    	var myvehicle = randomimage()
    	tags[i].src = tags[i].src.replace('http://www.virginiabeachgasprices.com/images/art/redcarspeed.gif', myvehicle)
    }
}
 