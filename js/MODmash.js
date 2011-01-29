var MODmash = (function (window, $) {

var MAP = [
    [['BLACK_UP_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_UP'],['BLACK_UP_TO_RIGHT'],['BLACK_LEFT_TO_DOWN'],['BLACK_RIGHT_TO_DOWN'],['BLACK_RIGHT_TO_LEFT'],['BLACK_UP_TO_LEFT'],['BLACK_UP_TO_RIGHT'],['BLACK_LEFT_TO_UP'],['BLACK_UP_TO_DOWN'],['GREEN_UP_TO_DOWN'],['BLACK_UP_TO_RIGHT'],['BLACK_RIGHT_TO_LEFT'],['BLACK_RIGHT_TO_LEFT'],['BLACK_RIGHT_TO_LEFT'],['BLACK_RIGHT_TO_LEFT'],['BLACK_RIGHT_TO_LEFT']],
    [['YELLOW_JACK'],['YELLOW_LEFT_TO_RIGHT'],['YELLOW_LEFT_TO_RIGHT'],['YELLOW_LEFT_TO_RIGHT'],['YELLOW_LEFT_TO_DOWN'],['BLACK_UP_TO_DOWN'],['BLACK_UP_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_UP'],['GREEN_UP_TO_RIGHT'],['GREEN_LEFT_TO_RIGHT'],['GREEN_LEFT_TO_RIGHT'],['GREEN_LEFT_TO_RIGHT'],['GREEN_LEFT_TO_RIGHT'],['GREEN_LEFT_TO_RIGHT'],['GREEN_JACK']],
    [['EMPTY'],['BLACK_DOWN_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_DOWN'],['BLACK_UP_TO_DOWN'],['BLACK_UP_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_DOWN'],['BLACK_DOWN_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_DOWN'],['BLACK_DOWN_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT']],
    [['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_UP'],['BLACK_DOWN_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['SPEAKER_TOP_LEFT'],['SPEAKER_TOP_MID'],['SPEAKER_TOP_RIGHT'],['BLACK_RIGHT_TO_LEFT'],['BLACK_UP_TO_LEFT'],['BLACK_DOWN_TO_UP'],['BLACK_DOWN_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT']],
    [['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_RIGHT'],['BLACK_LEFT_TO_UP'],['BLACK_DOWN_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['SPEAKER_MID_LEFT'],['SPEAKER_MID_MID'],['SPEAKER_MID_RIGHT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_RIGHT_TO_LEFT'],['BLUE_JACK']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['SPEAKER_BOT_LEFT'],['SPEAKER_BOT_MID'],['SPEAKER_BOT_RIGHT'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']]
];

var AUDIO = {
    'RED_JACK'    : 'audio/a-002.wav',
    'GREEN_JACK'  : 'audio/a-003.wav',
    'BLUE_JACK'   : 'audio/a-001.wav',
    'YELLOW_JACK' : 'audio/a-004.wav'
};

var JACK = ['BLUE_JACK', 'RED_JACK', 'GREEN_JACK', 'YELLOW_JACK'];

var SPEAKER = [
    'SPEAKER_TOP_LEFT', 'SPEAKER_TOP_MID', 'SPEAKER_TOP_RIGHT',
    'SPEAKER_MID_LEFT', 'SPEAKER_MID_MID', 'SPEAKER_MID_RIGHT',
    'SPEAKER_BOT_LEFT', 'SPEAKER_BOT_MID', 'SPEAKER_BOT_RIGHT'
];

var UP_TO_DOWN  = ['BLACK_UP_TO_DOWN', 'RED_UP_TO_DOWN', 'BLUE_UP_TO_DOWN', 'GREEN_UP_TO_DOWN','YELLOW_UP_TO_DOWN'];
var DOWN_TO_UP  = ['BLACK_DOWN_TO_UP', 'RED_DOWN_TO_UP', 'BLUE_DOWN_TO_UP', 'GREEN_DOWN_TO_UP', 'YELLOW_DOWN_TO_UP'];

var UP_TO_RIGHT  = ['BLACK_UP_TO_RIGHT', 'RED_UP_TO_RIGHT', 'BLUE_UP_TO_RIGHT', 'GREEN_UP_TO_RIGHT', 'YELLOW_UP_TO_RIGHT'];
var RIGHT_TO_UP  = ['BLACK_RIGHT_TO_UP', 'RED_RIGHT_TO_UP', 'BLUE_RIGHT_TO_UP', 'GREEN_RIGHT_TO_UP', 'YELLOW_RIGHT_TO_UP'];

var UP_TO_LEFT  = ['BLACK_UP_TO_LEFT', 'RED_UP_TO_LEFT', 'BLUE_UP_TO_LEFT', 'GREEN_UP_TO_LEFT', 'YELLOW_UP_TO_LEFT'];
var LEFT_TO_UP  = ['BLACK_LEFT_TO_UP', 'RED_LEFT_TO_UP', 'BLUE_LEFT_TO_UP', 'GREEN_LEFT_TO_UP', 'YELLOW_LEFT_TO_UP'];

var DOWN_TO_RIGHT  = ['BLACK_DOWN_TO_RIGHT', 'RED_DOWN_TO_RIGHT', 'BLUE_DOWN_TO_RIGHT', 'GREEN_DOWN_TO_RIGHT', 'YELLOW_DOWN_TO_RIGHT'];
var RIGHT_TO_DOWN  = ['BLACK_RIGHT_TO_DOWN', 'RED_RIGHT_TO_DOWN', 'BLUE_RIGHT_TO_DOWN', 'GREEN_RIGHT_TO_DOWN', 'YELLOW_RIGHT_TO_DOWN'];

var DOWN_TO_LEFT  = ['BLACK_DOWN_TO_LEFT', 'RED_DOWN_TO_LEFT', 'BLUE_DOWN_TO_LEFT', 'GREEN_DOWN_TO_LEFT', 'YELLOW_DOWN_TO_LEFT'];
var LEFT_TO_DOWN  = ['BLACK_LEFT_TO_DOWN', 'RED_LEFT_TO_DOWN', 'BLUE_LEFT_TO_DOWN', 'GREEN_LEFT_TO_DOWN', 'YELLOW_LEFT_TO_DOWN'];

var LEFT_TO_RIGHT  = ['BLACK_LEFT_TO_RIGHT', 'RED_LEFT_TO_RIGHT', 'BLUE_LEFT_TO_RIGHT', 'GREEN_LEFT_TO_RIGHT', 'YELLOW_LEFT_TO_RIGHT'];
var RIGHT_TO_LEFT  = ['BLACK_RIGHT_TO_LEFT', 'RED_RIGHT_TO_LEFT', 'BLUE_RIGHT_TO_LEFT', 'GREEN_RIGHT_TO_LEFT', 'YELLOW_RIGHT_TO_LEFT'];

var SWITCHES = ['1_UP_TO_1_DOWN', '1_DOWN_TO_1_UP'];

var ENUM = {
    //'SWITCHES' : {},
    'GATES' : {
        // Switches
        /*
        '1_RIGHT_TO_1_LEFT' : { 'IMAGE': '' },
        '1_LEFT_TO_1_RIGHT' : { 'IMAGE': 'img/A_bot.png' },

        '1_UP_TO_1_DOWN' : { 'IMAGE': '' },
        '1_DOWN_TO_1_UP' : { 'IMAGE': '' },
        */

        // Gates
        'EMPTY' : { 'IMAGE': 'img/tile.png' },

        'SPEAKER_TOP_LEFT'  : { 'IMAGE': 'img/speaker_top_left.png'  },
        'SPEAKER_TOP_MID'   : { 'IMAGE': 'img/speaker_top_mid.png'   },
        'SPEAKER_TOP_RIGHT' : { 'IMAGE': 'img/speaker_top_right.png' },
        'SPEAKER_MID_LEFT'  : { 'IMAGE': 'img/speaker_mid_left.png'  },
        'SPEAKER_MID_MID'   : { 'IMAGE': 'img/speaker_mid_mid.png'   },
        'SPEAKER_MID_RIGHT' : { 'IMAGE': 'img/speaker_mid_right.png' },
        'SPEAKER_BOT_LEFT'  : { 'IMAGE': 'img/speaker_bot_left.png'  },
        'SPEAKER_BOT_MID'   : { 'IMAGE': 'img/speaker_bot_mid.png'   },
        'SPEAKER_BOT_RIGHT' : { 'IMAGE': 'img/speaker_bot_right.png' },

        'BLUE_JACK'   : { 'IMAGE': 'img/blue_jack.png'   },
        'RED_JACK'    : { 'IMAGE': 'img/red_jack.png'    },
        'GREEN_JACK'  : { 'IMAGE': 'img/green_jack.png'  },
        'YELLOW_JACK' : { 'IMAGE': 'img/yellow_jack.png' },

        'BLACK_UP_TO_DOWN'  : { 'IMAGE': 'img/grey_V.png'   },
        'RED_UP_TO_DOWN'    : { 'IMAGE': 'img/red_V.png'    },
        'BLUE_UP_TO_DOWN'   : { 'IMAGE': 'img/blue_V.png'   },
        'GREEN_UP_TO_DOWN'  : { 'IMAGE': 'img/green_V.png'  },
        'YELLOW_UP_TO_DOWN' : { 'IMAGE': 'img/yellow_V.png' },
        'BLACK_DOWN_TO_UP'  : { 'IMAGE': 'img/grey_V.png'   },
        'RED_DOWN_TO_UP'    : { 'IMAGE': 'img/red_V.png'    },
        'BLUE_DOWN_TO_UP'   : { 'IMAGE': 'img/blue_V.png'   },
        'GREEN_DOWN_TO_UP'  : { 'IMAGE': 'img/green_V.png'  },
        'YELLOW_DOWN_TO_UP' : { 'IMAGE': 'img/yellow_V.png' },

        'BLACK_LEFT_TO_RIGHT'  : { 'IMAGE': 'img/grey_H.png'   },
        'RED_LEFT_TO_RIGHT'    : { 'IMAGE': 'img/red_H.png'    },
        'BLUE_LEFT_TO_RIGHT'   : { 'IMAGE': 'img/blue_H.png'   },
        'GREEN_LEFT_TO_RIGHT'  : { 'IMAGE': 'img/green_H.png'  },
        'YELLOW_LEFT_TO_RIGHT' : { 'IMAGE': 'img/yellow_H.png' },
        'BLACK_RIGHT_TO_LEFT'  : { 'IMAGE': 'img/grey_H.png'   },
        'RED_RIGHT_TO_LEFT'    : { 'IMAGE': 'img/red_H.png'    },
        'BLUE_RIGHT_TO_LEFT'   : { 'IMAGE': 'img/blue_H.png'   },
        'GREEN_RIGHT_TO_LEFT'  : { 'IMAGE': 'img/green_H.png'  },
        'YELLOW_RIGHT_TO_LEFT' : { 'IMAGE': 'img/yellow_H.png' },

        'BLACK_UP_TO_RIGHT'  : { 'IMAGE': 'img/grey_UR.png'   },
        'RED_UP_TO_RIGHT'    : { 'IMAGE': 'img/red_UR.png'    },
        'BLUE_UP_TO_RIGHT'   : { 'IMAGE': 'img/blue_UR.png'   },
        'GREEN_UP_TO_RIGHT'  : { 'IMAGE': 'img/green_UR.png'  },
        'YELLOW_UP_TO_RIGHT' : { 'IMAGE': 'img/yellow_UR.png' },
        'BLACK_RIGHT_TO_UP'  : { 'IMAGE': 'img/grey_UR.png'   },
        'RED_RIGHT_TO_UP'    : { 'IMAGE': 'img/red_UR.png'    },
        'BLUE_RIGHT_TO_UP'   : { 'IMAGE': 'img/blue_UR.png'   },
        'GREEN_RIGHT_TO_UP'  : { 'IMAGE': 'img/green_UR.png'  },
        'YELLOW_RIGHT_TO_UP' : { 'IMAGE': 'img/yellow_UR.png' },

        'BLACK_UP_TO_LEFT'  : { 'IMAGE': 'img/grey_UL.png'   },
        'RED_UP_TO_LEFT'    : { 'IMAGE': 'img/red_UL.png'    },
        'BLUE_UP_TO_LEFT'   : { 'IMAGE': 'img/blue_UL.png'   },
        'GREEN_UP_TO_LEFT'  : { 'IMAGE': 'img/green_UL.png'  },
        'YELLOW_UP_TO_LEFT' : { 'IMAGE': 'img/yellow_UL.png' },
        'BLACK_LEFT_TO_UP'  : { 'IMAGE': 'img/grey_UL.png'   },
        'RED_LEFT_TO_UP'    : { 'IMAGE': 'img/red_UL.png'    },
        'BLUE_LEFT_TO_UP'   : { 'IMAGE': 'img/blue_UL.png'   },
        'GREEN_LEFT_TO_UP'  : { 'IMAGE': 'img/green_UL.png'  },
        'YELLOW_LEFT_TO_UP' : { 'IMAGE': 'img/yellow_UL.png' },

        'BLACK_DOWN_TO_RIGHT'  : { 'IMAGE': 'img/grey_DR.png'   },
        'RED_DOWN_TO_RIGHT'    : { 'IMAGE': 'img/red_DR.png'    },
        'BLUE_DOWN_TO_RIGHT'   : { 'IMAGE': 'img/blue_DR.png'   },
        'GREEN_DOWN_TO_RIGHT'  : { 'IMAGE': 'img/green_DR.png'  },
        'YELLOW_DOWN_TO_RIGHT' : { 'IMAGE': 'img/yellow_DR.png' },
        'BLACK_RIGHT_TO_DOWN'  : { 'IMAGE': 'img/grey_DR.png'   },
        'RED_RIGHT_TO_DOWN'    : { 'IMAGE': 'img/red_DR.png'    },
        'BLUE_RIGHT_TO_DOWN'   : { 'IMAGE': 'img/blue_DR.png'   },
        'GREEN_RIGHT_TO_DOWN'  : { 'IMAGE': 'img/green_DR.png'  },
        'YELLOW_RIGHT_TO_DOWN' : { 'IMAGE': 'img/yellow_DR.png' },

        'BLACK_DOWN_TO_LEFT'  : { 'IMAGE': 'img/grey_DL.png'   },
        'RED_DOWN_TO_LEFT'    : { 'IMAGE': 'img/red_DL.png'    },
        'BLUE_DOWN_TO_LEFT'   : { 'IMAGE': 'img/blue_DL.png'   },
        'GREEN_DOWN_TO_LEFT'  : { 'IMAGE': 'img/green_DL.png'  },
        'YELLOW_DOWN_TO_LEFT' : { 'IMAGE': 'img/yellow_DL.png' },
        'BLACK_LEFT_TO_DOWN'  : { 'IMAGE': 'img/grey_DL.png'   },
        'RED_LEFT_TO_DOWN'    : { 'IMAGE': 'img/red_DL.png'    },
        'BLUE_LEFT_TO_DOWN'   : { 'IMAGE': 'img/blue_DL.png'   },
        'GREEN_LEFT_TO_DOWN'  : { 'IMAGE': 'img/green_DL.png'  },
        'YELLOW_LEFT_TO_DOWN' : { 'IMAGE': 'img/yellow_DL.png' },
    }
};

var ACTIVE_ROW    = null;
var ACTIVE_COLUMN = null;

// Checks for audio connections (from jacks to speaker) and mutes/unmutes the audio tracks.
// TODO: For now, jacks can only be placed on right/left-most sides of screen (first/last row).
var audio = function() {
    console.log('audio');
    jacks = [];
    // Populate jacks in format [ [row,column], [row,column], ... ]
    /*$.each(MAP, function(index, value) { // Iterate over all tiles and check for jacks.
        var row = index;
        */
        var row_length = MAP.length;
        var column_length = MAP[row_length -1].length;
        /*$.each(MAP[row], function(column, tile) { if (JACK.indexOf(gate(tile)) != -1) { jacks.push({'jack': gate(tile), 'row':row,'column':column}); } });*/
        for (var row=0; row < MAP.length; row++) {
            var tile = MAP[row][column_length -1];
            if (JACK.indexOf(gate(tile)) != -1) { jacks.push({'jack': gate(tile), 'row':row, 'column':column_length -1 }); }
            var tile = MAP[row][0];
            if (JACK.indexOf(gate(tile)) != -1) { jacks.push({'jack': gate(tile), 'row':row, 'column':0                }); }
        }
    //});
    $.each(jacks, function(index, jack) {
        var row    = jack['row'];
        var column = jack['column'];
        var jack   = jack['jack'];

        // Calculate wire connection speaker.
        if (column == column_length -1) { var connected = connect(row, column_length -2, 'RIGHT', MAP[row][column_length -2], 20); }
        else if (column == 0)           { var connected = connect(row, 1,                'LEFT',  MAP[row][1], 20); }
        console.log(jack + ": " + connected);

        // Mute/unmute audio tracks by connections.
        var track = $('#'+jack)[0];

        //$('#'+jack).muted = true;
        if (connected) { track.muted = false; }
        else           { track.muted = true;  }
    });
    setTimeout(audio, 5000);
};

var connect = function(row, column, source, tile, count) {
    console.log(gate(tile)+","+row+","+column+","+source+","+count+","+(LEFT_TO_RIGHT.indexOf(gate(tile))!=-1));
     if (count && row >= 0 && row < MAP.length && column >= 0 && column < MAP[0].length) {
             if (UP_TO_DOWN    .indexOf(gate(tile)) != -1 && source == 'UP')    { if (row+1 < MAP.length)       { return connect(row+1, column,   'UP',    MAP[row+1][column  ], count--); } else { return false; } }
        else if (DOWN_TO_UP    .indexOf(gate(tile)) != -1 && source == 'DOWN')  { if (row-1 >= 0)               { return connect(row-1, column,   'DOWN',  MAP[row-1][column  ], count--); } else { return false; } }
        else if (UP_TO_RIGHT   .indexOf(gate(tile)) != -1 && source == 'UP')    { if (column+1 < MAP[0].length) { return connect(row,   column+1, 'LEFT',  MAP[row  ][column+1], count--); } else { return false; } }
        else if (RIGHT_TO_UP   .indexOf(gate(tile)) != -1 && source == 'RIGHT') { if (row-1 >= 0)               { return connect(row-1, column,   'DOWN',  MAP[row-1][column  ], count--); } else { return false; } }
        else if (UP_TO_LEFT    .indexOf(gate(tile)) != -1 && source == 'UP')    { if (column-1 > 0)             { return connect(row,   column-1, 'RIGHT', MAP[row  ][column-1], count--); } else { return false; } }
        else if (LEFT_TO_UP    .indexOf(gate(tile)) != -1 && source == 'LEFT')  { if (row-1 >= 0)               { return connect(row-1, column,   'DOWN',  MAP[row-1][column  ], count--); } else { return false; } }
        else if (DOWN_TO_RIGHT .indexOf(gate(tile)) != -1 && source == 'DOWN')  { if (column+1 < MAP[0].length) { return connect(row,   column+1, 'LEFT',  MAP[row  ][column+1], count--); } else { return false; } }
        else if (RIGHT_TO_DOWN .indexOf(gate(tile)) != -1 && source == 'RIGHT') { if (row+1 < MAP.length)       { return connect(row+1, column,   'UP',    MAP[row+1][column  ], count--); } else { return false; } }
        else if (DOWN_TO_LEFT  .indexOf(gate(tile)) != -1 && source == 'DOWN')  { if (column-1 > 0)             { return connect(row,   column-1, 'RIGHT', MAP[row  ][column-1], count--); } else { return false; } }
        else if (LEFT_TO_DOWN  .indexOf(gate(tile)) != -1 && source == 'LEFT')  { if (row+1 < MAP.length)       { return connect(row+1, column,   'UP',    MAP[row+1][column  ], count--); } else { return false; } }
        else if (RIGHT_TO_LEFT .indexOf(gate(tile)) != -1 && source == 'RIGHT') { if (column-1 > 0)             { return connect(row,   column-1, 'RIGHT', MAP[row  ][column-1], count--); } else { return false; } }
        else if (LEFT_TO_RIGHT .indexOf(gate(tile)) != -1 && source == 'LEFT')  { if (column+1 < MAP[0].length) { return connect(row,   column+1, 'LEFT',  MAP[row  ][column+1], count--); } else { return false; } }

        /*
        else if (SWITCHES.indexOf(gate(tile)) != -1) {
            if (gate(tile) == '1_LEFT_TO_1_RIGHT' && source == 'LEFT' && column+1 < MAP[0].length) { return connect(row,   column+1, 'LEFT',  MAP[row  ][column+1], count--); }
            else { return false; }
        }
        */

        else if (SPEAKER       .indexOf(gate(tile)) != -1)                                                      { return true; }
        else                                                                                                    { return false; }
     } else { return false; }
};

var gate   = function(tile) { return tile[0]; };
var effect = function(tile) { return tile[1]; };

var switch_tile = function() {
    console.log('switch_tile');

    // Get row, column for HTML element's id/class.
    var column = parseInt(this.className.match("\\d+")[0])  -1;
    var row = parseInt(this.parentNode.id.match("\\d+")[0]) -1;

    // 2nd tile click
    if (ACTIVE_ROW != null && ACTIVE_COLUMN != null &&
        ACTIVE_ROW != row && ACTIVE_COLUMN != column) {
        // Get all tiles.
        var old_tile     = MAP[ACTIVE_ROW][ACTIVE_COLUMN];
        var current_tile = MAP[row][column];

        // Switch tiles only if clicked tiles aren't empty (inactive tiles).
        if (gate(old_tile) != 'EMPTY' && gate(current_tile) != 'EMPTY') {
            var old_image     = 'url("'+ENUM['GATES'][gate(old_tile)]    ['IMAGE']+'")'
            var current_image = 'url("'+ENUM['GATES'][gate(current_tile)]['IMAGE']+'")'

            MAP[ACTIVE_ROW][ACTIVE_COLUMN] = current_tile;
            MAP[row][column]               = old_tile;

            // Switch image.
            $('#row_'+(row+1)+'>.column_'+(column+1))              .css('background-image', old_image);
            $('#row_'+(ACTIVE_ROW+1)+'>.column_'+(ACTIVE_COLUMN+1)).css('background-image', current_image);
        }

        // Nullify active tile.
        ACTIVE_ROW    = null;
        ACTIVE_COLUMN = null;
    }
    // 1st tile click.
    else { ACTIVE_ROW = row; ACTIVE_COLUMN = column; }
};

var draw_tiles = function() {
    $('.row').each(function(index, value) {
        var row = index;
        $('#row_'+(row+1)+'>.tile').each(function(column, value) {
            var tile  = MAP[row][column];
            console.log(gate(tile));
            var image = 'url("'+ENUM['GATES'][gate(tile)]['IMAGE']+'")'
            $('#row_'+(row+1)+'>.column_'+(column+1)).css('background-image', image);
        });
    });
};

// TODO: Import audio and set them to hidden and check they are playing! :D
var init = (function(){
    console.log('init');
    // Draw tiles.
    draw_tiles();

    // Push <audio> tags to HTML.
    $.each(AUDIO, function(jack, audio) {
        $('#audio').append('<audio id="' + jack + '" src="' + audio + '" autobuffer autoplay loop controls></audio> '+audio+'<br />');
    });

    // Switch tile type every time the player clicks it.
    $('.tile').click(switch_tile);
    return self;
}());

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

var run = (function() {
    console.log('run');
    setTimeout(audio, 200);
        // input();
        // set_tiles();
        // set_tracks();
    return self;
}());

return run;

}(window, jQuery));

