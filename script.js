function printText() {
    const lastLetter = document.querySelectorAll('span');
    const letter = document.getElementById('carta-gerada');

    for(let index1 = 0; index1 < lastLetter.length; index1 += 1) {
        letter.removeChild(letter.lastElementChild);
    }

    const letterText = document.getElementById('carta-texto');
    const text = letterText.value;
    const testString = text.trim();

    if(testString.length === 0) {
        const spanElement = document.createElement('span');
        const spanElementClone = spanElement.cloneNode();
        let word = 'Por favor, digite o conteúdo da carta.';
        spanElementClone.innerText = word;
        letter.appendChild(spanElementClone);
    } else {    
        const splittedText = text.split(' ');
        for(let index2 = 0; index2 < splittedText.length; index2 += 1) {
            const spanElement2 = document.createElement('span');
            const spanElementClone2 = spanElement2.cloneNode();
            let word2 = splittedText[index2];
            spanElementClone2.innerText = word2;

            const classNumber1 = Math.ceil(Math.random() * 3);
            const classNumber2 = Math.ceil(Math.random() * 3);
            const classNumber3 = Math.ceil(Math.random() * 2);
            const classNumber4 = Math.ceil(Math.random() * 2);

            if(classNumber1 === 1) {
                spanElementClone2.classList.add('newspaper');
            } else if (classNumber1 === 2) {
                spanElementClone2.classList.add('magazine1');
            } else {
                spanElementClone2.classList.add('magazine2');
            }

            if(classNumber2 === 1) {
                spanElementClone2.classList.add('medium');
            } else if (classNumber2 === 2) {
                spanElementClone2.classList.add('big');
            } else {
                spanElementClone2.classList.add('reallybig');
            }

            if(classNumber3 === 1) {
                spanElementClone2.classList.add('rotateleft');
            } else {
                spanElementClone2.classList.add('rotateright');
            }

            if(classNumber4 === 1) {
                spanElementClone2.classList.add('skewleft');
            } else {
                spanElementClone2.classList.add('skewright');
            }

            function changeClasses(origin) {
                const clickedWord = origin.target;
                clickedWord.className = '';

                const classNumber1 = Math.ceil(Math.random() * 3);
                const classNumber2 = Math.ceil(Math.random() * 3);
                const classNumber3 = Math.ceil(Math.random() * 2);
                const classNumber4 = Math.ceil(Math.random() * 2);

                if(classNumber1 === 1) {
                    clickedWord.classList.add('newspaper');
                } else if (classNumber1 === 2) {
                    clickedWord.classList.add('magazine1');
                } else {
                    clickedWord.classList.add('magazine2');
                }

                if(classNumber2 === 1) {
                    clickedWord.classList.add('medium');
                } else if (classNumber2 === 2) {
                    clickedWord.classList.add('big');
                } else {
                    clickedWord.classList.add('reallybig');
                }

                if(classNumber3 === 1) {
                    clickedWord.classList.add('rotateleft');
                } else {
                    clickedWord.classList.add('rotateright');
                }

                if(classNumber4 === 1) {
                    clickedWord.classList.add('skewleft');
                } else {
                    clickedWord.classList.add('skewright');
                }
            }

            spanElementClone2.addEventListener('click', changeClasses);

            letter.appendChild(spanElementClone2);            
        }

        const wordQuantity = document.querySelectorAll('span');
        const wordCountDisplay = document.getElementById('carta-contador');
        wordCountDisplay.innerText = wordQuantity.length;
    }
}

const printTextButton = document.getElementById('criar-carta');
printTextButton.addEventListener('click', printText);