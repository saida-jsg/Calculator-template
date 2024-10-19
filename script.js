document.getElementById('submit').addEventListener('click', function() {
    let basePrice = 100;

    let education = parseFloat(document.getElementById('education').value);
    let netWorth = parseFloat(document.getElementById('networth').value);
    let caste = parseFloat(document.getElementById('caste').value);

    let skills = 0;
    if (document.getElementById('musician').checked) skills += parseFloat(document.getElementById('musician').value);
    if (document.getElementById('cook').checked) skills += parseFloat(document.getElementById('cook').value);
    if (document.getElementById('easygoing').checked) skills += parseFloat(document.getElementById('easygoing').value);
    if (document.getElementById('singer').checked) skills += parseFloat(document.getElementById('singer').value);

    let age = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputation = 1;
    if (document.getElementById('parentsAttitude').checked) reputation *= parseFloat(document.getElementById('parentsAttitude').value);
    if (document.getElementById('characterGossip').checked) reputation *= parseFloat(document.getElementById('characterGossip').value);
    if (document.getElementById('generalGossip').checked) basePrice += parseFloat(document.getElementById('generalGossip').value);

    let finalPrice = basePrice * education * netWorth * age * reputation + caste + skills;

    document.getElementById('finalPrice').innerText = `$${finalPrice.toFixed(2)}`;
});
