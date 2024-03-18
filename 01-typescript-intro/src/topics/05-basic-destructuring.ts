
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 54,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}


const { 
    audioVolume:volume, 
    songDuration:duration, 
    song:anothersong,
    details
} : AudioPlayer = audioPlayer;

const {
    author,
    year
} = details;


console.log('Volume: ', volume)
console.log('Duration: ', duration)
console.log('Song: ', anothersong)
console.log('Author: ', author)
console.log('Year: ', year)

console.log('============================')

const [p1, p2, trunks ]: string[] = ['Goku', 'Vegeta', 'Trunk'];


console.log('Personaje :',trunks)


export {};