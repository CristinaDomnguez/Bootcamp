import java.util.Scanner;
import java.util.Random;

public class Aleatorio {
    public static void main(String[] args) {
        Random random = new Random();
        int numeroAleatorio = random.nextInt(100) + 1;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Inserte un numero del 1 al 100: ");
        int numero;
        do {
            numero = scanner.nextInt();

            if(numero < numeroAleatorio){
            System.out.println("El numero es mayor. Intentalo de nuevo:");
            } else if (numero > numeroAleatorio){
            System.out.println("El numero es menor. Intentalo de nuevo:");
            } else {
            System.out.println("Has acertado!");
            }
        }while (numero != numeroAleatorio);

        scanner.close();
    }
}
