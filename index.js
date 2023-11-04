class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if (this.tipo == "Mago"){
            let ataque = "usou magia"; 
            console.log(`O ${this.tipo} de nome ${this.nome} usou ${ataque} `)
        } else if (this.tipo == "Guerreiro"){
            let ataque = "usou espada"; 
            console.log(`O ${this.tipo} de nome ${this.nome} usou ${ataque} `)
        } else if (this.tipo == "Monge"){
            let ataque = "usou artes marciais";
            console.log(`O ${this.tipo} de nome ${this.nome} usou ${ataque} `)
        } else if (this.tipo == "Ninja"){
            let ataque = "usou shuriken"; 
            console.log(`O ${this.tipo} de nome ${this.nome} usou ${ataque} `)
        }
    };
};
let shinobi = new personagem("shinobi" ,32, "Ninja");
shinobi.atacar();

let Magnus = new personagem("Magnus" ,282, "Mago");
Magnus.atacar();