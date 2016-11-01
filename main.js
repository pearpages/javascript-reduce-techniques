// reducer().example1();
// reducer().example2();
// fromArrayToObject().example();
// commonPatterns().map();
// commonPatterns().reducingToAsmallerArray();
// commonPatterns().composing();
// commonPatterns().forBigArrays();
// reducerArguments().mean();
// advancedReduce().flatten();
advancedReduce().reduceRight();

function reducer() {

    return {
        example1,
        example2
    }

    function example1() {
        var data = [];

        var reducer = function (acumulator, item) {
            return acumulator + item;
        }

        var initialValue = 10;

        var totalValue = data.reduce(reducer, initialValue);

        console.log(totalValue);
    }

    function example2() {
        var data = [12,24,56];

        var reducer = function (acumulator, item) {
            return acumulator + item;
        }

        var initialValue = 0;

        var totalValue = data.reduce(reducer, initialValue);

        console.log(totalValue);
    }
}

function fromArrayToObject() {
    return {
        example
    }

    function example() {

        let votes = [
            "angular",
            "angular",
            "react",
            "react",
            "react",
            "angular",
            "ember",
            "react",
            "vanilla"
        ];

        let initialValue = {};

        let reducer = function (tally, vote) {
            if(!tally[vote]){
                tally[vote] = 1
            } else {
                tally[vote] += 1;
            }

            return tally;
        }

        let result = votes.reduce(reducer,initialValue);

        console.log(result);
    }
}

function commonPatterns() {

    return {
        map,
        reducingToAsmallerArray,
        composing,
        forBigArrays
    }

    function map() {

        var data = [1,2,3];
        var double = data.reduce( (acc, value) => { acc.push(value * 2); return acc;}, []);

        var doubleMapped = data.map((item) => item * 2);

        console.log(double,doubleMapped);
    }

    function reducingToAsmallerArray() {

        var data2 = [1,2,3,4,5,6];
        var evens = data2.reduce( (acc, value) => {
            if(value % 2 === 0) {
                acc.push(value);
            }
            return acc;
        }, []);

        var evenFiltered = data2.filter( (item) => item % 2 === 0);

        console.log(evens,evenFiltered);
    }

    function composing() {

        var data = [1,2,3,4,5,6];

        var result = data.filter( (item) => item % 2 === 0)
        .map( (item) => item * 2);

        console.log(result);
    }

    function forBigArrays() {

        var bigData = [];
        for ( var i = 0; i < 1000000; i++) {
            bigData[i] = i;
        }

        console.time('bigData');

        let result1 = bigData.filter( (item) => item % 2 === 0)
        .map( (item) => item * 2);

        console.timeEnd('bigData');

        console.time('bigData2');

        let result2 = bigData.reduce( (acc, value) => {
            if(value % 2 === 0) {
                acc.push(value * 2);
            }
            return acc;
        }, []);

        console.timeEnd('bigData2');

        console.log(result1.length,result2.length);
    }
}

function reducerArguments() {
    return {
        mean
    }

    function mean() {

        var let = [1,2,3,3,4,5,3,1];

        console.log(let.reduce(reducer,0));

        function reducer(accumulator, value, index, array) {

            if(index === array.length - 1) {
                return (accumulator + value) / array.length;
            }

            return accumulator + value;
        }
    }
}

function advancedReduce() {

    return {
        flatten,
        reduceRight
    }

    function flatten () {

        var data = [[1,2,3],[4,5,6],[7,8,9]];

        var flattened = data.reduce((acc,value) => {
            return acc.concat(value);
        }, []);

        console.log(flattened);
    }

    function reduceRight() {

        var data = [1,2,3,4,5];
        var sum = data.reduceRight( (acc,value,index) => {
            console.log(index);
            return acc + value;
        }, 0);

        console.log(sum);
    }
}