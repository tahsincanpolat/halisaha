const players = [
    {
      name: 'Burak',
      position: 'STP',
      image: 'img/burak.png',
      speed: 70,
      shooting: 73,
      passing: 83,
      dribbling: 70,
      defense: 90,
      physical: 87
    },
    {
      name: 'Tahsin',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 76,
      shooting: 84,
      passing: 90,
      dribbling: 73,
      defense: 91,
      physical: 85
    },
    {
      name: 'Berkay S.',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 82,
      shooting: 79,
      passing: 84,
      dribbling: 82,
      defense: 92,
      physical: 88
    },
    {
      name: 'Baran K.',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 71,
      shooting: 77,
      passing: 82,
      dribbling: 78,
      defense: 82,
      physical: 80
    },
    {
      name: 'Ömer İlyas',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 82,
      shooting: 72,
      passing: 70,
      dribbling: 77,
      defense: 82,
      physical: 77
    },
    {
      name: 'Halil',
      position: 'CM',
      image: 'img/placeholder.png',
      speed: 74,
      shooting: 79,
      passing: 88,
      dribbling: 80,
      defense: 87,
      physical: 87
    },
    {
      name: 'Baki',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 82,
      shooting: 75,
      passing: 79,
      dribbling: 80,
      defense: 87,
      physical: 86
    },
    {
      name: 'İbrahim',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 82,
      shooting: 70,
      passing: 72,
      dribbling: 77,
      defense: 82,
      physical: 77
    },
    {
      name: 'Berkay G.',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 83,
      shooting: 80,
      passing: 84,
      dribbling: 79,
      defense: 83,
      physical: 80
    },
    {
      name: 'Berkay A.',
      position: 'CM',
      image: 'img/placeholder.png',
      speed: 85,
      shooting: 75,
      passing: 74,
      dribbling: 87,
      defense: 79,
      physical: 88
    },
    {
      name: 'Salih',
      position: 'CM',
      image: 'img/placeholder.png',
      speed: 88,
      shooting: 92,
      passing: 94,
      dribbling: 85,
      defense: 90,
      physical: 88
    },
    {
      name: 'Onur',
      position: 'CM',
      image: 'img/placeholder.png',
      speed: 90,
      shooting: 92,
      passing: 94,
      dribbling: 90,
      defense: 90,
      physical: 84
    },
    {
      name: 'Yavuz',
      position: 'CM',
      image: 'img/placeholder.png',
      speed: 83,
      shooting: 85,
      passing: 85,
      dribbling: 80,
      defense: 85,
      physical: 90
    },
    {
      name: 'Serhan',
      position: 'ST',  
      image: 'img/serhan.png',
      speed: 72,
      shooting: 88,
      passing: 84,
      dribbling: 73,
      defense: 70,
      physical: 86
    },
    {
      name: 'Kerem',
      position: 'ST',  
      image: 'img/kerem.png',
      speed: 89,
      shooting: 93,
      passing: 87,
      dribbling: 95,
      defense: 70,
      physical: 83
    },
    {
      name: 'Ahmet',
      position: 'ST',  
      image: 'img/placeholder.png',
      speed: 99,
      shooting: 90,
      passing: 82,
      dribbling: 96,
      defense: 70,
      physical: 82
    },
    {
      name: 'Yusuf B.',
      position: 'ST',  
      image: 'img/placeholder.png',
      speed: 80,
      shooting: 83,
      passing: 82,
      dribbling: 79,
      defense: 74,
      physical: 82
    },
    {
      name: 'Ömer Faruk',
      position: 'ST',  
      image: 'img/placeholder.png',
      speed: 84,
      shooting: 88,
      passing: 88,
      dribbling: 85,
      defense: 78,
      physical: 83
    },
    {
      name: 'Arda',
      position: 'ST',  
      image: 'img/placeholder.png',
      speed: 84,
      shooting: 88,
      passing: 82,
      dribbling: 85,
      defense: 74,
      physical: 82
    },
    {
      name: 'Rıdvan',
      position: 'ST',  
      image: 'img/placeholder.png',
      speed: 79,
      shooting: 86,
      passing: 85,
      dribbling: 76,
      defense: 77,
      physical: 90
    },
    {
      name: 'Muharrem',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 79,
      shooting: 73,
      passing: 75,
      dribbling: 78,
      defense: 85,
      physical: 85
    },
    {
      name: 'Erkan',
      position: 'STP',
      image: 'img/placeholder.png',
      speed: 77,
      shooting: 70,
      passing: 72,
      dribbling: 73,
      defense: 89,
      physical: 88
    },
    {
      name: 'Muharrem ',
      position: 'GK',
      image: 'img/placeholder.png',    
      speed: 90,
      shooting: 90,
      passing: 90,
      dribbling: 90,
      defense: 90,
      physical: 90
    },
    {
      name: 'Erkan ',
      position: 'GK',
      image: 'img/placeholder.png',    
      speed: 90,
      shooting: 90,
      passing: 90,
      dribbling: 90,
      defense: 90,
      physical: 90
    },
    {
      name: 'Hüseyin',
      position: 'GK',
      image: 'img/placeholder.png',    
      speed: 90,
      shooting: 90,
      passing: 90,
      dribbling: 90,
      defense: 90,
      physical: 90
    }
  ]

const playerSelect = document.getElementById('playerSelect');
const createCardButton = document.getElementById('createCardButton');
const cardContainer = document.getElementById('cardContainer');

players.forEach(player => {
    const option = document.createElement('option');
    option.value = player.name;
    option.textContent = player.name;
    playerSelect.appendChild(option);
});

createCardButton.addEventListener('click', () => {
    const selectedPlayerName = playerSelect.value;
    const selectedPlayer = players.find(player => player.name === selectedPlayerName);

    if (selectedPlayer) {
        let card = document.querySelector('.player-card');

        if (!card) {
            card = document.createElement('div');
            card.classList.add('player-card');
            cardContainer.appendChild(card);
        }

        card.innerHTML = ''; 

        const image = document.createElement('img');
        image.src = selectedPlayer.image; 
        image.alt = selectedPlayer.name;
        image.classList.add('player-image');

        const playerName = document.createElement('h1');
        playerName.textContent = selectedPlayer.name;
        playerName.classList.add('name');

        const playerInfo = document.createElement('div');
        playerInfo.innerHTML = `
            <div class='position'> ${selectedPlayer.position}</div>
            <div class='country'><img src='img/turkey.png'></div>
            <div class='pace'>${selectedPlayer.speed}</div>
            <div class='shoot'>${selectedPlayer.shooting}</div>
            <div class='pas'>${selectedPlayer.passing}</div>
            <div class='dripling'>${selectedPlayer.dribbling}</div>
            <div class='defance'>${selectedPlayer.defense}</div>
            <div class='physics'>${selectedPlayer.physical}</div>
        `;

        const average = (
            selectedPlayer.speed +
            selectedPlayer.shooting +
            selectedPlayer.passing +
            selectedPlayer.dribbling +
            selectedPlayer.defense +
            selectedPlayer.physical
        ) / 6;

        const averageInfo = document.createElement('div');
        averageInfo.classList.add('average');
        averageInfo.innerHTML = `${average.toFixed(0)}`;

        card.appendChild(image);
        card.appendChild(playerName);
        card.appendChild(playerInfo);
        card.appendChild(averageInfo); 
    } else {
        alert('Lütfen bir oyuncu seçin.');
    }
});
