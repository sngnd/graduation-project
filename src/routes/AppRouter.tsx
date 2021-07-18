import { PAGE_ROUTES } from "constants/pageRouter";
import { Switch } from "react-router";
import { Route } from "react-router";
import { HomePage, ResultPage } from "pages";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={PAGE_ROUTES.HOME}>
        <HomePage />
      </Route>
      <Route path={PAGE_ROUTES.RESULTS}>
        <ResultPage />
      </Route>
    </Switch>
  );
};

export default AppRouter;
