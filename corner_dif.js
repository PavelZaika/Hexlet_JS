const diff = (a, b) => (a === 0 && b > 180) ? 360 - b : b - a;;

console.log(diff(120, 280));