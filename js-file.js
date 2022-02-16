const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.innerText = "Hey I'm red!";
para.style.color = 'red';
document.body.appendChild(para);

const blueHeader = document.createElement('h3');
blueHeader.innerText = "I'm a blue h3!";
blueHeader.style.color = 'blue';
document.body.appendChild(blueHeader);

const secondContainer = document.createElement('div');
secondContainer.setAttribute('style', ': ')