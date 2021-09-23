/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */

// animalList i animals.js dosyasindan cagirdik
import { animalList } from './animals';
// ana container@a ulasildi
const container = document.querySelector('.container');

// for dongusu kullanilarak objeler gezildi ve container elemanlari olusturldu
for (let index = 0; index < animalList.length; index += 1) {
  const animal = animalList[index];
  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';
  const gridInner = document.createElement('div');
  gridInner.className = 'grid-inner';
  const gridImageDiv = document.createElement('div');
  gridImageDiv.className = 'grid-image';
  const gridImage = document.createElement('img');
  gridImage.className = 'grid-img';
  gridImage.src = animal.image;
  const gridBody = document.createElement('div');
  gridBody.className = 'grid-body';
  gridBody.innerHTML = `<h2>${animal.name}</h2><p>Age:${animal.age}</p><p>Number Of Legs:${animal.numberOfLegs}</p>`;
  gridImageDiv.appendChild(gridImage);
  gridInner.appendChild(gridImageDiv);
  gridInner.appendChild(gridBody);
  gridContainer.appendChild(gridInner);
  container.appendChild(gridContainer);
}
/* // tum grid-imag larini larini seciyoruz
const cards = document.querySelectorAll('.grid-image');
// tum grid-body larini seciyoruz
const gridBodies = document.querySelectorAll('.grid-body');

// cardin uzerine gelince card'a ait ek bilgilerin displayini block yapiyor
// bordebottom kisminin radiusunu 0 liyor boylelikle iki farkli card gibi gorunmuyor
for (let index = 0; index < cards.length; index += 1) {
  const card = cards[index];
  const gridBody = gridBodies[index];

  const toggleInfo = () => {
    gridBody.style.display === 'block'
      ? ((gridBody.style.display = 'none'), (card.style.borderRadius = '1rem'))
      : ((gridBody.style.display = 'block'),
        (card.style.borderRadius = '1rem 1rem 0 0'));
  };
  // cardlarin information kismini toggle maka icin eventlistenerlari kullandim over ve out
  card.addEventListener('mouseover', toggleInfo);
  card.addEventListener('mouseout', toggleInfo);
}
 */
