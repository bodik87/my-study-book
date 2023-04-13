import React from "react";

type Props = {};

export default function Types_Interfaces_Generic({}: Props) {
  return <div>Types</div>;
}
// Інтерфейси і типи

type Type_1 = { name: string };
type Type_2 = (prop: string) => string;
type Type_3 = string;

interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark: () => void;
}

const dog: Dog = {
  name: "Пес",
  bark: () => console.log("Гав-гав!"),
};

// Якщо на момент створення типу ми не знаємо яке значення буде мати якийсь ключ - можна використати Generic (наприклад в досьє додаткова інформація може бути різною)

type Dossier<AdditionalInformation> = {
  name: string;
  age: number;
  additionalInformation?: AdditionalInformation;
};

type JobInformation = {
  title: string;
  salary: number;
};

type UnivercityInformation = {
  university: string;
  course: number;
};

const bogdan: Dossier<JobInformation> = {
  name: "Богдан",
  age: 35,
  additionalInformation: {
    title: "ФОП",
    salary: 30000,
  },
};

const tanya: Dossier<UnivercityInformation> = {
  name: "Богдан",
  age: 35,
  additionalInformation: {
    university: "НЮАУ",
    course: 5,
  },
};

const david: Dossier<null> = {
  name: "Богдан",
  age: 35,
};

// ENUM
enum AnimalTypes {
  CAT = "cat",
  DOG = "dog",
}

type TAnimal = {
  name: string;
  age: number;
  type: AnimalTypes;
};

const cat: TAnimal = {
  name: "Кіт",
  age: 2,
  type: AnimalTypes.CAT,
};

enum CarsTypes {
  TRUCK = "truck",
}

type Car = {
  type: CarsTypes;
};

const car: Car = {
  type: CarsTypes.TRUCK,
};

// Дженерік
type TypeGen<T> = T;
// ...который потом указываем:
type MyType = TypeGen<string>;

// Generics in Interfaces
interface ValueContainer<T> {
  value: T;
}
type StringContainer = ValueContainer<string>;
const x: StringContainer = { value: "Bo" };

// Generics в функціях

// Наприклад нам потрібно повернути тип об'єкта. І у кішки і у машини різні типи. Можна було б зробити типу:
// type GetTypeProperty = { type: CarsTypes | AnimalTypes }
// проте якщо передети інший об'єкт - у нього буде свій тип. Можна, але це неправильно указати { type: any }.
type GetTypeProperty<T> = { type: T };

function getType<T>(value: GetTypeProperty<T>) {
  return value.type;
}

// Чтобы общая функция TypeScript работала в файлах .tsx , вы можете добавить запятую после последнего универсального параметра.
// Вот пример:
// const output = <T,>(value: T): void => {
//     console.log(value);
// };

// Или вы можете добавить общее ограничение, например:
// const output = <T extends unknown>(value: T): void => {
//     console.log(value);
// };

// Оба решения работают, но первое понятнее.
const getTypeArrowFn = <T,>(value: GetTypeProperty<T>) => {
  return value.type;
};

getType(cat);
getTypeArrowFn(car);
