import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import dt_prestamos from "./data.js";

const ofici = new Cl_oficina();

dt_prestamos.forEach((pres) => 
ofici.agregarPrestamo(
    new Cl_prestamo(pres.cliente,pres.codigo,pres.prestamo,pres.meses)
)    
);
alert(`Monto Final Disponibles:${JSON.stringify(ofici.MontoFinal())}`
);
alert(`Clientes que pidieron por 2 meses:${JSON.stringify(ofici.DosMeses())}`
);
alert(`Clientes que pidieron el Prestamo minimo:${JSON.stringify(ofici.PrestMin())}`
);
