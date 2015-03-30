GreaseMonkey / TamperMonkey / ViolentMonkey script to pimp the gasbuddy vehicle

This is a bit of simple JavaScript tested with Chrome (TamperMonkey),
Firefox (GreaseMonkey) and Opera (ViolentMonkey) to look for a specific
vehicle icon on http://gasbuddy.com and http://*gasprices.com and replace
it with a different vehicle.

Why this? No real reason other than "because I can", and as a long time
gasbuddy member like many others I have reached a point where my gasbuddy
vehicle never changes. Some people have been asking for alternate vehicles
but not being given anything.

This does not change anything on any gasbuddy site, or anyone else's
display. This change is only temporary and does a simple substitution
in the HTML code of the gasbuddy pages. It simply looks for
e.g. redcarspeed.gif or redcar.gif and replaces that with a semi randomly
chosen image hosted on tinypic.com. All vehicles of the same type will
be replaced so that every user at the same level will have the same
randomly chosen replacement.

People with the consecutive posting days "speed stripes" should see the
alternate images with the speed stripes. People without the speed stripes
should see alternate images without speed stripes. There are no guarantees,
anyone using this should validate themselves each day that they have received
all points and that the vehicle with / without speed stripes is appropriate.
This should always work, but bugs happen.

Remember, nobody else will see the alternate images, no gasbuddy data will
be changed at any time. This is only a temporary display change for those
who install the appropriate *Monkey plugin/extension/add-on and this user
script. This is for personal amusement only.