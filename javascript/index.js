window.addEventListener('DOMContentLoaded', (event) => {
  const windowWidth = window.innerWidth

  // MENU
  const menuCTA = document.querySelector('#menu-cta');
  const menu = document.querySelector('#menu');
  menuCTA.addEventListener('click', () => {
    menu.classList.toggle('active');
  })

  // SPRINKLES
  const numSprinkles = [...Array(Math.ceil(windowWidth/30)).keys()]
  const newSprinkles = []
  numSprinkles.forEach((id) => {
    const sprinkle = document.createElement("div");
    sprinkle.id = `sprinkle-${id}`;
    sprinkle.className = 'sprinkle absolute shadow-4';

    // size
    let sizeMultiplier = 1
    let baseWidth = 13;
    let baseHeight = 64;
    let randomNum = Math.random();
    if (randomNum < .33) {
      sprinkle.style.zIndex = '-1';
      sprinkle.style.borderRadius = '5px';
      sizeMultiplier = .7;
    } else if (randomNum >= .33 && randomNum < .85) {
      sprinkle.style.zIndex = '-1';
      sprinkle.style.borderRadius = '5px';
    } else {
      sprinkle.style.zIndex = '1';
      sprinkle.style.borderRadius = '7px';
      sizeMultiplier = 1.3;
    }
    sprinkle.style.width = `${baseWidth * sizeMultiplier}px`;
    sprinkle.style.height = `${baseHeight * sizeMultiplier}px`;

    // color
    const bgColor = [
      'bg--primary-pink', 
      'bg--primary-purple', 
      'bg--beige', 
      'bg--dark-pink', 
      'bg--light-purple'
    ][Math.floor(Math.random() * 5)];
    sprinkle.classList.add(bgColor);

    // position
    const top = Math.random() * 750;
    const left = Math.random() * windowWidth;
    sprinkle.style.top = `${top}px`;
    sprinkle.style.left = `${left}px`;

    // rotation
    const deg = Math.random() * 360;
    sprinkle.style.transform = `rotate(${deg}deg)`;

    newSprinkles.push(sprinkle);
  })
  
  const sprinkleJar = document.querySelector('#sprinkles')
  newSprinkles.forEach((sprinkle) => {
    sprinkleJar.appendChild(sprinkle);
  })

  const step = () => {
    newSprinkles.forEach((sprinkle) => {
      let spaceMoved = sprinkle.style.zIndex === '1' ? 3.5 : 2.5;
      let top = parseFloat(sprinkle.style.top.split('px')[0]);
      if (top + spaceMoved > 750) {
        sprinkle.style.top = '-50px';
      } else {
        sprinkle.style.top = `${top + spaceMoved}px`;
      }
    });

    window.requestAnimationFrame(step)
  }
  
  window.requestAnimationFrame(step);
});