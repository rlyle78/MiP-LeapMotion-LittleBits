var Cylon = require('cylon');

Cylon.robot({
  connections: { bluetooth: {adaptor: 'central', uuid: 'dec17906e41d4d05b0877755a25e9694', module: 'cylon-ble'}},
  devices: {mip: {driver: 'mip'}},

  work: function(my) {
    my.mip.setHeadLED(2, 2, 2, 2);
    after((2).seconds(), function() {
      my.mip.driveDistance(0, 10, 0, 0);
    });
    after((3).seconds(), function() {
      my.mip.setHeadLED(1, 1, 1, 1);
    });
  }
}).start();
