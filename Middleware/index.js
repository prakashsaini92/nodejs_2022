const reqFilter = (req,res, next) => {
    if(!req.query.age) {
        res.send("Provide Provide Age")
    } else {
      next()
    }
    
  }


  module.exports = reqFilter