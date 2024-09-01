#include <iostream>
#include <vector>
#include <string>

class Person
{
public:
    std::string name;
    int age;

    Person(std::string n, int a) : name(n), age(a) {}

    void display() const
    {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }
};

void greet(const Person &p)
{
    std::cout << "Hello, " << p.name << "!" << std::endl;
}

int main()
{
    std::vector<Person> people;
    people.push_back(Person("Alice", 30));
    people.push_back(Person("Bob", 25));
    people.push_back(Person("Charlie", 35));

    for (const auto &person : people)
    {
        greet(person);
        person.display();
    }

    int sum_ages = 0;
    for (const auto &person : people)
    {
        sum_ages += person.age;
    }

    double average_age = static_cast<double>(sum_ages) / people.size();
    std::cout << "Average age: " << average_age << std::endl;

    return 0;
}