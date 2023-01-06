import React, { useContext } from "react";
import AuthContext from "../../features/auth/AuthContext";
import Banner from "../../common/components/banner/Banner";
import Carousel from "../../common/components/carrousel/Carousel";
import DICC from "../../common/diccionario/diccionario";
import Footer from "../../common/components/footer/Footer";
import Navbar from "../../common/components/navbar/Navbar";
import Title from "../../common/components/title/Title";
import useFetch from "../../common/hooks/useFetch";
import { getPopularSeries } from "../../features/series/services/getPopularSeries";
import { getTopRatedSeries } from "../../features/series/services/getTopRatedSeries";
//import { texts } from "../../utils/constants";
import CardModal from "../../common/components/cardModal/CardModal";
// Redux
import { abrir, cerrar } from "../../common/components/cardModal/cardModalSlice";
import { useSelector, useDispatch } from 'react-redux';

const TvSeries = () => {
  const { language } = useContext(AuthContext);
  const { data: series, error, isLoading } = useFetch(getPopularSeries,language);
	const { data: series2, error2, isLoading2 } = useFetch(getTopRatedSeries,language);

  const dispatch = useDispatch();
	// Ante cada render cierro el modal por las dudas
	dispatch(cerrar());
  return (
  <div>
      <Navbar origen={"tvseries"} />  
      <br />
			<CardModal/>
      <Banner entities={series2}/>
      <br />
      <br />
      <Title text={DICC.series_view.title2[language]} />
			<Carousel entities={series} />
      <br />
			<Title text={DICC.series_view.title3[language]} />
			<Carousel entities={series2} />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default TvSeries;
