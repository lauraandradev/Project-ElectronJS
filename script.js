
document.addEventListener('DOMContentLoaded', function() {
    const myList = document.getElementById('myList');

    const items = [
        'Item 1',
        'Item 2',
        'Item 3'
    ];

    items.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        myList.appendChild(li);
    });
});