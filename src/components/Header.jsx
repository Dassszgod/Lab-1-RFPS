import "../styles/style.css";
import logo from "../assets/logo.png";
import { useEffect } from "react";

function Header() {

    useEffect(() => {

        document.querySelectorAll('.menu-item > a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                const parent = link.parentElement;
                parent.classList.toggle('open');

                document.querySelectorAll('.menu-item').forEach(item => {
                    if (item !== parent) item.classList.remove('open');
                });
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.menu-item')) {
                document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('open'));
            }
        });

    }, []);

    return (
        <header className="catalog-header">
            <a>
                <img src={logo} alt="лого"/>
                <h1>Service.ua</h1>
            </a>
            <nav>
                <ol>
                    <li className="menu-item">
                        <a href="./services.html">Каталог сервісів</a>
                        <ul className="submenu">
                            <li><a href="#sewing">Пошиття одягу</a></li>
                            <li><a href="#car-repair">Ремонт авто</a></li>
                            <li><a href="#tech-repair">Ремонт оргтехніки</a></li>
                            <li><a href="#crafts">Виготовлення виробів</a></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="./feedback.html">Зворотній зв'язок</a>
                        <ul className="submenu">
                            <li><a href="./feedback.html">Заповнити форму</a></li>
                            <li><a href="#support">Підтримка</a></li>
                            <li><a href="#faq">Питання / Відповіді</a></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="">Відгуки про сервіси</a>
                        <ul className="submenu">
                            <li><a href="#latest">Останні відгуки</a></li>
                            <li><a href="#top">Найкращі сервіси</a></li>
                            <li><a href="#add">Додати відгук</a></li>
                        </ul>
                    </li>
                </ol>
            </nav>
        </header>
    )
}

export default Header;