//Static request
var lightState = {
1: {
state: {
on: true,
bri: 128,
hue: 4000,
sat: 254,
effect: "none",
xy: [
0.6334,
0.3527
],
ct: 500,
alert: "none",
colormode: "hs",
reachable: true
},
type: "Extended color light",
name: "Great Room",
modelid: "LCT002",
manufacturername: "Philips",
uniqueid: "00:17:88:01:00:d1:67:5f-0b",
swversion: "5.23.1.13452"
},
2: {
state: {
on: true,
bri: 254,
hue: 14910,
sat: 144,
effect: "none",
xy: [
0.4596,
0.4105
],
ct: 369,
alert: "none",
colormode: "ct",
reachable: false
},
type: "Extended color light",
name: "Matt",
modelid: "LCT002",
manufacturername: "Philips",
uniqueid: "00:17:88:01:00:eb:8e:94-0b",
swversion: "5.23.1.13452"
},
4: {
state: {
on: true,
bri: 195,
hue: 13944,
sat: 186,
effect: "none",
xy: [
0.49,
0.4149
],
ct: 420,
alert: "none",
colormode: "xy",
reachable: true
},
type: "Extended color light",
name: "Tom",
modelid: "LCT001",
manufacturername: "Philips",
uniqueid: "00:12:4b:00:03:cd:35:f5-0b",
swversion: "5.23.1.13452"
}
}

var lightString = JSON.stringify(lightState);
var lightObj = JSON.parse(lightString);

console.log(lightObj["1"].state.on);