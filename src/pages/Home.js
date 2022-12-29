import Homecontent from "../components/Homecontent";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="home-content py-5">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Homecontent />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
