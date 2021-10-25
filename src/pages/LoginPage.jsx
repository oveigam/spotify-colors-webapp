import LinkButton from '../components/common/LinkButton';
import useTheme from './../hooks/useTheme';
import Page from './../components/layout/Page';
import { motion } from 'framer-motion';
import spotifyAuthUrl from '../util/spotifyAuthUrl';

const lines = {
    hidden: {
        pathLength: 0,
        strokeWidth: 0
    },
    visible: {
        pathLength: 1,
        strokeWidth: 1.5
    }
}

const LoginPage = () => {
    const theme = useTheme()

    return (
        <Page center overflow >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="animation"
                width={300}
                height={300}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={theme.primary}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ y: '-60vh' }}
                animate={{ y: 0 }}
                transition={{ duration: .4, type: 'spring', stiffness: 45 }}
                onClick={() => localStorage.setItem("accessToken", "holitas")}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <motion.circle
                    cx={12}
                    cy={12}
                    r={9}
                    fill={theme.primary}
                    stroke="none"
                />
                <motion.path
                    variants={lines}
                    initial="hidden"
                    animate="visible"
                    stroke={theme.surface2}
                    transition={{
                        default: { duration: .6, ease: 'easeInOut', delay: .4 }
                    }}
                    d="M9 15c1.5 -1 4 -1 5 .5"
                />
                <motion.path
                    variants={lines}
                    initial="hidden"
                    animate="visible"
                    stroke={theme.surface2}
                    transition={{
                        default: { duration: .7, ease: 'easeInOut', delay: .4 }
                    }}
                    d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"
                />
                <motion.path
                    variants={lines}
                    initial="hidden"
                    animate="visible"
                    stroke={theme.surface2}
                    transition={{
                        default: { duration: .8, ease: 'easeInOut', delay: .4 }
                    }}
                    d="M7 9c2 -1 6 -2 10 .5"
                />
            </motion.svg>
            <motion.div
                className="animation"
                initial={{ y: '110vh' }}
                animate={{ y: 0 }}
                transition={{ y: { duration: .4, type: 'spring', stiffness: 45 } }}
            >
                <LinkButton
                    style={{ fontSize: '1.2rem', marginTop: 25 }}
                    href={spotifyAuthUrl}
                >
                    LOGIN WITH SPOTIFY
                </LinkButton>
            </motion.div>

        </Page>
    );
}

export default LoginPage;