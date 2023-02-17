// Створити сторінку, що показує нумерований список пісень:
const playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];

const songList = document.createElement('ol');

playList.forEach( item => {
    if (!item.hasOwnProperty('author') || !item.hasOwnProperty('song')) {
        return;
    }

    const listItem = document.createElement('li');
    const {author, song} = item;
    listItem.textContent = `${author}: ${song}`;
    songList.append(listItem);
} );

document.body.append(songList);

/* Create list of 20 elements inside js file (even : background blue , color: white, align on right side / 
odd background pink , color: black, align on left side, first element and last element align center heading 2) */
const listItemsNumber = 20;
const coloredListArray = [ ...Array(listItemsNumber).keys() ].map( i => `List item №${++i}` );
const coloredList = document.createElement('ul');

coloredListArray.forEach( (item, index) => {
    if (typeof item !== 'string') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = item;

    if (index % 2 === 0) {
        listItem.style = 'background-color: blue; color: white; text-align: right';
    } else {
        listItem.setAttribute('style', 'background-color: pink; color: black; text-align: left');
    }

    if (index === 0 || index === coloredListArray.length - 1) {
        listItem.style.textAlign = 'center';
        const itemText = listItem.textContent;
        listItem.innerHTML = `<h2>${itemText}</h2>`;
    }

    coloredList.append(listItem);
} );

document.body.append(coloredList);