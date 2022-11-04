// 1

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

console.log(user.studentstatus);

// 2

const arr = [5, 10, 15, 20, 25, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

let x = 0;
while (x < arr.length) {
    console.log(arr[x]);
    x++;
};

// 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
};

// 4 
let user1 = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (user1.age < 18 && user1.studentstatus === "active") {
    console.log("hello");
} else if (user1.name === "levan") {
    console.log("hello levan");
} else if (user1.studentstatus === "active" && user1.age < 25) {
    console.log("hello world");
} else {
    console.log("error");
}

// 5

let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] > 0) {
            console.log(array[i][x]);
        }
    }
};

// 6 
let array1 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]

//ლუწი რიცხვები
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        console.log(array1[i]);
    }
};

//კენტი რიცხვები
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 1) {
        console.log(array1[i]);
    }
};


// 7

function sumOfPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum;
};

console.log(sumOfPositives([2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]));
console.log(sumOfPositives([-60, 34, 54, 2, 3, -50, 0]));

// 8 
let user2 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
};

function statusOfStudent(user) {
    return `${user.firstname} ${user.lastname} is logged ${user.isloggedin ? "in" : "out"}`;
}

console.log(statusOfStudent(user2));

// 9

function maxNumber(arr) {
    console.log(Math.max(...arr));
};

maxNumber([2, 3, 89, -7, -700, 879]);


// 10

let array2 = [1, 2, 4, 10, 34, 5, 7, 87]

for (let i = 0; i < array2.length; i++) {
    if (array2[i] > 0 && array2[i] < 10) {
        console.log(array2[i]);
    }
};

// 11

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 5) {
        break;
    } else {
        console.log(numbers2[i]);
    };
}
