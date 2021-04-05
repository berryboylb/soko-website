import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faWhatsapp, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { fas, faCoffee, faShoppingBag, faUser, faStore, faSearch } from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
    library.add(fab, fas, faShoppingBag, faUser, faStore, faSearch, faCoffee, faTwitterSquare, faWhatsapp, faLinkedin, faGithub);
}
export default initFontAwesome;