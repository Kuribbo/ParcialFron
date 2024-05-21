export class Celular {
    constructor(
        public id: number,
        public marca: string,
        public serial: string,
        public fechaDeCompra: Date,
        public anoDeLanzamiento: number,
        public precio: number,
        public sistemaOperativo: string,
        public gama: string,
    ){}
}
