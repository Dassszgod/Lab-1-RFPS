import {useEffect} from 'react';
import "../styles/style.css";
import ServiceCard from "../components/ServiceCard";
import cloth from "../assets/cloth.jpg";
import car from "../assets/car.jpg";
import tech from "../assets/tech.jpg";
import mebli from "../assets/mebli.jpg";


function Services() {

    const sewing = {
        picture: cloth,
        backTitle: "Умови",
        conditions: "прання виробу лише при температурі до 40°C, ручне віджимання, без відбілювачів.",
        title: "Пошиття одягу",
        list: [
            "Індивідуальний дизайн",
            "Підгонка по фігурі",
            "Ремонт швів",
            "Пошиття костюмів",
            "Вибір тканини для пошиття"
        ]
    };


    const carRepair = {
        picture: car,
        backTitle: "Уточнення",
        conditions: "ремонтуємо автомобілі будь-якого типу",
        title: "Ремонт авто",
        list: [
            "Ремонт двигуна",
            "Заміна масла",
            "Фарбування кузова",
            "Ремонт гальмівної системи",
            "Діагностика авто"
        ]
    };


    const techRepair = {
        picture: tech,
        backTitle: "Уточнення",
        conditions: "ремонтуємо та обслуговуємо офісну техніку будь-яких типів",
        title: "Ремонт оргтехніки",
        list: [
            "Ремонт принтерів",
            "Чистка ноутбуків",
            "Налаштування ПК",
            "Заміна комплектуючих",
            "Діагностика несправностей"
        ]
    };


    const crafts = {
        picture: mebli,
        backTitle: "Уточнення",
        conditions: "виготовляємо меблі та сувеніри будь-якої складності",
        title: "Виготовлення виробів",
        list: [
            "Меблі на замовлення",
            "Сувеніри ручної роботи",
            "3D-друк",
            "Декор для дому",
            "Індивідуальні подарунки"
        ]
    };

    return (
        <>
        
            <main className="hero"> 
                <h2>Каталог сервісів</h2>

                <section className="services">
                    
                    <ServiceCard cardData={sewing}/>
                    <ServiceCard cardData={carRepair}/>
                    <ServiceCard cardData={techRepair}/>
                    <ServiceCard cardData={crafts}/>

                </section>

            </main>
        
        </>
    )
}

export default Services;