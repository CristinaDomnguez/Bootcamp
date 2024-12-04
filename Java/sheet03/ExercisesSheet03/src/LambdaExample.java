import java.util.ArrayList;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> palabras = new ArrayList<>();

        palabras.add("Bannana");
        palabras.add("Apple");
        palabras.add("Cherry");

        palabras.sort((palabras1, palabras2) -> palabras1.compareTo(palabras2));

        System.out.println("La lista ordenada es: " + palabras);
    }
}
