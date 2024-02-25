import React, { Component } from 'react'

export class Order extends Component {
    render() {

        return (
            <div className='order'>
                <h1 style={{color: 'white'}}>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
                <h3 style={{color: 'white'}}>1. Контактная информация </h3>
                <input name="Имя*" placeholder="Имя*"/>
                <input name="tel*" type="tel" placeholder="Телефон*"/>
                <h3 style={{color: 'white'}}>2. Доставка</h3>
                <input type="button" value="Доставка"></input>
                <input type="button" value="Самовывовоз"></input>
                <h3 style={{color: 'white'}}>Адрес доставки</h3>
                <input name="Укажите улицу*" placeholder="Укажите улицу*"/>
                <input name="Номер дома*" placeholder="Номер дома*"/>
                <h3 style={{color: 'white'}}><input name="№ квартиры/офиса*" placeholder="№ квартиры/офиса*"/>
                <input name="Подъезд*" placeholder="Подъезд*"/>
                <input name="Этаж*" placeholder="Этаж*"/></h3>
                <h3 style={{color: 'white'}}><input name="Комментарий" placeholder="Комментарий"/></h3>
                <h3 style={{color: 'white'}}>3. Оплатить</h3>
                <input type="button" value="Оплата онлайн"></input>
                <input type="button" value="Курьеру картой"></input>
                <input type="button" value="Наличными"></input>
                <h3 style={{color: 'white'}}>4. Когда доставить</h3>
                <h3 style={{color: 'white'}}><input type="button" value="В ближайшее время"/>
                <input type="button" value="Ко времени"/>
                <input name="Укажите время" placeholder="Укажите время"/></h3>
                <h3 style={{color: 'white'}}>Хотите мы перезвоним?</h3>
                <p style={{color: 'white'}}><input name="phone" type="radio" value="Не перезванивать"/> Не перезванивать</p>
                <p style={{color: 'white'}}><input name="phone" type="radio" value="Потребуется звонок оператора"/> Потребуется звонок оператора</p>
                <h3 style={{color: 'white'}}><input type="checkbox" name="accept" /> Я согласен на обработку моих перс. данных в соответствии с <a style={{color: 'green'}} href="http://site.ru/privacy/"> Условиями </a></h3>
                <h3><input type="button" value="Оформить заказ"></input></h3>
            </div>
        )
    }
}

export default Order