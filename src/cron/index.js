import publishAuction from "./Auction.cron";

function init() {
  publishAuction.start();
}

module.exports = {
  init
};
