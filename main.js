// reducer().example1();
// reducer().example2();
fromArrayToObject().example();

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
