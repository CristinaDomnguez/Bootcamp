import java.util.Scanner;

public class OperacionesAritmeticas {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese el primer número entero:"); int numero1 = scanner.nextInt();
        System.out.println("Ingrese el segundo número entero:"); int numero2 = scanner.nextInt();

        int suma = numero1 + numero2;
        int resta = numero1 - numero2;
        int multiplicacion = numero1 * numero2;
        double division = (double) numero1 / numero2;

        System.out.println("La suma de los números es: " + suma);
        System.out.println("La resta de los números es: " + resta);
        System.out.println("La multiplicación de los números es: " + multiplicacion);
        System.out.println("La división de los números es: " + division);

        scanner.close();
    }
}
