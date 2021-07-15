import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { Card } from "../../components/Card";
import CardModal from "../../components/CardModal";
import { Dropdown } from "../../components/Dropdown";
import Loader from "../../components/Loader";
import { Types } from "../../store/reducers/cardsReducer";
import { ICard, IStateCardProps } from "../../types_global";
import BrowseNavbar from "./components/Navbar";
import { CardWrapper, Container, SliderWrapper, Attribution } from "./styles";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const settings = {
  infinite: true,
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

/*eslint-disable*/
function Browse() {
  const location = useLocation();
  const history = useHistory();

  const { data, offset, route, isLoading, showModal, selectedCard } =
    useSelector((state: IStateCardProps) => state.stateCards);

  const dispatch = useDispatch();

  const handlePathByURL = (url: string) => {
    if (url === "/browse") return "/characters";
    if (url === "/browse/series") return "/series";
    if (url === "/browse/comics") return "/comics";

    // case user tries to acess any other route
    history.push("/browse");
    return "/characters";
  };

  useEffect(() => {
    const path = handlePathByURL(location.pathname);

    dispatch({
      type: Types.CARDS_STORE_REQUEST,
      route: path,
      offset,
    });
  }, []);

  function handleHideModal() {
    return dispatch({
      type: Types.SET_SELECTED_CARD,
      selectedCard: {},
      showModal: false,
    });
  }

  return (
    <Container>
      <BrowseNavbar />

      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardWrapper>
          {location.pathname === "/browse/series" && <Dropdown />}

          <SliderWrapper>
            <Slider {...settings}>
              {data &&
                data.map((item: ICard) => (
                  <Card card={item} key={item.id} route={route} />
                ))}
            </Slider>
          </SliderWrapper>
        </CardWrapper>
      )}
      {showModal && (
        <CardModal
          hide={handleHideModal}
          type={location.pathname}
          card={selectedCard}
        />
      )}

      <Attribution href="http://marvel.com" target="_blank">
        Data provided by Marvel. © 2021 MARVEL
      </Attribution>
    </Container>
  );
}

export default Browse;
