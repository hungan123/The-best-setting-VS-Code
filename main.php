<?php
class Person {
    private $name;
    private $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function display() {
        echo "Name: " . $this->name . ", Age: " . $this->age . "<br>";
    }
}

function greet($person) {
    echo "Hello, " . $person->getName() . "!<br>";
}

$people = [
    new Person("Alice", 30),
    new Person("Bob", 25),
    new Person("Charlie", 35)
];

foreach ($people as $person) {
    greet($person);
    $person->display();
}

$sumAges = 0;
foreach ($people as $person) {
    $sumAges += $person->getAge();
}

$averageAge = $sumAges / count($people);
echo "Average age: " . $averageAge;
?>