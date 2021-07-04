// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'banana', 'maça'];
// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'granola', 'açaí'];
const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};
console.log(fruitSalad(specialFruit, additionalItens));
console.log([...specialFruit, ...additionalItens]);

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [mensagem, imprimir] = saudacoes;
console.log(imprimir(mensagem));

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[animal, bebida, comida] = [comida, animal, bebida];
console.log(comida, animal, bebida); // arroz gato água
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
const { nationality = 'teste' } = person;
console.log(nationality);

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));