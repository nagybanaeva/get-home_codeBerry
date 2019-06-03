console.log('A számológép használatra kész.');

// Amiket ki kell számolnom:
// fuelToOffload:
    // Az az üzemanyagmennyiség, amit leeresztve a súlylimit alá kerülünk, de még haza tudunk jutni.
	// fuelToOffload = tankCapacity - requiredFuel
// tankCapacity: Az űrsikló üzemanyagtartályának űrtartalma.
// requiredFuel: Minimális üzemanyag-mennyiség, amivel visszajutunk a Földre.
    // requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)

function calculateFuelToOffload(totalDistanceToTravel, averageLitersOverHundred, tankCapacity) {
    // 1. lépés: Számolja ki a szükséges üzemanyag-mennyiséget.
	var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
	console.log('Szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L');

    // 2. lépés: Számolja ki a lecsapolandó üzemanyagot.
	var fuelToOffload = tankCapacity - requiredFuel;
	console.log('Leeresztendő üzemanyag: ' + fuelToOffload + ' L');
}