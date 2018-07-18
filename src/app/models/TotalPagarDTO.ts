export class TotalPagarDTO {
    constructor(
        public placa: string, 
        public horasTranscurridas: number,
        public totalPagar: number
    ){}
}