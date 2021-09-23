// animalList i animals.js dosyasindan cagirdik
import animalList from './animals';
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
