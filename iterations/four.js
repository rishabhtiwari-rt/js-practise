const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by app'
}

for (const element in myObj) {
   console.log(`${element} is shortcut for ${myObj[element]}`)
}