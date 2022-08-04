import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../../pages/_app';
import { AppContextInterface } from '../../../types/store';
import constants from '../../constants';
import Authorization from '../Authorization/Authorization';
import { FloodedButton } from '../UI';
import cl from './Header.module.scss';

const Header = observer(() => {
    const { user }: AppContextInterface = useContext(Context)

    const isRoleAdmin: boolean = user.user === constants.userAdmin
    return (
        <header className={cl.header}>
            <a href='/'>myShop</a>
            <div className={cl.header__auth}>
                {isRoleAdmin &&
                    <a href="/admin" className="mr-20" >
                        <FloodedButton>
                            Админка
                        </FloodedButton>
                    </a>
                }
                <Authorization />
            </div>
        </header>
    )
})

export default Header