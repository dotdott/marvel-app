import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { CardsContext } from "../../contexts/CardsContext";
import { Types } from "../../store/reducers/cardsReducer";

import { ICard, IStateCardProps } from "../../types_global";
import { WindowResize } from "../../Utils/WindowResize";

import { Card } from "../../components/Card";
import { Dropdown } from "../../components/Dropdown";
import CardModal from "../../components/CardModal";
import BrowseNavbar from "./components/Navbar";

import { CardWrapper, Container, Loading, CardModalBackground } from "./styles";
import { useHistory } from "react-router-dom";

function Browse() {
  const { showDetails } = useContext(CardsContext);

  const location = useLocation();
  const history = useHistory();

  const { data, offset, route, isLoading } = useSelector(
    (state: IStateCardProps) => state.stateCards
  );

  const dispatch = useDispatch();

  const handlePathByURL = (url: string) => {
    if (url === "/browse") return "/characters";
    if (url === "/browse/series") return "/series";
    if (url === "/browse/comics") return "/comics";

    history.push("/browse");
    return "/characters";
  };

  const size = WindowResize();

  useEffect(() => {
    const path = handlePathByURL(location.pathname);

    dispatch({
      type: Types.CARDS_STORE_REQUEST,
      route: path,
      offset,
    });
  }, []);

  return (
    <Container>
      <BrowseNavbar />

      {isLoading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          {location.pathname === "/browse/movies" && <Dropdown />}

          {showDetails && (
            <CardModalBackground>
              <CardModal />
            </CardModalBackground>
          )}

          <CardWrapper>
            {data &&
              data.map((item: ICard) => (
                <Card card={item} key={item.id} route={route} />
              ))}
          </CardWrapper>

          {/* {   size.width !== undefined && (

              <CardWrapper>{displayCards}</CardWrapper>
             )} */}
        </>
      )}
    </Container>
  );
}

export default Browse;
