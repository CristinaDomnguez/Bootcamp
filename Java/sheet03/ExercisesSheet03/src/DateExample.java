import java.text.SimpleDateFormat;
import java.util.Date;

public class DateExample {
    public static void main(String[] args) {

        Date fechaActual = new Date();

        SimpleDateFormat formato1 = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat formato2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat formato3 = new SimpleDateFormat("EEE, MMM dd yyyy");

        System.out.println("Formato 1: " + formato1.format(fechaActual));
        System.out.println("Formato 2: " + formato2.format(fechaActual));
        System.out.println("Formato 3: " + formato3.format(fechaActual));

    }
}
