let button = document.getElementById('submit');

button.onclick = () => {
    const address = document.getElementById('input').value;
    if (address) {
        addMarkerByAddress(address);
        document.getElementById('input').value = ''; 
    }
};
