import { NavBar, PhotosGrid } from "modules";
import { RootState } from "store/createStore";
import { useSelector } from "react-redux";

const ResultsPage = () => {
  const photos = useSelector((state: RootState) => state.curatedPhotos);

  return (
    <>
      <NavBar />
      <PhotosGrid photos={photos} isHomePage={false} />
    </>
  );
};

export default ResultsPage;
