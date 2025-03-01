import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faExternalLink,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  // Brand
  faGithub,
  faLinkedin,

  // Solid
  faEnvelope,
  faExternalLink,
  faSquare,

  // Regular
  faCircle,
);

export default library;
