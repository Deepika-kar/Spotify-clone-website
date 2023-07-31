console.log('Welcome to Spotify');

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Players/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {SongName: "Kesariya", filePath: "Players/1.mp3", CoverPath: "Covers/1.webp"},
    {SongName: "Om Deva Deva", filePath: "Players/2.mp3", CoverPath: "Covers/2.webp"},
    {SongName: "Tera Yaar Hu Main", filePath: "Players/3.mp3", CoverPath: "Covers/3.webp"},
    {SongName: "Bacche ki Jaan", filePath: "Players/4.mp3", CoverPath: "Covers/4.webp"},
    {SongName: "Dua Karo", filePath: "Players/5.mp3", CoverPath: "Covers/5.webp"},
    {SongName: "Ghungroo", filePath: "Players/6.mp3", CoverPath: "Covers/6.webp"},
    {SongName: "Phir Kabhi", filePath: "Players/7.mp3", CoverPath: "Covers/7.webp"},
    {SongName: "Ik Vaari Aa", filePath: "Players/8.mp3", CoverPath: "Covers/8.webp"},
    {SongName: "Pyaar Hota Kai Baar Hai", filePath: "Players/9.mp3", CoverPath: "Covers/9.webp"},
    {SongName: "Mann Mast Magan", filePath: "Players/10.mp3", CoverPath: "Covers/10.webp"},
]


// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove(`fa-circle-pause`);
        masterPlay.classList.add(`fa-circle-play`);
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{

    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

//CT/D * 100 = P, CT= P*D/100

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName(' songOccurance')).forEach((element)=>{
        element.classList.remove(`fa-circle-pause`);
        element.classList.add(`fa-circle-play`);
    })
}

//for particular sungs in body

Array.from(document.getElementsByClassName('songOccurance')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove(`fa-circle-play`);
        e.target.classList.add(`fa-circle-pause`);
        audioElement.src = `Players/${songIndex}.mp3`;
        masterSongName.innerHTML = songs[songIndex-1].SongName;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
        }
        else{
            audioElement.pause();
             e.target.classList.remove(`fa-circle-pause`);
        e.target.classList.add(`fa-circle-play`);
        gif.style.opacity=0;

        masterPlay.classList.remove(`fa-circle-pause`);
        masterPlay.classList.add(`fa-circle-play`);

        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
     audioElement.src = `Players/${songIndex}.mp3`;
     masterSongName.innerHTML = songs[songIndex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove(`fa-circle-play`);
    masterPlay.classList.add(`fa-circle-pause`);

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
     audioElement.src = `Players/${songIndex}.mp3`;
     masterSongName.innerHTML = songs[songIndex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove(`fa-circle-play`);
    masterPlay.classList.add(`fa-circle-pause`);


})