var fse = require('fs-extra')
var config = require('./config')

var schedule = fse.readJsonSync(process.argv[2])

schedule.forEach(function(chan) {
  if (config.cids.indexOf(chan.id) == -1) return 0
  chan.programs.forEach(function(prog) {
    fse.outputJsonSync(`./programs/${parseInt(prog.id, 36).toString(16).slice(-2)}/${prog.id}.json`, prog)
  })
})
