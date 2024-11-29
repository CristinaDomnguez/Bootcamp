import java.util.Scanner;

public class Saludo {
    public static void main(String[] args) {
    Scanner mensaje = new Scanner(System.in);
        System.out.println("Escribe tu nombre aqui: ");
        String nombre = mensaje.nextLine();

        System.out.println("Hola " + nombre + "!:)");
        
    mensaje.close();
    }
}
