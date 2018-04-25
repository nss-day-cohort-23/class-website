let editorsCtx = document.getElementById("editors").getContext('2d');
let editorsChart = new Chart(editorsCtx, {
    type: 'pie',
    data: {
        labels: ['VS Code', 'Atom', 'Webstorm'],
        datasets: [{
            data: [22, 1, 1],
            backgroundColor: [
                '#2A2A3D',
                '#E6E3EA',
                '#6b5f57'
            ]
        }],
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});
let osCtx = document.getElementById("os").getContext('2d');
let osChart = new Chart(osCtx, {
    type: 'pie',
    data: {
        labels: ['Windows', 'Linux', 'Mac'],
        datasets: [{
            data: [4, 2, 18],
            backgroundColor: [
                '#E6E3EA',
                '#2A2A3D',
                '#6b5f57'
            ]
        }],
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});
let animalCtx = document.getElementById("animal").getContext('2d');
let animalChart = new Chart(animalCtx, {
    type: 'pie',
    data: {
        labels: ['Cats', 'Dogs', 'Reptiles', 'Birds', 'All of them'],
        datasets: [{
            data: [3, 17, 1, 1, 2],
            backgroundColor: [
                '#6b5f57',
                '#A68D7B',
                '#E6E3EA',
                '#2A2A3D',
                '#cec9ad'
            ]
        }],
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});
let genderCtx = document.getElementById("gender").getContext('2d');
let genderChart = new Chart(genderCtx, {
    type: 'pie',
    data: {
        labels: ['Other', 'Male', 'Female'],
        datasets: [{
            data: [1, 17, 6],
            backgroundColor: [
                '#E6E3EA',
                '#2A2A3D',
                '#A68D7B',
            ]
        }],
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});