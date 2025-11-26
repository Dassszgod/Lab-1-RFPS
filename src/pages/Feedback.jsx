import { useEffect } from "react";
import "../styles/feedback.css";

function Feedback() {

    return (

        <main className="hero">
            <h2>Форма зворотнього зв’язку</h2>
            <form>
                <fieldset>
                    <legend>Персональна інформація</legend>

                    <label htmlFor="fullname">Прізвище та ім'я: </label>
                    <input type="text" id="fullname" name="fullname" required/>

                    <label htmlFor="email">Електронна пошта: </label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="age">Вік: </label>
                    <input type="number" id="age" name="age" min="1" max="100" required/>
              
                </fieldset>

                <label htmlFor="purpose">Мета зворотнього зв'язку: </label>
                <select id="purpose" name="purpose">
                    <option>Співпраця</option>
                    <option>Скарга на неякісний пошив</option>
                    <option>Пропозиція</option>
                    <option>Наявність помилки</option>
                    <option>A</option>
                    <option disabled>B</option>
                </select>

                <label htmlFor="details">Детально: </label>
                <div className="details-container">
                    <textarea id="details" name="details" maxLength="500" placeholder="Введіть ваш текст"></textarea>
                    <div className="tooltip">
                        Дякуючи Вам, ми стаємо кращі!<br/>
                        Конкретизуйте мету звернення, будь ласка.
                    </div>
                </div>


                <div className="agreement">
                    <input type="checkbox" id="agree" name="agree" required/>
                    <label htmlFor="agree" >Погоджуюсь на обробку персональних даних</label>
                </div>
                     
                <div className="buttons">
                    <button type="reset">Очистити</button>
                    <button type="submit">Надіслати</button>
                </div>
                
            </form>
        </main>

    )

}

export default Feedback;