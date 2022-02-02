'use strict';

// TASK 0

// Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65).
// Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа. 
// Ожидаемый вывод:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false


const   personAge = +prompt ( 'Please, enter the person age:' ),
        ageLimitAble = "This person are able to work",
        ageLimitUnable = "This person aren't able to work";

        isWorkingAgePerson ( personAge ?? true ) 
        
            ? alert ( ageLimitAble )

            : alert ( ageLimitUnable );

// ---

        function isWorkingAgePerson ( age ) {

            const   lowerAgeLimit = 16,
                    upperAgeLimit = 65,
                    
                    ageResult = (( isNaN ( age ) || age <= 0 ))
                
                                ? alert ("Incorrect data") 
            
                                : (( age >= lowerAgeLimit ) && ( age <= upperAgeLimit ))
                    
                                    ?  true 
                
                                    : false;

                    return ageResult;

                    };

// ---


// TASK 1

// Функция, которая запрашивает число и проверяет, простое ли оно (простое число делиться без остатка на себя и на единицу).

const isPrimeNumber = +prompt ( 'Please, enter the prime number checking:' );

    if (primeNumberCalc ( isPrimeNumber ) ){

        alert (isPrimeNumber + ' is a prime')

    } else {

        alert (isPrimeNumber + ' is not a prime') 
    
    };


    function primeNumberCalc ( userNumber ){

        if ( userNumber < 4 ) return true;

        if ( userNumber % 2 === 0 || userNumber % 3 === 0 ) return false;

        for ( let i = 4, max = Math.sqrt ( userNumber ) ; i <= max; i ++ )

            if ( userNumber % i === 0 ) return false;

        return true;

    };

// ********************************************************************

// TASK 2

// Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

const   userDividend = +prompt ( 'Please, enter the dividend:' ),
        userDivider  = +prompt ( 'Please, enter the divider:' );
      
        alert ( 'The quotient is: ' + checkMultiplicity ( userDividend , userDivider ) );

// ---

        function    checkMultiplicity ( dividend , divider ) {
                    
                    ( isNaN ( dividend ) || isNaN ( divider ) ) 

                        ?   alert ( 'Some of your elements are not a numbers' )

                        :   ( dividend < divider ) 

                            ? alert ( 'Impossible, the divident is smaller than divider' )
            
                            : ( dividend % divider === 0 ) 
                
                                ? dividend = ( dividend / divider ) // конечно можно было передать true но передать чиисло будет лучше

                                : dividend = false;

        return dividend;
    
        };
        
// ---

// TASK 3        
//  Проверка возможности треугольника.
//  Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.

const   sideA = +prompt ( 'Please, enter the side A:' ),
        sideB = +prompt ( 'Please, enter the side B:' ),
        sideC = +prompt ( 'Please, enter the side C:' ),
        triPoss = 'Triangle is possible',
        triUnPoss = 'Triangle is unpossible';

        checkTriangleOpportunity ( sideA, sideB, sideC )
        
                    ? alert ( triPoss )
            
                    : alert ( triUnPoss );

// ---

/**
 *  Function check the opportunity of triangle creation
 *  @param {number} a the triangle side lenght. Can't be 0 or degree
 *  @param {number} b the triangle side lenght. Can't be 0 or degree
 *  @param {number} c the triangle side lenght. Can't be 0 or degree
 *  @returns {boolean} The boolean possibility of triangle creation
 */
        function checkTriangleOpportunity ( a, b, c ){

            if (( a === 0 ) || ( b === 0 ) || ( c === 0 )) {
                
                return false;

            } else if ( ( a + b ) >= c ) {

                        if ( ( b + c ) >= a ) {

                        }   if ( ( c + a ) >= b ){

                                return true;

                            }   else {
                                
                                    return false;
                            
                                };

                        } else {
                        
                            return false;
                    
                    };

        };

// ---

// TASK 4
// Написать функции расчета площадей (или поверхности) следующих фигур/тел:
//  - треугольника,
//  - прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур.
//  Функция должна возвращать вычисленное значение.

const   figureTypeChoosing = +prompt(`Enter the geometric figure type: \n1 - Triangle \n2 - Rectangle \n3 - Cuboid \n4 - Cone`);

        switch (figureTypeChoosing) {

            case 1:

                alert ('The triangle area is: ' + figureTypeTiangle () ); 
                break;

            case 2:
            
                alert ('The rectangle area is: ' + figureTypeRectangle () ); 
                break;

            case 3:
        
                alert ('The cuboid full surface area is: ' + figureTypeCuboid () ); 
                break;
                
            case 4:
    
                alert ('The cone full surface area is: ' + figureTypeCone() ); 
                break;                    

            default:

                alert(`Sorry, you type the wrong data`);

        }

        function figureTypeTiangle (){

            const   triangleSideA = +prompt ( 'Please, enter the side A:' ),
                    triangleSideB = +prompt ( 'Please, enter the side B:' ),
                    triangleSideC = +prompt ( 'Please, enter the side C:' );
                    
                    if ((triangleSideA === 0 ) || ( triangleSideB === 0 ) || ( triangleSideC === 0 )) {

                        alert ( 'You type the wrong data' )

                    } else {

                        return ( triangleSideA * triangleSideB * triangleSideC );

                    }

        }

        function figureTypeRectangle (){

            const   rectangleSideA = +prompt ( 'Please, enter the side A:' ),
                    rectangleSideB = +prompt ( 'Please, enter the side B:' );
                    
                    if ((rectangleSideA === 0 ) || ( rectangleSideB === 0 )) {

                        alert ( 'You type the wrong data' )

                    } else {

                        return ( rectangleSideA * rectangleSideB );

                    }

        }

        function figureTypeCuboid (){

            const   cuboidSideA = +prompt ( 'Please, enter the side A:' ),
                    cuboidSideB = +prompt ( 'Please, enter the side B:' ),
                    cuboidSideC = +prompt ( 'Please, enter the side C:' );
                    
                    if ((cuboidSideA === 0 ) || ( cuboidSideB === 0 ) || ( cuboidSideC === 0 )) {

                        alert ( 'You type the wrong data' )

                    } else {

                        return 2 * ( ( cuboidSideA * cuboidSideB ) + ( cuboidSideB * cuboidSideC ) + ( cuboidSideC * cuboidSideA ) );

                    }

        }  
        
        function figureTypeCone (){

            const   coneRadius = +prompt ( 'Please, enter the cone radius:' ),
                    coneSide = +prompt ( 'Please, enter the cone side lenght:' );
                    
                    if ((coneRadius === 0 ) || ( coneSide === 0 )) {

                        alert ( 'You type the wrong data' )

                    } else {

                        return Math.round (Math.PI * coneRadius * ( coneSide + coneRadius ));

                    }

        }

     


