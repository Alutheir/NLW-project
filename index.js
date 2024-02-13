const perguntas = [
    {
      Pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      Resposta: [
        "var myVar = 5;",
        "myVar = 5;",
        "variable myVar = 5;",
      ],
      Correta: 0
    },
    {
      Pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
      Resposta: [
        "+",
        "-",
        "*",
      ],
      Correta: 0
    },
    {
      Pergunta: "Qual é o resultado da expressão '5 + 3 + '8' em JavaScript?",
      Resposta: [
        "16",
        "583",
        "538",
      ],
      Correta: 1
    },
    {
      Pergunta: "Qual é a forma correta de iniciar um comentário de linha única em JavaScript?",
      Resposta: [
        "//",
        "/*",
        "#",
      ],
      Correta: 0
    },
    {
      Pergunta: "Qual é o nome do método usado para converter uma string em um número inteiro em JavaScript?",
      Resposta: [
        "toFloat()",
        "stringToInt()",
        "parseInt()",
      ],
      Correta: 2
    },
    {
      Pergunta: "Qual é a função do operador '===' em JavaScript?",
      Resposta: [
        "Atribuição de valores",
        "Comparação de valores",
        "Comparação de valores e tipos",
      ],
      Correta: 2
    },
    {
      Pergunta: "Qual é o método usado para encontrar o número máximo em um array em JavaScript?",
      Resposta: [
        "Math.max()",
        "max()",
        "maximum()",
      ],
      Correta: 0
    },
    {
      Pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      Resposta: [        
        "Remove o último elemento do array",
        "Adiciona um elemento ao final do array",
        "Adiciona um elemento ao início do array",
      ],
      Correta: 1
    },
    {
      Pergunta: "Qual é o resultado da expressão 'true && false' em JavaScript?",
      Resposta: [
        "true",
        "false",
        "Não é uma expressão válida",
      ],
      Correta: 1
    },
    {
      Pergunta: "Qual é a função do método 'pop()' em JavaScript?",
      Resposta: [
        "Remove o último elemento de um array e retorna esse elemento",
        "Adiciona um elemento ao final do array",
        "Remove o primeiro elemento de um array e retorna esse elemento",
      ],
      Correta: 0
    }
];
//parte de dar a referencia ao doc principal(ais)
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template') 

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 


//Loop ou repetição
for(const item of perguntas)
  {//clonar o conteudo principal
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.Pergunta
//clonar a seção inteira para não ter que escrever 1 a 1
for(let Resposta of item.Resposta){//clonar e referenciar uma seção de dados
  const dt =quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = Resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.Resposta.indexOf(Resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.Correta
    
    corretas.delete(item)
    if(estaCorreta){
      corretas.add(item)

    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }




//caminho para criar um filho da seção  
  quizItem.querySelector('dl').appendChild(dt)
}
quizItem.querySelector('dl dt').remove()

//coloca a pergunta na tela
quiz.appendChild(quizItem)
  }
