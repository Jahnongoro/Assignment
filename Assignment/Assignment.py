// ...existing code...
import 'dart:core';

int? stringToInt(String s) {
    try {
        return int.parse(s);
    } catch (_) {
        print('stringToInt: cannot parse "$s"');
        return null;
    }
}

double? stringToDouble(String s) {
    try {
        return double.parse(s);
    } catch (_) {
        print('stringToDouble: cannot parse "$s"');
        return null;
    }
}

String intToString(int n) => n.toString();
double intToDouble(int n) => n.toDouble();

void convertAndDisplay(String number) {
    final i = stringToInt(number);
    final d = stringToDouble(number);
    print('convertAndDisplay: input="$number" -> int: $i, double: $d');
}

void main() {
    // 1. Define Variables
    int myInt = 42;
    double myDouble = 3.14;
    String myString = 'Hello, Dart';
    bool myBool = true;
    List<int> myList = [1, 2, 3, 4, 5];

    print('int: $myInt');
    print('double: $myDouble');
    print('String: $myString');
    print('bool: $myBool');
    print('List<int>: $myList');

    // 2. Type Conversion
    print('\n-- Type Conversion Examples --');
    print('String -> int: "123" -> ${stringToInt("123")}');
    print('String -> double: "12.34" -> ${stringToDouble("12.34")}');
    print('int -> String: 7 -> "${intToString(7)}"');
    print('int -> double: 7 -> ${intToDouble(7)}');

    // 3. Conversion Function
    print('\n-- convertAndDisplay Examples --');
    convertAndDisplay("256");
    convertAndDisplay("3.5"); // int parse will fail, double parses
    convertAndDisplay("abc"); // both will fail (nulls printed)

    // 4. Control Flow
    print('\n-- If-Else: positive/negative/zero --');
    void checkNumber(int n) {
        if (n > 0) {
            print('$n is positive');
        } else if (n < 0) {
            print('$n is negative');
        } else {
            print('$n is zero');
        }
    }
    checkNumber(10);
    checkNumber(-5);
    checkNumber(0);

    print('\n-- Voting eligibility (18+) --');
    void checkVotingAge(int age) {
        if (age >= 18) {
            print('Age $age: eligible to vote');
        } else {
            print('Age $age: not eligible to vote');
        }
    }
    checkVotingAge(17);
    checkVotingAge(18);

    print('\n-- Switch Case: day of week (1-7) --');
    void printDay(int d) {
        switch (d) {
            case 1:
                print('1 -> Monday');
                break;
            case 2:
                print('2 -> Tuesday');
                break;
            case 3:
                print('3 -> Wednesday');
                break;
            case 4:
                print('4 -> Thursday');
                break;
            case 5:
                print('5 -> Friday');
                break;
            case 6:
                print('6 -> Saturday');
                break;
            case 7:
                print('7 -> Sunday');
                break;
            default:
                print('$d -> invalid day');
        }
    }
    printDay(1);
    printDay(5);
    printDay(8);

    print('\n-- Loops --');
    print('for loop 1 to 10:');
    for (var i = 1; i <= 10; i++) print(i);

    print('while loop 10 to 1:');
    var w = 10;
    while (w >= 1) {
        print(w);
        w--;
    }

    print('do-while loop 1 to 5:');
    var dw = 1;
    do {
        print(dw);
        dw++;
    } while (dw <= 5);

    // 5. Combine Data & Control Flow
    print('\n-- Iterate List<int>, even/odd, categorize with switch --');
    List<int> numbers = [1, 2, 7, 15, 50, 120];

    for (var n in numbers) {
        // even or odd
        final parity = (n % 2 == 0) ? 'even' : 'odd';
        // categorize by computing a category key and switching on it
        final category = (n >= 1 && n <= 10) ? 1 : (n <= 100) ? 2 : 3;
        String size;
        switch (category) {
            case 1:
                size = 'small (1-10)';
                break;
            case 2:
                size = 'medium (11-100)';
                break;
            case 3:
            default:
                size = 'large (101+)';
        }
        print('Number: $n -> $parity, $size');
    }
}