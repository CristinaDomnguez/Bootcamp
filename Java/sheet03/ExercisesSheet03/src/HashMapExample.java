import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> personas = new HashMap<>();

        personas.put("Cristina", 29);
        personas.put("Marina", 23);
        personas.put("Narciso", 21);

        for (HashMap.Entry<String, Integer> entrada : personas.entrySet()) {
            System.out.println(entrada.getKey() + " tiene " + entrada.getValue() + " años.");
        }
    }
}
