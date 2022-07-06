import { Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {

    return (
        <nav className='nav'>
            <Text
                size={30}
                weight={'black'}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%"
                }}
            >
                <Link to={'/'}>
                    Fashion Store
                </Link>
            </Text>
            <Text weight={'bold'}>
                WOMEN
            </Text>
            <Text weight={'bold'}>
                PLUS + CURVE
            </Text>
            <Text weight={'bold'}>
                ACCESORIES
            </Text>
            <Text weight={'bold'}>
                ACTIVEWEAR
            </Text>
            <Text weight={'bold'}>
                MEN
            </Text>
            <Text weight={'bold'}>
                GIRLS + BOYS
            </Text>
            <Text weight={'bold'} css={{ color : '$error' }}>
                SALE
            </Text>
        </nav>
    )
}

export default Navbar;