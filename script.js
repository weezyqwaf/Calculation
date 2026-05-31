document.querySelector('.calc-btn').addEventListener('click', function() {
    let h = parseFloat(document.querySelector('.input-h').value);
    let b = parseFloat(document.querySelector('.input-b').value);
    let s = parseFloat(document.querySelector('.input-s').value);
    let r = parseFloat(document.querySelector('.input-r').value);
    let a = parseFloat(document.querySelector('.input-a').value);
    
    let ratio = r / s;
    let x = 0.5;
    
if (s <= 3 && r > s) { 
        x = 0.5 
    } else if (s <= 3 && r < s) { 
        x = 0.33 
    } else if (s > 3 && ratio < 1.5) { 
        x = 0.33 
    } else if (s > 3 && ratio >= 1.5 && ratio <= 5) { 
        x = 0.4 
    } else if (s > 3 && ratio > 5) { 
        x = 0.5 
    }

    
    let rho = r + x * s;
    let l1 = b - (r + s);
    let l2 = (Math.PI * rho * a) / 180;
    let l3 = h - 2 * (r + s);
    
    let L = 2 * l1 + 2 * l2 + l3;
    
    document.querySelector('.output-x0').textContent = x;
    document.querySelector('.output-bzag').textContent = L.toFixed(2);
});
