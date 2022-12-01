export class Pagamento{

    constructor(
        public id:number,
        public mese:number,
        public dataPagamento:Date,
        public numeroOre:number,
        public importo:number,
        public metodo:string,
        public nota:string
    ){};
    
}