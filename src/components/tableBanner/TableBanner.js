import React from 'react';
import './dist/tableBanner.css'
import CoinListTable from '../coinListTable/CoinListTable' 
function TableBanner() {
    return (
        <div className="bottom">
<div className="content-block">
<div className="content" >      
<div>MARKET CAP</div>
<div>$2.74T</div>
</div>
<div className="content" >
<div>EXCHANGE VOL</div>
<div>$147.21B</div>
</div>
<div className="content" >
<div>ASSETS</div>
<div>2,290</div>
</div>
<div className="content" >
<div>EXCHANGES</div>
<div>73</div>
</div>
<div className="content" >
<div>MARKETS</div>
<div>18,746</div>
</div>
<div className="content" >
<div>BTC DOM INDEX</div>
<div>41.4%</div>
</div>
</div>
<CoinListTable className="table" />
      </div>
    )
}

export default TableBanner;