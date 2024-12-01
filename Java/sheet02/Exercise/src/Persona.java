class DatosPersonas {
    private String nombre;
    private int edad;

    DatosPersonas(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    void mostrarDetalles() {
        System.out.println("El nombre es: " + nombre);
        System.out.println("Su edad es: " + edad);
    }
}

public class Persona {
    public static void main(String[] args) {
        DatosPersonas datospersonas = new DatosPersonas("Cristina", 29);
        datospersonas.mostrarDetalles();

        datospersonas.setNombre("Narciso");
        datospersonas.setEdad(21);

        System.out.println("Despues de la modificacion:");
        System.out.println("El nombre es: " + datospersonas.getNombre());
        System.out.println("Su edad es: " + datospersonas.getEdad());
    }
}
