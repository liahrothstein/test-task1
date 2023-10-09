import { Menu } from '../menu';
import { RoutesContent } from '../routes-content';

import './routes-content-menu.scss';

export const RoutesContentMenu = () => {

    return (
        <div className="routesContentMenu">
            <Menu />
            <RoutesContent />
        </div>
    )
}