// scripts.js
function nextSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function calculateEnergy() {
    const energyRange = document.getElementById('energyRange');
    const energyValue = document.getElementById('energyValue');
    const energyResult = document.getElementById('energyResult');
    
    energyValue.textContent = energyRange.value;
    energyResult.textContent = (energyRange.value * 0.18).toFixed(2);
}

function completeProcess() {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById('success').classList.remove('hidden');
}