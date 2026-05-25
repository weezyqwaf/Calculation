document.querySelector('.calc-btn').addEventListener('click', function() {
    let h = parseFloat(document.querySelector('.input-h').value);
    let b = parseFloat(document.querySelector('.input-b').value);
    let s = parseFloat(document.querySelector('.input-s').value);
    let r = parseFloat(document.querySelector('.input-r').value);
    let a = parseFloat(document.querySelector('.input-a').value);
    
    let ratio = r / s;
    let x = 0.5;
    
    if (ratio < 0.5) {
        x = 0.3;
    } else if (ratio >= 0.5 && ratio < 1) {
        x = 0.35;
    } else if (ratio >= 1 && ratio < 2) {
        x = 0.42;
    } else if (ratio >= 2 && ratio < 5) {
        x = 0.45;
    } else {
        x = 0.5;
    }
    
    let rho = r + x * s;
    let l1 = b - (r + s);
    let l2 = (Math.PI * rho * a) / 180;
    let l3 = h - 2 * (r + s);
    
    let L = 2 * l1 + 2 * l2 + l3;
    
    document.querySelector('.output-x0').textContent = x;
    document.querySelector('.output-bzag').textContent = L.toFixed(2);
});