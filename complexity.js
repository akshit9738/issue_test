function complexFunction(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            result += input[i];
        } else {
            result -= input[i];
        }
        if (input[i] % 3 === 0) {
            result *= 2;
        } else if (input[i] % 5 === 0) {
            result /= 2;
        } else if (input[i] % 7 === 0) {
            result += 10;
        } else if (input[i] % 11 === 0) {
            result -= 10;
        } else if (input[i] % 13 === 0) {
            result *= 3;
        } else if (input[i] % 17 === 0) {
            result /= 3;
        } else if (input[i] % 19 === 0) {
            result += 20;
        } else if (input[i] % 23 === 0) {
            result -= 20;
        } else if (input[i] % 29 === 0) {
            result *= 4;
        } else if (input[i] % 31 === 0) {
            result /= 4;
        } else if (input[i] % 37 === 0) {
            result += 30;
        } else if (input[i] % 41 === 0) {
            result -= 30;
        } else if (input[i] % 43 === 0) {
            result *= 5;
        } else if (input[i] % 47 === 0) {
            result /= 5;
        } else if (input[i] % 53 === 0) {
            result += 40;
        } else if (input[i] % 59 === 0) {
            result -= 40;
        } else if (input[i] % 61 === 0) {
            result *= 6;
        } else if (input[i] % 67 === 0) {
            result /= 6;
        } else if (input[i] % 71 === 0) {
            result += 50;
        } else if (input[i] % 73 === 0) {
            result -= 50;
        } else if (input[i] % 79 === 0) {
            result *= 7;
        } else if (input[i] % 83 === 0) {
            result /= 7;
        } else if (input[i] % 89 === 0) {
            result += 60;
        } else if (input[i] % 97 === 0) {
            result -= 60;
        } else {
            result += input[i] * 2;
        }
    }
    return result;
}
