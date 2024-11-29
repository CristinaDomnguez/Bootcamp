import java.util.Scanner;

public class Palindromo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Introduce una cadena: ");
        String texto = sc.nextLine();

        String textoNormalizado = texto.replace(" ", "").toLowerCase();

        String textoInvertido = new StringBuilder(textoNormalizado).reverse().toString();

        if (textoNormalizado.equals(textoInvertido)) {
            System.out.println("La cadena es un palíndromo.");
        } else {
            System.out.println("La cadena NO es un palíndromo.");
        }
    }
}
