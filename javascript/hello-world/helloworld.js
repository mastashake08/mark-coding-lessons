function sayHello() {
  const prompt = require('prompt')
  prompt.start()
  prompt.get(['greeting', 'name'], function (err, result) {
    console.log(`${greeting} ${name}`)
  })
}
sayHello()
