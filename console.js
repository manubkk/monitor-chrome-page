var lastValue = null;
var dataReactid = '<PUT_DOM_ID_HERE>';
function monitor() {
	var value = document.getElementById(dataReactid).innerHTML;
	console.log(value);
	if (value != lastValue)
	{
		var notification = new Notification(value);
		notification.onclick = function () {
			window.focus();
		};
		lastValue = value;
	}
	setTimeout(monitor, 1000);
}
Notification.requestPermission();
monitor();
