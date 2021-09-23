// Some funny things :D
const footer = document.querySelector('.ringVerse');
const logo = document.querySelector('.logo');
const github = document.querySelector('.github');

// Original speech ah be dayi keske video 240p olmayaydi uzdun :D
const blackSpeech = () => {
  window.open('https://www.youtube.com/watch?v=DCaD5JDtg0Q', '_blank');
};
footer.addEventListener('click', blackSpeech);

// funny Speech
const whiteSpeech = () => {
  footer.innerHTML =
    '🧙‍♂️ JavaScript rule them all, JavaScript find them all, JavaScript to bring them all and in the Darkness bind them.';
};
footer.addEventListener('mouseover', whiteSpeech);

// return to Original speech
const speech = () => {
  footer.innerHTML =
    '🧙‍♂️ One ring rule them all, One ring to find them, One ring to bring them all and in the Darkness bind them.';
};
footer.addEventListener('mouseout', speech);

// Trainer Github
const logoLink = () => {
  window.open('https://github.com/CaglayanYanikoglu', '_blank');
};
logo.addEventListener('click', logoLink);

// My Github
const githubLink = () => {
  window.open('https://github.com/murat-atalik', '_blank');
};
github.addEventListener('click', githubLink);
