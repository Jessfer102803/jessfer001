const firstPage = document.getElementById('first');
const secondPage = document.getElementById('second');
const firstNextBtn = document.getElementById('first__nextbtn');
const pokemons = document.querySelectorAll('.second__pokemon');
const modal = document.getElementById('modal');

// Function to add and remove 'animate.css' classes
function addAnimation(element, animationName) {
  element.classList.add('animate__animated', animationName);
  // Remove the animation classes after the animation ends
  element.addEventListener('animationend', () => {
    element.classList.remove('animate__animated', animationName);
  });
}

// Go to choose pokemon with animation
firstNextBtn.addEventListener('click', () => {
  firstPage.style.display = 'none';
  secondPage.style.display = 'block';
  // Add 'fadeIn' animation to the second page
  addAnimation(secondPage, 'animate__fadeIn');
});

// Modal animations
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    // Add 'fadeOut' animation to the modal
    addAnimation(modal, 'animate__fadeOut');
  }
});

document.getElementById('close-modal').addEventListener('click', () => {
  modal.classList.remove('active');
  // Add 'fadeOut' animation to the modal
  addAnimation(modal, 'animate__fadeOut');
});

for (const pokemon of pokemons) {
  pokemon.querySelector('.second__pokemon__seemore').addEventListener('click', () => {
    const img = pokemon.querySelector('.pokemon__img').getAttribute('src')
    const name = pokemon.querySelector('.pokemon__name').innerHTML
    const types = Array.from(pokemon.querySelectorAll('.type')).map(v => v.outerHTML).join().replace(/,/, '')
    const otherInfo = {
      evolution: pokemon.getAttribute('evolution').replace(/, /g, ' ~> '),
      generation: pokemon.getAttribute('generation'),
      species: pokemon.getAttribute('species'),
      gender: pokemon.getAttribute('gender'),
      weight: pokemon.getAttribute('weight'),
      height: pokemon.getAttribute('height')
    }

    modal.querySelector('.pokemon__img').setAttribute('src', img)
    modal.querySelector('.pokemon__generation').innerHTML = otherInfo.generation
    modal.querySelector('.pokemon__name').innerHTML = name
    modal.querySelector('.pokemon__types').innerHTML = types
    modal.querySelector('.pokemon__info').innerHTML = `
      <h1><span style="font-weight: 800;">Evolution</span>: ${otherInfo.evolution}</h1>
      <h1><span style="font-weight: 800;">Species</span>: ${otherInfo.species}</h1>
      <h1><span style="font-weight: 800;">Gender</span>: ${otherInfo.gender}</h1>
      <h1><span style="font-weight: 800;">Weight</span>: ${otherInfo.weight}</h1>
      <h1><span style="font-weight: 800;">Height ${otherInfo.height}</h1>`

    modal.classList.add('active');
    // Add 'zoomIn' animation to the modal
    addAnimation(modal, 'animate__zoomIn');
  });

  const animations = [
    'animate__bounce',
    'animate__flip',
    'animate__tada',
    'animate__heartBeat',
    'animate__fadeInRight',
    'animate__rotateInDownLeft',
    'animate__swing',
    'animate__jackInTheBox'
  ];
  
  // Function to add random animation to an element
  function addRandomAnimation(element) {
    // Check if the element is already being animated
    if (!element.classList.contains('animating')) {
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
      
      // Add 'animating' class to prevent concurrent animations
      element.classList.add('animating');
      
      element.classList.add('animate__animated', randomAnimation);
  
      // Remove the animation classes after the animation ends
      element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', randomAnimation, 'animating');
      });
    }
  }
  
  // Example: Add animation to the "Next" button when clicked
  const firstNextBtn = document.getElementById('first__nextbtn');
  firstNextBtn.addEventListener('click', () => {
    // Add a random animation to the "Next" button
    addRandomAnimation(firstNextBtn);
  });
  
  // Example: Add animation to each Pokémon when clicked
  for (const pokemon of pokemons) {
    pokemon.querySelector('.second__pokemon__seemore').addEventListener('click', () => {
      // Add a random animation to the clicked Pokémon
      addRandomAnimation(pokemon);
    });
  }
  
  // Example: Add animation to the modal when it's displayed
  document.getElementById('open-modal-button').addEventListener('click', () => {
    modal.classList.add('active');
    // Add a random animation to the modal
    addRandomAnimation(modal);
  });
  
  
}