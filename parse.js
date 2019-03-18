var fse = require('fs-extra')
var config = require('./config')

var schedule = fse.readJsonSync(process.argv[2])

schedule.forEach(function(chan) {
  chan.programs.forEach(function(prog) {
    fse.outputJsonSync(`./programs/${prog.id.slice(-2)}/${prog.id}.json`, prog)
  })
})
