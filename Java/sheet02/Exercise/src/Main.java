public class Main {
    public static void main(String[] args) {
        Persona[] personas = {
            new Estudiante("Ana", 20, "Ingenieria"),
            new Empleado("Jose Luis", 32, 40000)
        };

        for (Persona persona : personas) {
            persona.mostrarDetalles();
            System.out.println("----------------------");
        }
    }
}
