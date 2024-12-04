public class ThreadsExample implements Runnable {

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println("El hilo fue interrumpido");
            }
        }
    }

    public static void main(String[] args){
        ThreadsExample tarea = new ThreadsExample();

        Thread hilo = new Thread(tarea);

        hilo.start();
    }
}
