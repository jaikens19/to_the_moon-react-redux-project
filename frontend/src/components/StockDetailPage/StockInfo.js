

export default function StockInfo({ info }){
    let dash = '\u2014'
    if(!info) {
      return (
        <div>
          <h2>No Info</h2>
        </div>
      );
    } 
    const newDate = new Date(info?.listdate)
    const date = <>{`${newDate.getMonth() + 1}/${newDate.getDate() + 1}/${newDate.getFullYear()}`}</>
      return (
        <div>
          <h1>About</h1>
          <hr></hr>

          <div>
            <p>{info?.description}</p>
          </div>
          <div>
            <div>
              <b>CEO</b>
              <p>{info?.ceo ? info.ceo : dash}</p>
            </div>
          </div>
          <div>
            <div>
              <b>Employees</b>
              <p>{info?.employees ? info.employees : dash}</p>
            </div>
          </div>
          <div>
            <div>
              <b>Headquarters</b>
              <p>{info?.hq_address ? info.hq_address : dash}</p>
            </div>
          </div>
          <div>
            <div>
              <b>List Date</b>
              <p>{info?.listdate ? date : dash}</p>
            </div>
          </div>

          <div>
            <div>
              <b>Market Cap</b>
              <p>{info?.marketcap ? info.marketcap : dash}</p>
            </div>
          </div>
          <div>
            <div>
              <b>PE Ratio</b>
              <p>{info?.priceToEarningsRatio ? info.priceToEarningsRatio : dash}</p>
            </div>
          </div>
          <div>
            <div>
              <b>Dividend Yield</b>
              <p>{info?.dividendYield ? info.dividendYield : dash}</p>
            </div>
          </div>
          <div>
            <div>
              <b>Sales Per Share</b>
              <p>{info?.salesPerShare ? info.salesPerShare : dash}</p>
            </div>
          </div>

          {/* <h2>{info?.name ? info.name : dash}</h2> */}
        </div>
      );
}