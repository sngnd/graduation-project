import { ExternalLink, InternalLink } from "./NavigationLinkStyles";
import { INavigationLinkProps } from "./types";
import colors from "styles/colors";

const NavigationLink = ({
  children,
  color = `${colors.WHITE}`,
  className,
  externalLink = false,
  openInNewTab = false,
  onClick,
  href,
}: INavigationLinkProps) => {
  return externalLink ? (
    <ExternalLink
      // eslint-disable-next-line no-script-url
      href={href}
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
      color={color}
      className={className}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      exact
      onClick={onClick}
      role="link"
      target={openInNewTab ? "_blank" : "_self"}
      to={href}
      color={color}
      href={href}
      className={className}
    >
      {children}
    </InternalLink>
  );
};

export default NavigationLink;
