//task 1
const text = document.querySelector('p');
text.innerHTML=text.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style = "background-color : yellow">${word}</span>` : word)
.join(' ');

//task2
const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html'
link.innerText = 'Link to the source';
document.body.appendChild(link);

//task3
text.innerHTML =text.innerHTML
.split(/\.[^.\|<]/)
.join('</p><p>')+'</p>';

//task4
const wordCount = text.innerText. split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document. body. insertBefore(wordCountElem, text);

//task5
Array.from(document.querySelectorAll('p'))
.forEach(p => {
  p.innerHTML = p.innerHTML
  .replace(/\?/g, '🤔')
  .replace(/\!/g, '😲');
} )
