public class Arrays {
    public static void main(String[] args) {
        int[] numeros = new int[5];
        {
            numeros[0] = 1;
            numeros[1] = 2;
            numeros[2] = 3;
            numeros[3] = 4;
            numeros[4] = 5;

        for (int i = 0; i < numeros.length; i++){
            System.out.println("El elemento en el índice " + i + " es: " + numeros[i]);
        }
//            System.out.println(numeros[0]);
//            System.out.println(numeros[1]);
//            System.out.println(numeros[2]);
//            System.out.println(numeros[3]);
//            System.out.println(numeros[4]);
        }
    }
}
