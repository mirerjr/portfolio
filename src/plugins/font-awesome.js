import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquare } from "@fortawesome/free-solid-svg-icons";

library.add(
  // Brand
  faGithub,
  faLinkedin,

  // Solid
  faEnvelope,
  faSquare,
);

export default library;
