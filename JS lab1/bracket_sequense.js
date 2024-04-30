
function isCorrectBracketSequence() {
    let sequence = prompt("Введите строку из скобок", "(())()()");
    const stack = [];
    for (const bracket of sequence) {
        if (bracket === '(') {
            stack.push(bracket);
        } else if (bracket === ')') {
            if (stack.length === 0) {
                alert('Неправильная');
                return;
        }
        stack.pop();
        }
    }
    alert(stack.length === 0 ? 'Правильная' : 'Неправильная');
    return;
  }
