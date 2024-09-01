import java.util.ArrayList;
import java.util.List;

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void greet(Person p) {
        System.out.println("Hello, " + p.getName() + "!");
    }

    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));

        for (Person person : people) {
            greet(person);
            person.display();
        }

        int sumAges = 0;
        for (Person person : people) {
            sumAges += person.getAge();
        }

        double averageAge = (double) sumAges / people.size();
        System.out.println("Average age: " + averageAge);
    }
}