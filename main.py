class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

def greet(person):
    print(f"Hello, {person.name}!")

def main():
    people = [
        Person("Alice", 30),
        Person("Bob", 25),
        Person("Charlie", 35)
    ]

    for person in people:
        greet(person)
        person.display()

    sum_ages = sum(person.age for person in people)
    average_age = sum_ages / len(people)
    print(f"Average age: {average_age}")

if __name__ == "__main__":
    main()