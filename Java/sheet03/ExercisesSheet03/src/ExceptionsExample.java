public class ExceptionsExample {
    public static void main(String[] args){
        divide(10, 2);
        divide(10, 0);
    }

    public static void divide(int a, int b){
        try{
            int resultado = a / b;
            System.out.println("Resultado: " + resultado);
        }catch (ArithmeticException e){
            System.out.println("Error: Division por 0");
        }
    }
}
