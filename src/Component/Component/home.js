import NewDeal from "../Component/NewDeal/newDeal"
import DealsOfDay from "./NewDeal/DealsOfDay";
import TrendingDeal from "./NewDeal/TrendingDeal";
const Home = () => {
  const bodyStyle = {
    minHeight: 'calc(100vh - 120px)', /* Adjust based on header and footer height */
    padding: '20px',
    backgroundColor: 'rgb(36 36 36)'

  };

  return (
    <main style={bodyStyle}>
      {/* Your main content */}
      <NewDeal />
      <DealsOfDay />
      <TrendingDeal/>

      {/* <SearchResult /> */}
    </main>
  );
};

export default Home