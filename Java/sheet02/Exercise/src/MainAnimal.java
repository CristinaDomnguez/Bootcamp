public class MainAnimal {
    public static void main(String[] args){
        Animal[] animales = {
                new Perro(),
                new Gato()
        };
        for (Animal animal : animales){
            animal.hacerSonido();
            System.out.println("----------------------");
        }
    }
}
