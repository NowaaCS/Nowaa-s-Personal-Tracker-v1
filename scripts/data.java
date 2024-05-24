
// Example 1: 
// This is constant as the number of steps and steps taken do not change
for(int j = 1; j <= 5; j++) {
    print(j + "x"); 
}
/*
 * This prints:
 * @ j = 1; output: "1x" 
 * @ j = 2; output: "2x" 
 * @ j = 3; output: "3x" 
 * @ j = 4; output: "4x" 
 * @ j = 5; output: "5x" 
 */


// Example 2: 
// This is linear O(n) as the number of steps change with the value of n 
// and the steps taken at a time are constant (1)
for(int j = 1; j <= n; j++) {
    print(j + "x"); 
}
/*
 * With n = 4
 * @ j = 1; output: "1x" 
 * @ j = 2; output: "2x" 
 * @ j = 3; output: "3x" 
 * @ j = 4; output: "4x" 
 * 
 * Even with n = 6, we still have constant steps taken at a time
 * @ j = 1; output: "1x" 
 * @ j = 2; output: "2x" 
 * @ j = 3; output: "3x" 
 * @ j = 4; output: "4x" 
 * @ j = 5; output: "5x" 
 * @ j = 6; output: "6x" 
 */
 

// Example 3: 
// This is still linear O(n) as the number of steps change and the steps 
// taken at a time are still constant (3)
for(int j = 1; j <= n; j += 3) {
    print(j + "x"); 
}

/* 
 * With n = 10:
 * @ j = 1; output: "1x" 
 * @ j = 4; output: "4x" 
 * @ j = 7; output: "7x" 
 * @ j = 10; output: "10x" 
 * 
 * n can change, but the steps taken at a time dont
*/


// Example 4: 
// This is logarithmic O(log n) as the number of steps change and the steps taken
// change with every iteration
for(int j = 1; j <= n; j * 2) {
    print(j + "x"); 
}

/*
 * Let's try the above loop with n = 4
 * The steps we take at a time change from 1 -> 2 -> 4
 * @ j = 1; output: "1x"
 * @ j = 2; output: "2x" 
 * @ j = 4; output: "4x" 
 *
 * With n = 6
 * The steps we take at a time change from 1 -> 2 -> 4 -> 6
 * @ j = 1; output: "1x" 
 * @ j = 2; output: "2x" 
 * @ j = 4; output: "4x" 
 * @ j = 8; output: "8x" 
 * @ j = 16; output: "16x" 
 * 
 */


// Example 5: 
// This is logarithmic O(log n) as the number of steps change and the steps taken
// change with every iteration
for(int j = 1; j <= n; j * 3) {
    print(j + "x"); 
}
/*
 * Let's try the above loop with n = 9
 * @ j = 1; output: "1x" 
 * @ j = 3; output: "3x" 
 * @ j = 9; output: "9x" 
 *
 */