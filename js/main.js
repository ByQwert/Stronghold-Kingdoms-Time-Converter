var worker,
		i,
		j,
		knownTime,
		fullTimeInSeconds,
		standartInSeconds,
		hours,
		minutes,
		seconds;

function count() {
	for (i = 1; i < 6; i++) {
		worker = $("[name=x" + i +"]").val();
		if (worker) {
			var VRegExp = new RegExp(/[:\,\ .]/g);
			knownTime = worker.split(VRegExp);
			knownTime = knownTime.map(function(item) {
  			return parseInt(item);
			});
			fullTimeInSeconds = knownTime[0]*60*60 + knownTime[1]*60 + knownTime[2];
			standartInSeconds = fullTimeInSeconds*i;
			for (j = 1; j < 6; j++) {
				if (i != j) {
					worker = Math.floor(standartInSeconds/j);
					minutes = Math.floor(worker/60);
					seconds = worker - minutes*60;
					hours = Math.floor(minutes/60);
					minutes = minutes - hours*60;
					hours = hours.toString();
					minutes = minutes.toString();
					seconds = seconds.toString();
					if (hours.length == 1) {
						hours = "0" + hours;
					}
					if (minutes.length == 1) {
						minutes = "0" + minutes;
					}
					if (seconds.length == 1) {
						seconds = "0" + seconds;
					}
					$("[name=x" +j+"]").val(hours+":"+minutes+":"+seconds);
					$("[name=x" +j+"]").prop("readonly",true);
				}
			}
			$("[name=x" +i+"]").prop("readonly",true);
			$("[value=Рассчитать]").prop("disabled", true);
			break;			
		}
	}
}

function guide() {
	$("#guide").toggle("slow");
}

function gui() {
	$("[type=text]").prop("readonly",false);
	$("[value=Рассчитать]").prop("disabled",false);	
}