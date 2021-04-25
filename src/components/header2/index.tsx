import { FunctionComponent, h } from 'preact';
import style from './style.css';

const Header2: FunctionComponent = () => {
    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header2;
