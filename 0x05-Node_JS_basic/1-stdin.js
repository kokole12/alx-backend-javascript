process.stdout.write('Welcome to Holberton School, what is your name?\n')

process.stdin.on('data', function (input) {
    process.stdout.write('Your name is: ' + input.toString())
    process.exit()
})

process.on('exit', function(){
    process.stdout.write("This important software is now closing")
})
