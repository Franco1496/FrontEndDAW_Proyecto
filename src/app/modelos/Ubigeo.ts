export class Ubigeo{
    id_ubigeo: number;
    
    ubigeo: string;
    cod_departamento: string;
    departamento: string;
    cod_provincia: string;
    provincia: string;
    cod_distrito: string;
    
    distrito: string;
    
    fec_creacion: string;
    flag_estado: string;
    

    constructor(){
        this.id_ubigeo=0;
        
        this.ubigeo="";
        this.cod_departamento="";
        this.departamento="";
        this.cod_provincia="";
        this.provincia="";
        this.cod_distrito="";
        
        this.distrito="";
        
        this.fec_creacion="";
        this.flag_estado="";
        
    }
}