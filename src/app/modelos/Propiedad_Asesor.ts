import { Asesor } from "./Asesor";
import { Propiedad } from "./Propiedad";


export class Propiedad_Asesor{

   

        id_propiedad_asesor : number;
        id_propiedad : Propiedad;
        id_asesor : Asesor;
        fec_creacion : string;
        flag_estado : string;

        constructor(){

            this.id_propiedad_asesor = 0;
            this.id_propiedad = new Propiedad();
            this.id_asesor =  new Asesor();
            this.fec_creacion = "";
            this.flag_estado = "";


        }
    


}