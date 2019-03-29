/* 

wordsCount.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
 два параметра: список слов и список стоп-слов. Задача функции вернуть объект типа Map,
  содержащий в себе частоту переданных слов. То есть, ключами являются сами слова, а значениями число повторений.

    Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра. 
    Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
    Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе.
    stopWords – это список стоп-слов, которые не должны попадать в результирующую структуру. Стоп-слова указываются в нижнем регистре.

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

Подсказки

    Воспользуйтесь тройкой map/filter/reduce.
    Функция has типа Map проверяет наличие ключа в мапе
    Проверка должна быть регистро-независимой

*/



const wordsCount = (wordsList, stopList) => {

    const newLowCaseArr = (arr) => {
        const LowCaseArr = [];
        for (let value of arr) {
            LowCaseArr.push(value.toLowerCase());
        }
        return LowCaseArr;
    };


    const filtered = newLowCaseArr(wordsList).filter(word => (!stopList.includes(word)));



    const map = filtered.reduce((acc, word) => {
        if (!acc.has(word)) {
            return acc.set(word, 1);
        }
        return acc.set(word, acc.get(word) + 1);
    }, new Map());


    return map;

};



const wordsCountTeach = (words, stopWords) => words
  .map(word => word.toLowerCase())
  .filter(word => !stopWords.includes(word))
  .reduce((acc, word) => {
    if (!acc.has(word)) {
      return acc.set(word, 1);
    }
    return acc.set(word, acc.get(word) + 1);
  }, new Map());


const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
console.log(wordsCount(words, stopWords)); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]
console.log(wordsCountTeach(words, stopWords));