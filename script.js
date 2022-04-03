let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '35'
    },
    {
        name: 'Mero',
        age: '31'
    },
    {
        name: 'aero',
        age: '29'
    },
    {
        name: 'atero',
        age: '20'
    },
    {
        name: 'tero',
        age: '25'
    }    
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + 'years old' + '</div>' ;
    
});

info.innerHTML = details.join('\n');
