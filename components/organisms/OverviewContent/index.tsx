import Category from "./Category";
import TableRow from "./TableRow";

const OverviewContent = () => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category icon="desktop" nominal={18000500}>
                Game <br /> Desktop
              </Category>
              <Category icon="mobile" nominal={8455000}>
                Game <br /> Mobile
              </Category>
              <Category icon="desktop" nominal={5000000}>
                Other <br /> Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="Mobile Legends"
                  category="Mobile"
                  item={250}
                  price={290000}
                  status="Pending"
                  image="/img/overview-1.png"
                />
                <TableRow
                  title="Ninja Heroes"
                  category="Mobile"
                  item={250}
                  price={290000}
                  status="Failed"
                  image="/img/overview-1.png"
                />
                <TableRow
                  title="Clash of Clans"
                  category="Mobile"
                  item={250}
                  price={290000}
                  status="Success"
                  image="/img/overview-1.png"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OverviewContent;
