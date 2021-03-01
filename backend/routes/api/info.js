const router = require('express').Router()
const { MarketDetail, Stock } = require('../../db/models/')



router.get('/:symbol', async (req, res) => {
    const symbol  = req.params.symbol
    const stockQuery = await Stock.findOne({
        where: {
            ticker: symbol,
        },
        raw: true,
    })
    let marketQuery = {}
    if(stockQuery){
        marketQuery = await MarketDetail.findOne({
        where: {
          stockId: stockQuery.id,
        },
        raw: true,
      });
    }
     


    res.json({ ...stockQuery, ...marketQuery })
})



module.exports = router