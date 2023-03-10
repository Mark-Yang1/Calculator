const data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]

const jobList = document.getElementById('jobList');

jobList.addEventListener('change', calculateBase, calculateGM);

let GA = document.getElementById('GA');

let GM = document.getElementById('GM');

let FT = document.getElementById('FT');

let ST = document.getElementById('ST');

let SS = document.getElementById('SS');

let MC = document.getElementById('MC');

let SD = document.getElementById('SD');

let RI = document.getElementById('RI');

let MI = document.getElementById('MI');

let TD = document.getElementById('TD');

for(job of data) {
    let newOption = document.createElement('option');
    newOption.value = job[1];
    newOption.innerText = `${job[0]} $${job[1].toLocaleString("en-US")}`;
    jobList.appendChild(newOption);
}

function calculateBase() {
    GA.innerText = Math.abs(jobList.value).toFixed(2);
    calculateGM();
}

function calculateGM() {
    GM.innerText = Math.abs(jobList.value/12).toFixed(2);
    calculateFT();
    calculateST();
    calculateSS();
    calculateMC();
    calculateSD();
    calculateRI();
    CalculateMI();
}

// function calculateTax() {
//     calculateFT();
//     calculateST();
//     calculateSS();
//     calculateMC();
//     calculateSD();
//     calculateRI();
// }

function calculateFT() {
    FT.innerText = Math.abs(jobList.value/12 * 0.12).toFixed(2);
}

function calculateST() {
    ST.innerText = Math.abs(jobList.value/12 * 0.07).toFixed(2);
}

function calculateSS() {
    SS.innerText = Math.abs(jobList.value/12 * 0.062).toFixed(2);
}

function calculateMC() {
    MC.innerText = Math.abs(jobList.value/12 * 0.0145).toFixed(2);
}

function calculateSD() {
    SD.innerText = Math.abs(jobList.value/12 * 0.01).toFixed(2);
}

function calculateRI() {
    RI.innerText = Math.abs(jobList.value/12 * 0.05).toFixed(2);
    calculateTD();
}

function calculateMI() {
    MI.innerText = Math.abs(180 + 0);
}

function calculateTD() {
    TD = Math.abs(FT + ST + SS + MC + RI + 180)
}