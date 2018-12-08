var LEFT_MOUSE_BUTTON = 1;

var calListening = function () {
    var $timeslots = $('.timeslot'); // idk the div name for this, insert it here
    $timeslots.on('mousedown', { cal: this }, onMouseDown);
}

Calendar.prototype.calListening = calListening; //Calendar is placeholder name for object

function onMouseDown(e) {
    if (e.which === LEFT_MOUSE_BUTTON) {
        var $this = $(this); // triggering node
        if ($this.hasClass('free')) { //current name for class
            $this.removeClass('free');
        } else {
            $this.addClass('free');
        }
    }
}