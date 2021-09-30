class Pizza {
    constructor(masa, tamano, ingredientes) {
      this.masa = masa;
      this.tamano = tamano;
      this.ingredientes = ingredientes;
    }
  
    Preparar() {
      console.log(`Preparando Pizza
    ${this.tamano},
    ${this.masa},
    Ingredientes:${this.ingredientes}`);
      return this;
    }
  
    Hornear() {
      console.log(`La Pizaa está en el horno...`);
      return this;
    }
  
    Empacar() {
      console.log(`Emapacando la Pizza...`);
      console.log(`Pizaa lista para ser enviada`);
      return this;
    }
  
  }
  const PizzaPollo =new Pizza ("masa Gruesa","Mediada","[Pollo,queso]");
  console.log(PizzaPollo.Preparar());
  console.log(PizzaPollo.Hornear());
  console.log(PizzaPollo.Empacar());
  console.log("-----------------------------");
  
  const PizzaHawaiana =new Pizza ("masa delgada","Mediada","[Queso, piña,Jamon]");
  console.log(PizzaHawaiana.Preparar());
  console.log(PizzaHawaiana.Hornear());
  console.log(PizzaHawaiana.Empacar());
  
  /*HERENCIA*/
  class Combos extends Pizza{
    constructor(combo,cantidad,bebida, postre,masa,tamano,ingredientes){
     super(masa,tamano,ingredientes);
     this.combo=combo;
     this.cantidad=cantidad;
     this.bebida=bebida;
     this.postre=postre;
    }
  
    elegirCombo(){
      this.Preparar();
      this.Hornear();
      this.Empacar();
  
      console.log(`Pedido: combo ${this.combo} - ${this.cantidad}, ${this.bebida},${this.postre},
       Pizza ${this.tamano} + ${this.masa} + ${this.ingredientes}`);
      return this;
    }
  }
  
  const Pedido = new Combos ("Personal", "5","Coca-Cola grande","Rollitos de canela ","masa delgada","Mediada","[Queso, piña,Jamon]");
  console.log("Piza combo --------------------");
  console.log(Pedido.elegirCombo());
  