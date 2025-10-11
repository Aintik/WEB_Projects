function kim(a,b,c){
    switch(c){
        case '+': return a + b; break;
        case '-': return a - b; break;
        case '*': return a * b; break;
        case '/': return a / b; break;
        case '%': return a % b; break;
        default: return 'Error'
    }
}

function kim2(a,b,c,d) {
    return a[0]+b[1]+c[2]+d[3]
}

function kim3(mat, x, y) {
    let state = (
        mat[x - 1] &&
        mat[x + 1] &&
        mat[x][y] &&
        mat[x - 1][y] &&
        mat[x - 1][y - 1] &&
        mat[x][y - 1] &&
        mat[x + 1][y - 1] &&
        mat[x + 1][y] &&
        mat[x + 1][y + 1] &&
        mat[x][y + 1] &&
        mat[x - 1][y + 1]);
    
    if (state) {
        console.log(mat[x][y] + mat[x - 1][y] + mat[x - 1][y - 1] + mat[x][y - 1] + mat[x + 1][y - 1] + mat[x + 1][y] + mat[x + 1][y + 1] + mat[x][y + 1] + mat[x - 1][y + 1]);
    } else {
        console.log(NaN);
    }
    
}
module.exports = {kim, kim2, kim3,}