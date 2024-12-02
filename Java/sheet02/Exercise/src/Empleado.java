public class Empleado extends Persona{
    private int salario;

    public Empleado(String nombre, int edad, int salario) {
        super(nombre, edad);
        this.salario = salario;
    }

    public int getSalario() {
        return salario;
    }
    public void setSalario(int salario) {
        this.salario = salario;
    }

    @Override
    public void mostrarDetalles() {
        super.mostrarDetalles();
        System.out.println("El salario es: " + salario);
    }
}
