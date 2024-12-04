import java.util.regex.*;

public class RegExExample {
    public static void main(String[] args){
        String regex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

        Pattern pattern = Pattern.compile(regex);

        String[] correos = {"correo@hotmal.com", "correomal.com"};

        for (String correo : correos){
            Matcher matcher = pattern.matcher(correo);

            if (matcher.matches()){
                System.out.println(correo + " es un correo valido.");
            } else {
                System.out.println(correo + " NO es un correo valido.");
            }
        }
    }
}
