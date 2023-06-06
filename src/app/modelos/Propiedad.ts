import { Ubigeo } from "./Ubigeo";
import { UnidadMedida } from "./UnidadMedida";
import { TipoPropiedad } from "./TipoPropiedad";

export class Propiedad{

    //@Column(name = "id_propiedad")
    idPropiedad: number;

    //@Column(name = "dir_propiedad")
    direccionPropiedad: string;

    //@JoinColumn(name = "id_ubigeo", nullable = false)
    idUbigeo: Ubigeo;

    //@JoinColumn(name = "id_tipo_propiedad", nullable = false)
    idTipoPropiedad: TipoPropiedad;

    //@Column(name = "cant_habitaciones")
    cantidadHabitaciones: number;

    //@Column(name = "cant_banhos")
    cantidadBanhos: number;

    //@Column(name = "area_total")
    areaTotal: number;

    //@JoinColumn(name = "id_unidad_medida", nullable = false)
    idUnidadMedida: UnidadMedida;

    //@Column(name = "precio_venta")
    precioVenta: number;

    //@Column(name = "disponible_venta")
    disponibleVenta: string;
    
    constructor(){
        this.idPropiedad = 0;
        this.direccionPropiedad = "";
        this.idUbigeo = new Ubigeo();
        this.idTipoPropiedad = new TipoPropiedad();
        this.cantidadHabitaciones = 0;
        this.cantidadBanhos = 0;
        this.areaTotal = 0;
        this.idUnidadMedida = new UnidadMedida();
        this.precioVenta = 0;
        this.disponibleVenta = "";
    }

}