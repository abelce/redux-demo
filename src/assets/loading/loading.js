let cLeft= document.getElementById('cLeft'),
    cCenter = document.getElementById('cCenter'),
    cRight = document.getElementById('cRight');
let currentAnimationTime = 0;
const centreY = 75;
const amplitude = 20;
animate();    
function animate() {
  cLeft.setAttribute('cy', centreY + (amplitude * Math.sin(currentAnimationTime)));
  cCenter.setAttribute('cy', centreY + (amplitude * (Math.sin(currentAnimationTime - 1))));
  cRight.setAttribute('cy', centreY + (amplitude * (Math.sin(currentAnimationTime - 2))));
  currentAnimationTime += 0.15;
  requestAnimationFrame(animate);
}