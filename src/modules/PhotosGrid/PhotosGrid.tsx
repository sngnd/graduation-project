import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImageCard } from "..";
import { fetchPhotos } from "store/photos/actions";
import { fetchCuratedPhotos } from "store/curatedPhotos/actions";
import { RootState } from "store/createStore";
import {
  Bottom,
  Button,
  Container,
  Loader,
  LoaderWrapper,
  Photos,
  PhotosWrapper,
} from "./PhotosGridStyles";
import { Text } from "components";
import { colors } from "styles/";
import { clearPages, getToNextPage } from "./redux/actions";
import { Photo } from "pexels";

interface IPhotosProps {
  photos: any;
  isHomePage: boolean;
}

const PhotosGrid = ({ photos, isHomePage }: IPhotosProps) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.page);

  const { query } = useSelector((state: RootState) => state.searchForm);

  useEffect(() => {
    dispatch(clearPages());
  }, [dispatch]);

  useEffect(() => {
    if (!isHomePage) {
      fetchPhotos(dispatch, query, page);
    } else {
      fetchCuratedPhotos(dispatch, page);
    }
  }, [page, dispatch, isHomePage, query]);

  const showPhotos = (): JSX.Element[] | undefined => {
    return photos.data?.photos.map((image: Photo) => (
      <ImageCard image={image} key={image.id} />
    ));
  };

  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch(getToNextPage());
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  let bottomBoundaryRef = useRef(null);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  return (
    <Container>
      {isHomePage ? (
        <></>
      ) : (
        <Link to="/">
          <Button>Back to main page</Button>
        </Link>
      )}
      <Photos>
        {photos.error ? (
          <Text variant="p" color={"red"}>
            {photos.error}
          </Text>
        ) : photos.data?.total_results !== 0 ? (
          <>
            <PhotosWrapper>{showPhotos()}</PhotosWrapper>
          </>
        ) : (
          <Text variant="h1" color={colors.PRIMARY_GREEN}>
            No results
          </Text>
        )}
      </Photos>
      <Bottom
        style={{ border: "1px solid transparent" }}
        ref={bottomBoundaryRef}
      >
        {photos.loading && (
          <LoaderWrapper>
            <Loader>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Loader>
          </LoaderWrapper>
        )}
      </Bottom>
    </Container>
  );
};

export default PhotosGrid;
