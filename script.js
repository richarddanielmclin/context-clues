var friendName = ['AP', 'Rick', 'Derrick', 'Josh', 'Xavier'];

var locationName = ['living room', 'dining room', 'kitchen', 'bedroom', 'bathroom',
    'backyard', 'garage', 'attic', 'basement', 'study'];

var weaponName = ['hammer', 'gun', 'boots', 'nail file', 'fisticuffs',
    'blank stare', 'kindness', 'rope', 'DDT', 'sledgehammer',
    'knife', 'water gun', 'karate chop', 'flamethrower', 'katana',
    'shiv', 'capoeira', 'crossbow', 'broken bottle', 'nunchuks'];

for (var i = 1; i <= 100; i++) {
    var headers = document.createElement('h3')
    headers.textContent = 'Accusation ' + i
    document.body.appendChild(headers);
    headers.addEventListener('click', returnAlert(i))

    function returnAlert(i) {
        function showAlert() {
            alert("Accusation " + [i++] + ': I accuse ' + friendName[i % friendName.length] + ', with the ' + weaponName[i % weaponName.length] + ' in the ' + locationName[i % locationName.length] + '!')
        }
        return showAlert;
    }
}
