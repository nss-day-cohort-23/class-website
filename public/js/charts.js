let editorsCtx = document.getElementById("editors").getContext('2d');
let editorsChart = new Chart(editorsCtx, {
    type: 'pie',
    data: {
        labels: ['VS Code', 'Atom', 'Webstorm'],
        datasets: [{
            data: [16, 1, 1],
            backgroundColor: [
                '#2A2A3D',
                '#E6E3EA',
                '#6b5f57'
            ]
        }],
    }
});
let osCtx = document.getElementById("os").getContext('2d');
let osChart = new Chart(osCtx, {
    type: 'pie',
    data: {
        labels: ['Windows', 'Linux', 'Mac'],
        datasets: [{
            data: [4, 2, 12],
            backgroundColor: [
                '#E6E3EA',
                '#2A2A3D',
                '#6b5f57'
            ]
        }],
    }
});
let animalCtx = document.getElementById("animal").getContext('2d');
let animalChart = new Chart(animalCtx, {
    type: 'pie',
    data: {
        labels: ['Cat people', 'Dog people', 'Reptile people', 'Bird people'],
        datasets: [{
            data: [2, 13, 1, 1],
            backgroundColor: [
                '#6b5f57',
                '#A68D7B',
                '#2A2A3D'
            ]
        }],
    }
});
let genderCtx = document.getElementById("gender").getContext('2d');
let genderChart = new Chart(genderCtx, {
    type: 'pie',
    data: {
        labels: ['Other', 'Male', 'Female'],
        datasets: [{
            data: [1, 11, 6],
            backgroundColor: [
                '#E6E3EA',
                '#2A2A3D',
                '#A68D7B',
            ]
        }],
    }
});