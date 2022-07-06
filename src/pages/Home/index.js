import { Text, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg-home.jpg)`,
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            position: 'absolute',
            overflow: 'hidden'
        }}>
            <Text
                h1
                size={160}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    textAlign: 'center',
                    marginTop: '1%'
                }}
                weight={'black'}
            >
                Fashion Store
            </Text>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    color={'gradient'}
                    size={'lg'}
                    auto
                    css={{
                        fontWeight: '$bold',
                        fontSize: 15,
                        marginTop: 200
                    }}
                    rounded
                    onClick={() => navigate('/store')}
                >
                    Go to the store
                    &nbsp;
                    <HiArrowNarrowRight />
                </Button>
            </div>
        </div>
    )
}

export default Home;