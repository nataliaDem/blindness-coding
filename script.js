const pins = [
    {
        size: "small",
        left: "300px",
        top: "50px"
    },
    {
        size: "medium",
        left: "350px",
        top: "50px"
    },
    {
        size: "big",
        left: "250px",
        top: "150px"
    },
    {
        size: "medium",
        left: "100px",
        top: "50px"
    },
    {
        size: "medium",
        left: "150px",
        top: "150px"
    },
    {
        size: "small",
        left: "100px",
        top: "100px"
    },
    {
        size: "small",
        left: "250px",
        top: "50px"
    },
    {
        size: "small",
        left: "350px",
        top: "100px"
    }
];

function showPins() {
    pins.forEach(pinData => {
        const pin = document.createElement('div');
        pin.classList.add('pin', pinData.size);
        pin.style.left = pinData.left;
        pin.style.top = pinData.top;

        document.getElementById('map').appendChild(pin);
    });
}

function showMyPin() {
    const pin = document.getElementById('myPin');
    const map = document.getElementById('map');

    pin.style.display = 'block';
    pin.style.left = '-30px';
    pin.style.top = "0px";

    setTimeout(() => {
        pin.style.left = '300px';
        pin.style.top = '70px';
    }, 100);
}

window.addEventListener('message', function(event) {
    if (event.data === 'clickButton') {
        showMyPin()
    }
});

window.addEventListener('DOMContentLoaded', showPins);