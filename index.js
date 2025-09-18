const songsByGenre = {
    filmi: [
      {
        title: "Rowdy Baby",
        artist: "Dhanush & Dhee",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      },
      {
        title: "Vaathi Coming",
        artist: "Anirudh",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      }
    ],
    folk: [
      {
        title: "Madura Veeran",
        artist: "Folk Artists",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
      }
    ],
    classical: [
      {
        title: "Carnatic Violin Solo",
        artist: "Lalgudi Jayaraman",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      }
    ],
    devotional: [
      {
        title: "Om Namah Shivaya",
        artist: "Devotional Group",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      }
    ],
    indie: [
      {
        title: "Enjoy Enjaami",
        artist: "Dhee & Arivu",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
      }
    ],
    pop: [
      {
        title: "Kutty Story",
        artist: "Vijay & Anirudh",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
      }
    ]
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    const genreNav = document.getElementById('genre-nav');
    const songList = document.getElementById('song-list');
  
    function showGenre(genre) {
      songList.innerHTML = '';
      const list = songsByGenre[genre];
      if (!list) {
        songList.textContent = "No songs available for this genre.";
        return;
      }
  
      list.forEach(song => {
        const div = document.createElement('div');
        div.className = 'song-item';
  
        const title = document.createElement('div');
        title.className = 'song-title';
        title.textContent = song.title;
  
        const artist = document.createElement('div');
        artist.className = 'song-artist';
        artist.textContent = "Artist: " + song.artist;
  
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = song.url;
  
        div.appendChild(title);
        div.appendChild(artist);
        div.appendChild(audio);
  
        songList.appendChild(div);
      });
    }
  
    genreNav.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        genreNav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const genre = btn.getAttribute('data-genre');
        showGenre(genre);
      });
    });
  
    // Load default
    const defaultGenre = 'filmi';
    const defaultBtn = genreNav.querySelector(`button[data-genre="${defaultGenre}"]`);
    if (defaultBtn) {
      defaultBtn.classList.add('active');
      showGenre(defaultGenre);
    }
  });
  