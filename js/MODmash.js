var MODmash = (function (window, $) {

var MAP = [
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1],[1]]
];

var AUDIO = [
    'audio/a-001.wav',
    'audio/a-002.wav',
    'audio/a-003.wav',
    'audio/a-004.wav'
];

var ENUM = [
    // Gate types:
    [
        '1_IN_1_OUT',
        '2_IN_1_OUT',
        'UP',
        'DOWN',
        'RIGHT',
        'LEFT',
    ],
    // Effect types:
    [
        'SLOW',
        'ACCELERATE'
    ],
];

var audio = function() {
    console.log('audio');
};

/*
while( user doesn't exit )
  check for user input
  run AI
  move enemies
  resolve collisions
  draw graphics
  play sounds
end while
*/

// TODO: Import audio and set them to hidden and check they are playing! :D
var init = (function(){
    console.log('init');
    $.each(AUDIO, function(index, value) { 
        console.log('audio: ' + value);
        $('#audio').append('<audio src="' + value + '" autobuffer loop controls></audio>');
    });
    return self;
}());

var run = (function() {
    console.log('run');
    var i = 0;
    while (i<100 /*true*/) {
        // input();
        // set_tiles();
        // set_tracks();
        audio();

        i++;
    }
    return self;
}());

return run;

}(window, jQuery));

