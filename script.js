async function exibirAlunos(){

  const objs = await fetch('./bd.json')
  bd = await objs.json();
  console.log(bd)

  let resultado = document.getElementById("resultado")

  bd.alunos.forEach(element => {

      //console.log(element)
      const media = (element.avaliacaoParcial+element.avaliacaoRegimental+element.exercicio)/3
      const interger = parseInt(media)

      console.log(interger)
    
      if(interger >= 6){
        var status = "Aprovado"
      } else if (interger >=2 && interger < 6){
        var status = "Avaliação Final"
      } else {
        var status = "Reprovado"
      }
    

        resultado.innerHTML += `
        <div class="container">
        <img src="${element.img}" class="content" alt="">
        <p> <b> Nome: </b> ${element.nome} </p>
        <p> <b> RGM: </b> ${element.rgm} </p>
        <p> <b> Av. Parcial: </b> ${element.avaliacaoParcial} </p>
        <p> <b> Exercícios: </b> ${element.exercicio} </p>
        <p> <b> Av. Regimental: </b> ${element.avaliacaoRegimental} </p>
        <p> <b> Média: </b> ${interger} </p>
        <p> <b> Status: </b> ${status} </p>
        </div>
        `
    });
    
}