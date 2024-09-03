// 1. Create a class named Video. The class should be constructed with the following parameters:
    // title (a string)
    // uploader (a string, the person who uploaded it)
    // time (a number, the duration of the video - in seconds)

class Video {
    constructor(title, uploader, time) {
        this.title = title;               
        this.uploader = uploader;           
        this.time = time;       
    }
// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
};
// 3. Instantiate a new Video instance and call the watch() method.
const film1 = new Video('Titanic', 'John Doe', 10800);
film1.watch();

// 4. Instantiate a second Video instance with different values.
const film2 = new Video('Casino Royale', 'Jane Roe', 7267)
film2.watch();

// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
let filmArray = [
    {
        title: 'Django Unchained',
        uploader: 'Jimmy Blue',
        time: 12345
    },
    {
        title: 'Pulp Fiction',
        uploader: 'Johny Green',
        time: 67821
    },
    {
        title: 'Reservoir Dogs',
        uploader: 'Gemma White',
        time: 67123
    },
    {
        title: 'Jackie Brown',
        uploader: 'Gina Gray',
        time: 782309
    },
    {
        title: 'Hateful Eight',
        uploader: 'Richard Black',
        time: 321908
    }
];

// 6. Bonus: Loop through the array to instantiate those instances.
const instanceArray = filmArray.map(item => {
    return new Video(item.title, item.uploader, item.time);
});

// testing instances
instanceArray.forEach(item => {
    item.watch()
});