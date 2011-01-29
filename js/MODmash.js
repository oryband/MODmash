var MODmash = (function (window, $) {

var MAP = [
    [['EMPTY'],['EMPTY'],['EMPTY'],['RED_JACK'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['RED_JACK'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_DOWN'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_DOWN'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_DOWN'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_DOWN'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_DOWN'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['SPEAKER_TOP_LEFT'],['SPEAKER_TOP_MID'],['SPEAKER_TOP_RIGHT'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_DOWN'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['RED_UP_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['RED_LEFT_TO_RIGHT'],['SPEAKER_MID_LEFT'],['SPEAKER_MID_MID'],['SPEAKER_MID_RIGHT'],['RED_RIGHT_TO_LEFT'],['RED_RIGHT_TO_LEFT'],['RED_RIGHT_TO_LEFT'],['RED_RIGHT_TO_LEFT'],['RED_UP_TO_LEFT'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['SPEAKER_BOT_LEFT'],['SPEAKER_BOT_MID'],['SPEAKER_BOT_RIGHT'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']],
    [['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY'],['EMPTY']]
];

var AUDIO = [
    'audio/a-001.wav',
    'audio/a-002.wav',
    'audio/a-003.wav',
    'audio/a-004.wav'
];

var ENUM = {
    'GATES' : {
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
    },
    'EFFECTS' : [
        'SLOW',
        'ACCELERATE'
    ],
};

var ACTIVE_ROW    = null;
var ACTIVE_COLUMN = null;

var audio = function() {
    console.log('audio');
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
    $.each(AUDIO, function(index, value) { $('#audio').append('<audio src="' + value + '" autobuffer loop controls></audio> '+value+'<br />'); });

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

