class DatosPersonas {
    String nombre;
    int edad;

    DatosPersonas(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    void mostraDetalles(){
        System.out.println("El nombre es: " + nombre);
        System.out.println("Su edad es: " + edad);
    }
}

public class Persona {
    public static void main(String[] args){
        DatosPersonas datospersonas = new DatosPersonas("Cristina", 29);
        datospersonas.mostraDetalles();
    }
}
