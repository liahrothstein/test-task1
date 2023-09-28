import facebook from '../../assets/images/social1.png';
import instagram from '../../assets/images/social2.png';
import vk from '../../assets/images/social3.png';
import linkedin from '../../assets/images/social4.png';

import './footer.scss';

export const Footer = () => {

    return (
        <div className="footer">
            <div className="copyrights">
                © 2022-2023 CircleDevs. Все права защищены.
            </div>
            <div className="socials">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={vk} alt="vk" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
    )
}