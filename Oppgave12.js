var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        sider: 300
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: false,
        sider: 600
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        sider: 800
    }];
 

for (const i of library) {
    
    if (i.readingStatus == true) {
        console.log(i.title);
    }
}

for (const i of library) {
    if (i.sider > 500) {
        console.log(i.sider);
    }
}