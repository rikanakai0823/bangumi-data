var fse = require('fs-extra')
var config = require('./config')
process.env.TZ = 'Asia/Tokyo'

var schedule = fse.readJsonSync(process.argv[2])

schedule.forEach(function(chan) {
  if (config.cids.indexOf(chan.id) == -1) return 0
  chan.programs.forEach(function(prog) {
    let stime = new Date(prog.start)
    let mon = `0${stime.getMonth() + 1}`.slice(-2)
    let date = `0${stime.getDate()}`.slice(-2)
    fse.outputJsonSync(`./programs/${stime.getFullYear()}/${mon}/${date}/${prog.id}.json`, prog, {spaces: 2})
  })
})
