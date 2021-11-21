import { useEffect, useState } from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import axios from "axios";
import CardList from "../cardlist";
import SearchBox from "../components/header/searchbox";
import { HeaderStyle } from "../components/header/styles";
import loader from "../assets/image/loader.gif";
import Modal from "../components/modal";
const Home = () => {
  const [beerList, setBeerList] = useState([]);
  const [isSearchText, setIsSearchText] = useState("");
  const [modalData, setModalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [favItems, setFavItems] = useState<any>([]);

  const filteredData = beerList.filter((beer: { name: string }) => {
    if (beer.name.toLowerCase().includes(isSearchText.toLowerCase()))
      return beer;
  });

  useEffect(() => {
    setShowLoader(true);
    fetchData();
  }, []);

  const handleModalData = (beer: any) => {
    setModalData(beer);
    console.log(beer);
  };

  const fetchData = () => {
    axios
      .get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`)
      .then((res) => {
        setBeerList(res.data);
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFavBeer = (favBeer: any) => {
    if(favItems.indexOf(favBeer) !==-1)
    {
      console.log(favItems);
    }
    else {
      setFavItems([...favItems, favBeer]);
      console.log(favItems);
    }

  };

  return (
    <div>
      <Navbar favItems={favItems} />
      <Header />
      <HeaderStyle>
        <div className="container">
          <SearchBox
            handleChange={(e: any) => {
              setIsSearchText(e.target.value);
            }}
            placeholder="Search for any User"
          />
        </div>
      </HeaderStyle>
      {showLoader ? (
        <img src={loader} alt="" />
      ) : (
        <CardList
          onClickModal={() => setShowModal(!showModal)}
          beerlist={filteredData}
          data={(beer: any) => handleModalData(beer)}
          fav={(favBeer: any) => handleFavBeer(favBeer)}
        />
      )}
      {showModal && modalData ? <Modal info={modalData} /> : null}
    </div>
  );
};

export default Home;
