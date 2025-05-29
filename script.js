function toggleAnswer(button) {
    // First, close all open answers
    const allHelps = document.querySelectorAll('.helps, .helps1');
    allHelps.forEach(help => {
        const answer = help.querySelector('.answer');
        const question = help.querySelector('.question');
        const btn = help.querySelector('.toggle-btn');
        
        answer.style.display = 'none';
        question.style.display = 'inline';
        btn.textContent = '▼';
    });

    // Then toggle the clicked one
    const helpsDiv = button.parentNode;
    const questionSpan = helpsDiv.querySelector('.question');
    const answerSpan = helpsDiv.querySelector('.answer');
  
    if (answerSpan.style.display === 'none' || answerSpan.style.display === '') {
        answerSpan.style.display = 'inline';
        questionSpan.style.display = 'none';
        button.textContent = '▲';
    } else {
        answerSpan.style.display = 'none';
        questionSpan.style.display = 'inline';
        button.textContent = '▼';
    }
}