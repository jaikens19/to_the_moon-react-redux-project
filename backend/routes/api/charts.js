const axios = require("axios");
const { asyncHandler } = require("../../utils/utils");
const router = require("express").Router();

//localhost:5000/api/charts/AAPL
router.get(
  "/:symbols",
  asyncHandler(async (req, res) => {
    const symbols = req.params.symbols;
    console.log(symbols)
    const limit = symbols.split(",").length > 1 ? "100" : "100";
    const url = `https://data.alpaca.markets/v1/bars/day?symbols=${symbols}&limit=${limit}`;
    const config = {
      headers: {
        "APCA-API-KEY-ID": process.env.APCA_API_KEY_ID,
        "APCA-API-SECRET-KEY": process.env.APCA_API_SECRET_KEY,
      },
    };
    const data = await axios
      .get(url, config)
      .then((res) => {
        const stocks = [];
        // console.log(res.data)
        for (const stock in res.data) {
          stocks.push({
            [stock]: res.data[stock].map((point) => {
              return { Date: new Date(point.t * 1000), Closed: point.c, Open: point.o };
            }),
          });
        }
        return stocks;
      })
      .catch((error) => error);
    res.json(data);
  })
);

module.exports = router;
