module.exports = function solveEquation(equation) {

    let arr = equation.replace(/\s/g, '').replace(/\*/g,'').replace(/x\^2/g, 'a').replace(/x/g, 'b').split('');

    let a = [];
    let b = [];
    let c = [];

    let x1 = 0;
    let x2 = 0;
    let res = [];

    let aIndex = 0;
    let bIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a') {
            if ( i == 0) {
                a[0] = 1;
            } else {
                for (let k = 0; k < i; k++) {
                    a.push(arr[k]);
                }
            }
            aIndex = i;
        }

        if (arr[i] == 'b') {
            if (arr[i - 1] == '+') {
                b[0] = 1;
            } else if (arr[i - 1] == '-') {
                b[0] = -1;
            } else {
                for (let k = aIndex + 1; k < i; k++) {
                    b.push(arr[k]);
                }
            }
            bIndex = i;
        }
    }

    a = Number(a.toString().replace(/,/g, ''));
    b = Number(b.toString().replace(/,/g, ''));


    if (bIndex != 0) {
        arr.splice(0, bIndex + 1);
        c = Number(arr.toString().replace(/,/g, ''));
    } else {
        arr.splice(0, aIndex + 1);
        c = Number(arr.toString().replace(/,/g, ''));
        b = 0;
    }

    if ( a!= 0 && (b != 0 || c != 0)) {
        x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    }

    res.push(Math.round(x1));
    res.push(Math.round(x2));

    return res.sort((a, b) => a - b);

}

//console.log(solveEquation('-20 * x^2 - 108797540 * x - 130011773690520'));