import styles from './styles.module.scss';
import Button from '../button/Button';
import { useRouter } from 'next/router';
import strings from '../../utils/constants'

const LoginWrapper = () => {
    const { container, containerMob, containerTab, containerDesktop, loginBtn } = styles;
    const router = useRouter();

    const handleLogin = () => {
        router.push('/dashboard')
    }

    return (
        <><div className={`${container} ${containerMob} ${containerTab} ${containerDesktop}`}>
            <div className={loginBtn}>
                <Button handleClick={handleLogin} name={strings.btnLabel} />
            </div>
        </div>
        </>
    )
}

export default LoginWrapper;