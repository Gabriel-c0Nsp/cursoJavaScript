/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa01 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa02 = criaPessoa('Melissa', 'Christine', 19);
const pessoa03 = criaPessoa('Gabriel', 'Silva', 19);
const pessoa04 = criaPessoa('João', 'Moreira', 23);
const pessoa05 = criaPessoa('Maira', 'Oliveira', 83);*/

const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 19,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();