$(document).ready(function () {

    $('.add').on('click', function (e) {

        var $num1 = $('#num1').val();
        var $num2 = $('#num2').val();

        var valid = App.validate($num1, $num2)

        if (valid == true) {
            $('.result span').css('color', 'black');
            $('.result span').text($num1 + " + " + $num2 + " = " + App.calculate().add($num1, $num2));
        }
        else {
            $('.result span').css('color', 'red');
            $('.result span').text("Please enter a valid number");
        }

        //reset inputs
        $('#num1').val("");
        $('#num2').val("");
    })

    $('.subtract').on('click', function (e) {

        var $num1 = $('#num1').val();
        var $num2 = $('#num2').val();
        
        var valid = App.validate($num1, $num2)

        if (valid == true) {
            $('.result span').css('color', 'black');
            $('.result span').text($num1 + " - " + $num2 + " = " + App.calculate().subtract($num1, $num2));
        }
        else {
            $('.result span').css('color', 'red');
            $('.result span').text("Please enter a valid number");
        }

        //reset inputs
        $('#num1').val("");
        $('#num2').val("");
    })

});

var App = new App();

function App() {

    function calculate() {

        function add(num1, num2) {

            return parseInt(num1) + parseInt(num2);
        }

        function subtract(num1, num2) {

            return parseInt(num1) - parseInt(num2);
        }

        return {
            add: add,
            subtract: subtract
        }
    }

    function validate(num1, num2) {

        var numericReg = /^-?\d*\.{0,1}\d+$/;

        if ((!numericReg.test(num1)) || !numericReg.test(num2)) {
            return false;
        }
        else {
            return true;
        }
    }

    return {
        calculate: calculate,
        validate: validate
    }
};




