public class Main {
    public static void main(String[] args) {
        Imprimible[] imprimibles = {
            new Estudiante("Ana", 20, "Ingenieria"),
            new Empleado("Jose Luis", 32, 40000)
        };

        for (Imprimible imprimible : imprimibles) {
            imprimible.imprimir();
            System.out.println("----------------------");
        }
    }
}
