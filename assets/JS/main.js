// lodash

const content = document.querySelector('.container');

const particle = document.createElement('div');
particle.classList.add('particle');
content.appendChild(particle);

const updateParticlePosition = _.debounce((event) => {
  const offsetX = window.scrollX; 
  const offsetY = window.scrollY; 

  particle.style.left = event.clientX + offsetX + 1 + 'px'; 
  particle.style.top = event.clientY + offsetY + 1 + 'px'; 
}, 10);

document.addEventListener('mousemove', updateParticlePosition);