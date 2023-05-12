import React from "react";

function Test() {

    function multiplyByClosure(mult) {

        const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];

        return values.map(function (value) {
            if (typeof value === 'number') {
                return value * mult
            }
            return value;
        });
    }

    const multiplyByTwo = multiplyByClosure(2);
    console.log(multiplyByTwo);

    const multiplyByThree = multiplyByClosure(3);
    console.log(multiplyByThree);

    function countZeroValues(values) {
        return values.filter(function (value) {
            return value === 0          // changes here
        }).length
    }

    // count zero values, expecting 1:
    console.log(countZeroValues(multiplyByTwo));

    for (let i = 0; i < 10; i++) {

        const button = document.createElement('button');
        button.textContent = `Multiply by ${i}`;
        document.body.appendChild(button);

        button.onclick = function () {
            console.log(multiplyByClosure(i))
        };
    }

    return (
        <></>
    );
}

export default Test;