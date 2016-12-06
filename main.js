reducer().example1();

function reducer() {

    return {
        example1
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
}
