window.addEventListener('DOMComponentsLoaded', function() {
	console.log('booom');
	// TODO keyboard press -> player note on
	// TODO player!
	var keyboard = document.querySelector('audio-keyboard');

	keyboard.addEventListener('noteon', function(e) {
		console.log('keyboard, note on', e);
	}, false);

	var humacchinaGUI = document.querySelector('humacchina-gui');
	humacchinaGUI.setCell(0, 0, 'A#3');
	humacchinaGUI.setCell(1, 1, 'C#45');

	var colIndex = 0;
	setInterval(function() {
		humacchinaGUI.setActiveColumn(++colIndex % humacchinaGUI.columns);
	}, 1000);

	var rowIndex = 1;
	setInterval(function() {
		humacchinaGUI.setActiveRow(++rowIndex % humacchinaGUI.rows);
	}, 1500);


}, false);

